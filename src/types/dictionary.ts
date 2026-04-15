export interface Dictionary {
  common: {
    learnMore: string;
    contactUs: string;
    getQuote: string;
    scroll: string;
    services: string;
    aboutUs: string;
    projects: string;
    contact: string;
    email: string;
    address: string;
    phone: string;
    addressFull: string;
  };
  nav: {
    home: string;
    services: string;
    about: string;
    projects: string;
    contact: string;
  };
  home: {
    hero: {
      badge: string;
      titleTop: string;
      titleItalic: string;
      titleBottom: string;
      description: string;
      ctaWork: string;
      ctaContact: string;
    };
    stats: Array<{ value: string; label: string; sub: string }>;
    servicesPreview: {
      badge: string;
      title: string;
      subtitle: string;
      desc: string;
      allServices: string;
    };
    partners: {
      badge: string;
      title: string;
      subtitle: string;
      desc: string;
      catalog: string;
      expertiseBadge: string;
      expertiseTitle: string;
      expertiseSubtitle: string;
      industries: {
        palm_oil: string;
        electronic: string;
        healthcare: string;
        pulp_paper: string;
        railway: string;
        energy: string;
      };
    };
    clients: {
      title: string;
      trustedBy: string;
      desc: string;
    };
    lead: {
      badge: string;
      label: string;
      title: string;
      titleAccent: string;
      desc: string;
      phonePrimary: string;
      phoneSecondary: string;
      emailLabel: string;
      addressLabel: string;
      fullContact: string;
      formTitle: string;
      formSub: string;
      formName: string;
      formCompany: string;
      formCity: string;
      formEmail: string;
      formService: string;
      formMessage: string;
      formSubmit: string;
      formSending: string;
      formSuccessTitle: string;
      formSuccessDesc: string;
      formSuccessCta: string;
      formOther: string;
      formSpecify: string;
      formPlaceholderName: string;
      formPlaceholderCompany: string;
      formPlaceholderCity: string;
      formPlaceholderEmail: string;
      formPlaceholderService: string;
      formPlaceholderMessage: string;
      formPlaceholderSpecify: string;
    };
  };
  services: {
    items: Array<{
      id: string;
      num: string;
      category: string;
      icon: string;
      title: string;
      shortDesc: string;
      desc: string;
      features: string[];
    }>;
  };
  about: {
    hero: {
      badge: string;
      titleTop: string;
      titleItalic: string;
      desc: string;
    };
    visionSection: {
      title: string;
      subtitle: string;
      missionLabel: string;
      mission: string[];
      visionLabel: string;
      vision: string;
      values: Array<{ label: string; desc: string }>;
    };
    timeline: {
      badge: string;
      label: string;
      title: string;
      titleAccent: string;
      items: Array<{ year: string; title: string; desc: string }>;
    };
    partners: Array<{ name: string; role: string; desc: string }>;
    valueProps: Array<{ title: string; desc: string }>;
    workshop: {
      badge: string;
      label: string;
      title: string;
      titleAccent: string;
      desc: string;
      stats: Array<{ label: string; val: string }>;
    };
  };
  footer: {
    tagline: string;
    about: string;
    legal: string;
    navigation: string;
    services: string;
    exploreAll: string;
    contact: string;
    phoneInquiry: string;
    emailSupport: string;
    rights: string;
    sumatra: string;
    kalimantan: string;
    java: string;
    privacy: string;
  };
  servicesPage: {
    hero: {
      badge: string;
      titleTop: string;
      titleItalic: string;
      description: string;
    };
    section1: {
      label: string;
      title: string;
      desc: string;
      moreTasks: string;
      viewAll: string;
    };
    section2: {
      label: string;
      title: string;
      desc: string;
      brands: string;
      footerNote: string;
    };
  };
  contactPage: {
    hero: {
      badge: string;
      titleTop: string;
      titleItalic: string;
      description: string;
    };
    details: {
      headquarters: string;
      title: string;
      hours: string;
      monFri: string;
      sat: string;
    };
    map: {
      label: string;
      title: string;
      desc: string;
      getDirections: string;
      viewOnGoogle: string;
      hqLabel: string;
    };
  };
  projectsPage: {
    hero: {
      badge: string;
      titleTop: string;
      titleItalic: string;
      description: string;
    };
    filters: {
      yearLabel: string;
      monthLabel: string;
      sectorLabel: string;
      all: string;
      clear: string;
      resultsCount: string;
      of: string;
      showAll: string;
    };
    empty: {
      title: string;
      desc: string;
      reset: string;
    };
    stats: {
      excellence: string;
      excellenceAccent: string;
      excellenceDesc: string;
      deliveryLabel: string;
      deliveryVal: string;
      regionsLabel: string;
      regionsVal: string;
    };
  };
}
