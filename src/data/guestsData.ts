export interface Guest {
  id: string;
  name: string;
  designation?: string;
  image?: string;
}

export const POTENTIAL_GUESTS: Guest[] = [
  {
    id: 'p1',
    name: 'परम पूज्य श्री श्री 1008 श्री रामदास जी महाराज',
    designation: 'महंत, दंदरौआ धाम',
    image: '/assets_webp/ramdas.webp',
  },
  {
    id: 'p2',
    name: 'श्री मिथिलेशनंदिनीशरण जी महाराज',
    designation: 'हनुमान निवास, अयोध्या जी',
    image: '/assets_webp/mithilesh.webp',
  },
  {
    id: 'p3',
    name: 'श्री ज्योतिरादित्य सिंधिया जी',
    designation: 'केंद्रीय मंत्री, भारत सरकार',
    image: '/assets_webp/scindia.webp',
  },
  {
    id: 'p4',
    name: 'श्री नरेन्द्र सिंह तोमर जी',
    designation: 'विधानसभा अध्यक्ष, मध्यप्रदेश शासन',
    image: '/assets_webp/narendra.webp',
  },
  {
    id: 'p5',
    name: 'श्री प्रफुल्ल केतकर जी',
    designation: 'संपादक, ऑर्गनाइज़र',
    image: '/assets_webp/prafull.webp',
  },
  {
    id: 'p6',
    name: 'सुश्री साध्वी निरंजन ज्योति',
    designation: 'चेयरमैन, ओबीसी आयोग, भारत सरकार',
    image: '/assets_webp/niranjan.webp',
  },
  {
    id: 'p7',
    name: 'श्री शिव शेखर शुक्ला जी आईएएस',
    designation: 'अपर मुख्य सचिव, संस्कृति विभाग, मध्यप्रदेश शासन',
    image: '/assets_webp/shivshekhar.webp',
  },
  {
    id: 'p8',
    name: 'श्रीमती रुचिका चौहान जी',
    designation: 'कलेक्टर, ग्वालियर',
    image: '/assets_webp/ruchika.webp',
  },
  {
    id: 'p9',
    name: 'श्री अशोक चक्रधर जी',
    designation: 'पद्मश्री एवं वरिष्ठ साहित्यकार',
    image: '/assets_webp/ashok.webp',
  },
  {
    id: 'p10',
    name: 'श्री आशुतोष राणा जी',
    designation: 'प्रसिद्ध अभिनेता',
    image: '/assets_webp/ashutosh.webp',
  },
  {
    id: 'p11',
    name: 'श्री विष्णु सक्सेना जी',
    designation: 'प्रसिद्ध गीतकार',
    image: '/assets_webp/vishnu.webp',
  },
  {
    id: 'p12',
    name: 'श्री स्वयं श्रीवास्तव जी',
    designation: 'प्रसिद्ध कवि',
    image: '/assets_webp/syayam.webp',
  },
  {
    id: 'p13',
    name: 'श्री वरुण आनंद जी',
    designation: 'प्रसिद्ध साहित्यकार',
    image: '/assets_webp/varun.webp',
  },
  {
    id: 'p14',
    name: 'भजमन बीट्स',
    designation: 'प्रसिद्ध म्यूजिकल ग्रुप, जयपुर',
    image: '/assets_webp/bhajman beats.webp',
  },
];

export const PREVIOUS_GUESTS: Guest[] = [
  {
    id: 'prev1',
    name: 'परम पूज्य श्री श्री 1008 श्री रामदास जी महाराज',
    designation: 'महंत, दंदरौआ धाम',
    image: '/assets_webp/ramdas.webp',
  },
  {
    id: 'prev2',
    name: 'पूज्य श्री पुंडरीक गोस्वामी जी',
    designation: 'प्रख्यात कथावाचक, वृंदावन धाम',
    image: '/assets_webp/pundrik.webp',
  },
  {
    id: 'prev3',
    name: 'श्री मनोज श्रीवास्तव जी',
    designation: 'मध्यप्रदेश राज्य निर्वाचन आयोग',
    image: '/assets_webp/manoj.webp',
  },
  {
    id: 'prev4',
    name: 'श्री श्रीधर पराडकर जी',
    designation: 'अखिल भारतीय संगठन मंत्री, अखिल भारतीय साहित्य परिषद्',
    image: '/assets_webp/shridhar.webp',
  },
  {
    id: 'prev5',
    name: 'श्री अनुराग पाठक जी',
    designation: 'उप आयुक्त (जीएसटी), वाणिज्यिक कर विभाग, मध्यप्रदेश शासन',
    image: '/assets_webp/anurag.webp',
  },
  {
    id: 'prev6',
    name: 'श्री अमित सांघी जी',
    designation: 'डीआईजी, होमगार्ड एवं एसडीआरएफ, मध्यप्रदेश',
    image: '/assets_webp/amit.webp',
  },
  {
    id: 'prev7',
    name: 'श्री अभय कुमार सिंह जी',
    designation: 'अतिरिक्त सचिव, सामान्य प्रशासन विभाग, मध्यप्रदेश शासन (तत्कालीन कलेक्टर, ग्वालियर)',
    image: '/assets_webp/akshay_.webp',
  },
  {
    id: 'prev8',
    name: 'डॉ. कृष्णा सक्सेना जी',
    designation: 'वरिष्ठ साहित्यकार एवं राजनेता',
    image: '/assets_webp/karuna.webp',
  },
  {
    id: 'prev9',
    name: 'श्रीमती चंदना सैन',
    designation: 'डिप्टी कलेक्टर, मुरैना, मध्यप्रदेश शासन',
    image: '/assets_webp/vandana.webp',
  },
  {
    id: 'prev10',
    name: 'डॉ. चंद्रपाल शर्मा',
    designation: 'मास्टर संध्या एवं शिक्षाविद्',
    image: '/assets_webp/chandrapal.webp',
  },
  {
    id: 'prev11',
    name: 'श्री संतोष कुमार पटेल',
    designation: 'डीएसपी, होमगार्ड, ग्वालियर, मध्यप्रदेश पुलिस',
    image: '/assets_webp/santosh.webp',
  },
  {
    id: 'prev12',
    name: 'श्री राजेश शर्मा',
    designation: 'वरिष्ठ ग़ज़लकार एवं अध्यक्ष, भारतीय काव्य',
    image: '/assets_webp/rajesh.webp',
  },
  {
    id: 'prev13',
    name: 'श्री मदन मोहन दादरिया जी',
    designation: 'प्रख्यात शायर',
    image: '/assets_webp/madan mohan.webp',
  },
  {
    id: 'prev14',
    name: 'श्री अनुराग अनिलकुमार गंगाई',
    designation: 'असिस्टेंट प्रोफेसर, MANIT भोपाल',
    image: '/assets_webp/ajhar.webp',
  },
  {
    id: 'prev15',
    name: 'श्री अज़हर इक़बाल जी',
    designation: 'प्रसिद्ध शायर',
    image: '/assets_webp/anugrah.webp',
  },
  {
    id: 'prev16',
    name: 'श्री धर्मवीर धर्म',
    designation: 'कवि एवं संचालक',
    image: '/assets_webp/dharamveer_.webp',
  },
  {
    id: 'prev17',
    name: 'सुश्री शिवांगी प्रेरणा जी',
    designation: 'युवा कवयित्री',
    image: '/assets_webp/shivangi.webp',
  },
  {
    id: 'prev18',
    name: 'श्री प्रदीप तिवारी जी',
    designation: 'वरिष्ठ कवि एवं साहित्यकार',
    image: '/assets_webp/pradeep.webp',
  },
  {
    id: 'prev19',
    name: 'श्री अभिसार गीता शुक्ल जी',
    designation: 'युवा कवि एवं ओजस्वी वक्ता',
    image: '/assets_webp/abhisagar.webp',
  },
  {
    id: 'prev20',
    name: 'श्री प्रतीक चौहान जी',
    designation: 'युवा कवि एवं साहित्यकार',
    image: '/assets_webp/prateek-guest.webp',
  },
];