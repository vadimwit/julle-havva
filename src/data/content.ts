// ─────────────────────────────────────────────
// SITE CONFIG  (not translated — edit directly)
// ─────────────────────────────────────────────
export const siteConfig = {
  name: 'Julle Havva',
  phone: '+351 939 140 245',
  whatsapp: 'https://wa.me/351939140245?text=Hello!%20I%20would%20like%20to%20book%20a%20massage%20session.',
  email: 'julle.havva@gmail.com',
  address: 'Western Algarve, Portugal',
  locations: ['Lagos', 'Vila do Bispo', 'Aljezur', 'Wider Portugal'],
  instagram: 'https://www.instagram.com/jullehavva_massoterapia',
  instagramHandle: '@jullehavva_massoterapia',
};

// ─────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────
export const aboutContent = {
  en: {
    heading: 'Touch Has Always Been My Language',
    subheading: 'About Me',
    bio: [
      'From a very young age, touch has been part of who I am. I always felt a natural ease and confidence when caring for bodies, as if my hands already knew where to go. Over the years, this intuitive gift became a path.',
      'I am originally from the northeast of Brazil and through bodywork, I discovered not only a profession, but a way of connecting deeply with people, cultures and places. Massage gave me wings, allowing me to travel, live in different countries and build meaningful connections through presence and care.',
      'Alongside this, I am also a textile artist. In both practices, I feel connected to something ancestral ⁓ a way of creating, caring and weaving with attention and intention.',
      'This work, for me, is a meeting point between touch, breath and awareness. A space where the body can soften, open, and return to itself.',
    ],
    certifications: [
      'Certified Massage Therapist',
      'Kusum Mudak Method Practitioner',
      'Ayurvedic Bodywork Training',
    ],
    stats: [
      { value: '3+', label: 'Years of Experience' },
      { value: '800+', label: 'Happy Clients' },
      { value: '4+', label: 'Countries Lived In' },
    ],
  },
  pt: {
    heading: 'O Toque Sempre Foi a Minha Linguagem',
    subheading: 'Sobre Mim',
    bio: [
      'Desde muito nova, o toque faz parte de quem sou. Sempre senti uma facilidade e confiança naturais ao cuidar de corpos, como se as minhas mãos já soubessem para onde ir. Ao longo dos anos, este dom intuitivo tornou-se um caminho.',
      'Sou originalmente do nordeste do Brasil e, através do trabalho corporal, descobri não apenas uma profissão, mas uma forma de me ligar profundamente a pessoas, culturas e lugares. A massagem deu-me asas, permitindo-me viajar, viver em diferentes países e construir ligações significativas através da presença e do cuidado.',
      'A par disso, sou também artista têxtil. Em ambas as práticas, sinto-me ligada a algo ancestral ⁓ uma forma de criar, cuidar e tecer com atenção e intenção.',
      'Este trabalho é, para mim, um ponto de encontro entre o toque, a respiração e a consciência. Um espaço onde o corpo pode suavizar-se, abrir-se e regressar a si mesmo.',
    ],
    certifications: [
      'Massoterapeuta Certificada',
      'Praticante do Método Kusum Mudak',
      'Formação em Bodywork Ayurvédico',
    ],
    stats: [
      { value: '3+', label: 'Anos de Experiência' },
      { value: '800+', label: 'Clientes Satisfeitos' },
      { value: '4+', label: 'Países Vividos' },
    ],
  },
};

// ─────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────
export interface Service {
  id: string;
  icon: string;
  gradient: string;
  duration: string;
  src?: string;
  en: { name: string; subtitle: string; description: string };
  pt: { name: string; subtitle: string; description: string };
}

export const services: Service[] = [
  {
    id: 'kusum-modak',
    icon: 'feather',
    gradient: 'from-amber-100 to-orange-100',
    duration: '60 – 90 min',
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    en: {
      name: 'Kusum Modak Method\nAyurvedic Yoga Massage',
      subtitle: 'Signature Method',
      description:
        'A dialogue between presence and care, where the body is invited to release, and awareness naturally unfolds.\n\nThe Kusum Modak Method ⁓ Ayurvedic Yoga Massage ⁓ blends traditional Indian massage with yoga-inspired postures, creating a deeply integrative therapeutic experience. Recognised worldwide within the fields of health and well-being, it is considered one of the most complete bodywork practices.\n\nThrough slow, deep touches, using natural oils and a therapeutic powder, the session combines slides, stretches and pressure applied with hands and feet. This approach stimulates circulation, releases muscular tension and creates space in the joints, preparing the body for deeper opening.\n\nWith more than 120 techniques, each session adapts to the needs of the individual ⁓ working not only on the physical body, but also supporting mental clarity and emotional balance.\n\nSupported by conscious breathing, the experience invites a state of deep relaxation where the mind quiets, the body softens, and a natural sense of well-being emerges.',
    },
    pt: {
      name: 'Método Kusum Modak\nMassagem de Yoga Ayurvédico',
      subtitle: 'Método Exclusivo',
      description:
        'Um diálogo entre presença e cuidado, onde o corpo é convidado a libertar-se, e a consciência se desdobra naturalmente.\n\nO Método Kusum Modak ⁓ Massagem de Yoga Ayurvédico ⁓ combina a massagem indiana tradicional com posturas inspiradas no yoga, criando uma experiência terapêutica profundamente integrativa. Reconhecido mundialmente nas áreas da saúde e bem-estar, é considerado uma das práticas de trabalho corporal mais completas.\n\nAtravés de toques lentos e profundos, utilizando óleos naturais e um pó terapêutico, a sessão combina deslizes, alongamentos e pressão aplicados com mãos e pés. Esta abordagem estimula a circulação, liberta a tensão muscular e cria espaço nas articulações, preparando o corpo para uma abertura mais profunda.\n\nCom mais de 120 técnicas, cada sessão adapta-se às necessidades do indivíduo ⁓ trabalhando não apenas no corpo físico, mas também apoiando a clareza mental e o equilíbrio emocional.\n\nApoiada pela respiração consciente, a experiência convida a um estado de profunda relaxação onde a mente se aquieta, o corpo suaviza, e uma sensação natural de bem-estar emerge.',
    },
  },
];

// ─────────────────────────────────────────────
// PRICING
// ─────────────────────────────────────────────
export interface PricingTier {
  id: string;
  price: string;
  popular: boolean;
  en: { name: string; subtitle: string; description: string; features: string[]; cta: string };
  pt: { name: string; subtitle: string; description: string; features: string[]; cta: string };
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'single',
    price: 'from €75',
    popular: false,
    en: {
      name: '1 Session',
      subtitle: 'Single Session',
      description: 'Your introduction to the Kusum Mudak Method. Choose the duration that suits you.',
      features: [
        '60 minutes — €75',
        '90 minutes — €98',
        'Initial consultation & intake',
        'Ayurvedic-inspired touch & foot work',
        'Assisted yoga stretches',
        'Conscious breathwork guidance',
      ],
      cta: 'Book Now',
    },
    pt: {
      name: '1 Sessão',
      subtitle: 'Sessão Individual',
      description: 'A sua introdução ao Método Kusum Mudak. Escolha a duração que melhor se adapta a si.',
      features: [
        '60 minutos — €75',
        '90 minutos — €98',
        'Consulta inicial e ficha de acolhimento',
        'Toque inspirado no Ayurveda e uso dos pés',
        'Posturas de yoga assistidas',
        'Orientação em respiração consciente',
      ],
      cta: 'Agendar',
    },
  },
  {
    id: 'pack5',
    price: '€465',
    popular: true,
    en: {
      name: '5 Sessions',
      subtitle: 'Pack of 5',
      // 5 × €98 = €490 → 5% off = €465 (save €25)
      description: 'Deepen your practice and feel the cumulative benefits. Save €25 vs individual price.',
      features: [
        '5 × 90-minute sessions',
        'Save €25 — pay €93 per session',
        '3-month validity',
        'Priority scheduling',
        'Progress tracking between sessions',
        'Personalised session notes',
      ],
      cta: 'Buy Pack',
    },
    pt: {
      name: '5 Sessões',
      subtitle: 'Pacote de 5',
      description: 'Aprofunde a sua prática e sinta os benefícios cumulativos. Poupe €25 face ao valor individual.',
      features: [
        '5 × sessões de 90 minutos',
        'Poupe €25 — €93 por sessão',
        'Validade de 3 meses',
        'Agendamento prioritário',
        'Acompanhamento entre sessões',
        'Notas personalizadas de sessão',
      ],
      cta: 'Comprar Pacote',
    },
  },
  {
    id: 'pack20',
    price: '€1,862',
    popular: false,
    en: {
      name: '20 Sessions',
      subtitle: 'Pack of 20',
      // 20 × €98 = €1,960 → 5% off = €1,862 (save €98)
      description: 'A full journey of transformation. Commit to your practice and save €98.',
      features: [
        '20 × 90-minute sessions',
        'Save €98 — pay €93.10 per session',
        '12-month validity',
        'Top-priority scheduling',
        'Dedicated progress plan',
        'Monthly check-in review',
        'Transferable to a friend',
      ],
      cta: 'Buy Pack',
    },
    pt: {
      name: '20 Sessões',
      subtitle: 'Pacote de 20',
      description: 'Uma jornada completa de transformação. Comprometa-se com a sua prática e poupe €98.',
      features: [
        '20 × sessões de 90 minutos',
        'Poupe €98 — €93,10 por sessão',
        'Validade de 12 meses',
        'Agendamento prioritário máximo',
        'Plano de progresso dedicado',
        'Revisão mensal de acompanhamento',
        'Transferível para um amigo',
      ],
      cta: 'Comprar Pacote',
    },
  },
];

// ─────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────
export interface Testimonial {
  id: string;
  initial: string;
  rating: number;
  en: { name: string; role: string; text: string };
  pt: { name: string; role: string; text: string };
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    initial: 'C',
    rating: 5,
    en: {
      name: 'Charlie Mowat',
      role: 'Google Review',
      text: 'This is more than a massage. This is facilitated connection to something quite special (as well as a beautiful physical massage). Julle has a calming, beautiful presence. I left the session feeling calm but alive. Relaxed but powerful. I very highly recommend.',
    },
    pt: {
      name: 'Charlie Mowat',
      role: 'Avaliação Google',
      text: 'Isto é mais do que uma massagem. É uma ligação facilitada a algo muito especial (para além de uma belíssima massagem física). A Julle tem uma presença serena e bela. Saí da sessão calma mas viva. Relaxada mas poderosa. Recomendo vivamente.',
    },
  },
  {
    id: '2',
    initial: 'S',
    rating: 5,
    en: {
      name: 'Sven',
      role: 'Google Review',
      text: 'This was more than a good massage. I had the feeling that there was a connection to something higher which reached my body through her hands. Thank you Julle for your being and giving.',
    },
    pt: {
      name: 'Sven',
      role: 'Avaliação Google',
      text: 'Isto foi mais do que uma boa massagem. Tive a sensação de que havia uma ligação a algo superior que chegou ao meu corpo através das suas mãos. Obrigado Julle pelo teu ser e pelo teu dar.',
    },
  },
  {
    id: '3',
    initial: 'S',
    rating: 5,
    en: {
      name: 'Sebastian',
      role: 'Google Review',
      text: 'I am so grateful to have met Julle. She radiates a magical energy and gives me so much healing and relief in every single cell.',
    },
    pt: {
      name: 'Sebastian',
      role: 'Avaliação Google',
      text: 'Estou muito grato por ter conhecido a Julle. Ela irradia uma energia mágica e traz-me tanta cura e alívio em cada célula do meu corpo.',
    },
  },
  {
    id: '4',
    initial: 'A',
    rating: 5,
    en: {
      name: 'Anthony Kaprielian',
      role: 'Google Review',
      text: 'Julle has a unique method, and absolutely phenomenal. When you go into that process it\'s a journey that makes you feel melt into a space of relaxation. She definitely put in a lot of love and care in this practice. Definitely recommend!',
    },
    pt: {
      name: 'Anthony Kaprielian',
      role: 'Avaliação Google',
      text: 'A Julle tem um método único, e absolutamente fenomenal. Quando entras nesse processo é uma jornada que te faz derreter num espaço de relaxamento. Ela colocou definitivamente muito amor e cuidado nesta prática. Sem dúvida recomendo!',
    },
  },
  {
    id: '5',
    initial: 'M',
    rating: 5,
    en: {
      name: 'Miriam Stark',
      role: 'Google Review',
      text: 'Julle is an old soul in the body of a beautiful, young, and strong woman. She holds a powerful gift that can guide you on a deep and opening journey into the parts of your soul and heart that long to be seen and cared for with love.\n\nHer technique is incredibly versatile, allowing her to mobilize, stimulate, and nourish the entire body within just 90 minutes. There is not a single part of the body that doesn\'t feel rejuvenated, alive, and deeply relaxed afterwards.\n\nI wholeheartedly recommend working with this beautiful human being.',
    },
    pt: {
      name: 'Miriam Stark',
      role: 'Avaliação Google',
      text: 'A Julle é uma alma antiga no corpo de uma mulher bela, jovem e forte. Ela possui um dom poderoso que pode guiá-la numa jornada profunda e aberta para as partes da sua alma e coração que anseiam ser vistas e cuidadas com amor.\n\nA sua técnica é incrivelmente versátil, permitindo-lhe mobilizar, estimular e nutrir todo o corpo em apenas 90 minutos. Não há uma única parte do corpo que não se sinta rejuvenescida, viva e profundamente relaxada depois.\n\nRecomendo de todo o coração trabalhar com este ser humano maravilhoso.',
    },
  },
  {
    id: '6',
    initial: 'A',
    rating: 5,
    en: {
      name: 'Aric Mekhaelov',
      role: 'Google Review',
      text: 'Amazing!! Professional!! Good energy!!\n\nDefinitely something new and very relaxing.\n\nJulie is caring, she wants to help with her knowledge and dedication!\n\nThank you, I had a very interesting experience. Thank you Julle.',
    },
    pt: {
      name: 'Aric Mekhaelov',
      role: 'Avaliação Google',
      text: 'Incrível!! Profissional!! Boa energia!!\n\nDefinitivamente algo novo e muito relaxante.\n\nA Julie é atenciosa, quer ajudar com o seu conhecimento e dedicação!\n\nObrigado, tive uma experiência muito interessante. Obrigado Julle.',
    },
  },
  {
    id: '7',
    initial: 'V',
    rating: 5,
    en: {
      name: 'Verena Krammer',
      role: 'Google Review',
      text: 'Very good and magical massage! Thank you so much Julle. You opened me and touched me deeply.',
    },
    pt: {
      name: 'Verena Krammer',
      role: 'Avaliação Google',
      text: 'Massagem muito boa e mágica! Muito obrigado Julle. Abriste-me e tocaste-me profundamente.',
    },
  },
];

// ─────────────────────────────────────────────
// GALLERY
// ─────────────────────────────────────────────
export interface GalleryItem {
  id: string;
  src: string;
  span: boolean;
  gradient: string;
  placeholder?: boolean;
  en: { alt: string; caption: string };
  pt: { alt: string; caption: string };
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    src: '/images/gallery/IMG_5117.PNG',
    span: true,
    gradient: 'from-stone-700 via-stone-600 to-amber-800',
    en: { alt: 'Massage session', caption: 'The Session' },
    pt: { alt: 'Sessão de massagem', caption: 'A Sessão' },
  },
  {
    id: 'gallery-2',
    src: '/images/gallery/IMG_5749.PNG',
    span: false,
    gradient: 'from-amber-800 via-orange-700 to-stone-700',
    en: { alt: 'Presence & touch', caption: 'Presence & Touch' },
    pt: { alt: 'Presença e toque', caption: 'Presença & Toque' },
  },
  {
    id: 'gallery-3',
    src: '/images/gallery/IMG_5752.PNG',
    span: false,
    gradient: 'from-stone-600 via-stone-500 to-amber-700',
    en: { alt: 'Deep stillness', caption: 'Deep Stillness' },
    pt: { alt: 'Quietude profunda', caption: 'Quietude Profunda' },
  },
  {
    id: 'gallery-4',
    src: '/images/gallery/IMG_5755.PNG',
    span: false,
    gradient: 'from-amber-700 via-yellow-700 to-orange-800',
    en: { alt: 'The practice', caption: 'The Practice' },
    pt: { alt: 'A prática', caption: 'A Prática' },
  },
  {
    id: 'gallery-5',
    src: '/images/gallery/DSC_8250.jpeg',
    span: false,
    gradient: 'from-stone-700 via-amber-900 to-stone-800',
    en: { alt: 'A moment of release', caption: 'Release' },
    pt: { alt: 'Um momento de libertação', caption: 'Libertação' },
  },
  {
    id: 'gallery-6',
    src: '/images/gallery/IMG_1687.PNG',
    span: false,
    gradient: 'from-amber-900 via-stone-700 to-amber-800',
    en: { alt: 'The space', caption: 'The Space' },
    pt: { alt: 'O espaço', caption: 'O Espaço' },
  },
  {
    id: 'gallery-7',
    src: '/images/gallery/IMG_6927.PNG',
    span: false,
    gradient: 'from-stone-800 via-amber-800 to-stone-700',
    en: { alt: 'Bodywork flow', caption: 'Flow' },
    pt: { alt: 'Fluxo corporal', caption: 'Fluxo' },
  },
  {
    id: 'gallery-8',
    src: '/images/gallery/IMG_6931.PNG',
    span: true,
    gradient: 'from-amber-800 via-stone-700 to-amber-900',
    en: { alt: 'Touch & breath', caption: 'Touch & Breath' },
    pt: { alt: 'Toque e respiração', caption: 'Toque & Respiração' },
  },
  {
    id: 'gallery-9',
    src: '/images/gallery/IMG_9144.PNG',
    span: false,
    gradient: 'from-stone-700 via-stone-600 to-stone-800',
    en: { alt: 'Inner stillness', caption: 'Inner Stillness' },
    pt: { alt: 'Quietude interior', caption: 'Quietude Interior' },
  },
  {
    id: 'gallery-10',
    src: '/images/gallery/IMG_9739.JPG',
    span: false,
    gradient: 'from-amber-900 via-amber-800 to-stone-800',
    en: { alt: 'Return to yourself', caption: 'Return' },
    pt: { alt: 'Regresso a si', caption: 'Regresso' },
  },
];
