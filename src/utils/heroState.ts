// Global in-session memory for hero animation completion state.
// Preserves hero completed state during React client-side route navigation (Home -> Team -> Home),
// but resets to false on hard page reload (F5) or fresh browser load.

let isHeroCompletedInSession = false;

export const getHeroCompleted = (): boolean => {
  return isHeroCompletedInSession;
};

export const setHeroCompleted = (completed: boolean): void => {
  isHeroCompletedInSession = completed;
};
