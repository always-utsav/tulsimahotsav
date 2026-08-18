export class FramePreloader {
  private totalFrames: number;
  private basePathPattern: string;
  private images: Map<number, HTMLImageElement> = new Map();
  private loadedCount: number = 0;
  private initialBatchSize: number;
  private isInitialLoaded: boolean = false;
  private onProgressCallback?: (progress: number, isInitialReady: boolean) => void;
  private activeDownloads: number = 0;
  private maxConcurrency: number = 6;
  private queue: number[] = [];
  private cancelled: boolean = false;

  constructor(totalFrames: number, basePathPattern: string, initialBatchSize = 30) {
    this.totalFrames = totalFrames;
    this.basePathPattern = basePathPattern;
    this.initialBatchSize = Math.min(initialBatchSize, totalFrames);
  }

  public getFramePath(index: number): string {
    const formattedIndex = String(index).padStart(3, '0');
    return `${this.basePathPattern}${formattedIndex}.webp`;
  }

  public startLoading(onProgress?: (progress: number, isInitialReady: boolean) => void) {
    this.onProgressCallback = onProgress;
    this.cancelled = false;

    // Load initial critical batch first
    const initialFrames: number[] = [];
    for (let i = 1; i <= this.initialBatchSize; i++) {
      initialFrames.push(i);
    }

    // Queue remaining frames
    for (let i = this.initialBatchSize + 1; i <= this.totalFrames; i++) {
      this.queue.push(i);
    }

    // Load initial frames immediately with high priority
    initialFrames.forEach((frameIdx) => this.loadSingleFrame(frameIdx, true));
  }

  private loadSingleFrame(frameIdx: number, isInitial: boolean) {
    if (this.cancelled) return;

    this.activeDownloads++;
    const img = new Image();
    const src = this.getFramePath(frameIdx);
    img.src = src;

    const handleLoad = () => {
      if (this.cancelled) return;
      this.images.set(frameIdx, img);
      this.loadedCount++;
      this.activeDownloads--;

      if (this.loadedCount >= this.initialBatchSize && !this.isInitialLoaded) {
        this.isInitialLoaded = true;
      }

      const progress = Math.min(1, this.loadedCount / this.totalFrames);
      if (this.onProgressCallback) {
        this.onProgressCallback(progress, this.isInitialLoaded);
      }

      this.processQueue();
    };

    const handleError = () => {
      if (this.cancelled) return;
      console.warn(`[FramePreloader] Failed to load frame ${frameIdx}: ${src}`);
      this.activeDownloads--;
      this.processQueue();
    };

    if (img.complete) {
      handleLoad();
    } else {
      img.onload = handleLoad;
      img.onerror = handleError;
    }
  }

  private processQueue() {
    if (this.cancelled) return;

    // If initial batch finished loading, process queue up to max concurrency
    while (this.activeDownloads < this.maxConcurrency && this.queue.length > 0) {
      const nextFrame = this.queue.shift();
      if (nextFrame) {
        this.loadSingleFrame(nextFrame, false);
      }
    }
  }

  public getFrame(index: number): HTMLImageElement | null {
    const clampedIndex = Math.max(1, Math.min(this.totalFrames, Math.round(index)));
    
    // Exact match
    if (this.images.has(clampedIndex)) {
      return this.images.get(clampedIndex)!;
    }

    // Fallback: search for nearest loaded frame to prevent blank canvas flash
    let closestIndex = clampedIndex;
    let minDiff = Infinity;

    for (const loadedIdx of Array.from(this.images.keys())) {
      const diff = Math.abs(loadedIdx - clampedIndex);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = loadedIdx;
      }
    }

    return this.images.get(closestIndex) || null;
  }

  public isFrameLoaded(index: number): boolean {
    return this.images.has(Math.max(1, Math.min(this.totalFrames, Math.round(index))));
  }

  public destroy() {
    this.cancelled = true;
    this.images.clear();
    this.queue = [];
  }
}
