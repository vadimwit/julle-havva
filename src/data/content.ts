// ─────────────────────────────────────────────
// SITE CONFIG  (not translated — edit directly)
// ─────────────────────────────────────────────
export const siteConfig = {
  name: 'Julle Havva',
  phone: '+351 939 140 245',
  whatsapp: 'https://wa.me/351939140245?text=Hello!%20I%20would%20like%20to%20book%20a%20massage%20session.',
  email: 'julle.havva@gmail.com',
  address: 'Algarve, Portugal',
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
      'Through bodywork, I discovered not only a profession, but a way of connecting deeply with people, cultures and places. Massage gave me wings — allowing me to travel, live in different countries and build meaningful connections through presence and care.',
      'I am not only a body therapist. I am also a textile artist, working with my hands to create, weave and give form. I believe we are made of many layers, and my work reflects this wholeness: touch, listening, creativity and respect.',
    ],
    certifications: [
      'Certified Massage Therapist',
      'Kusum Mudak Method Practitioner',
      'Ayurvedic Bodywork Training',
    ],
    stats: [
      { value: '3+', label: 'Years of Experience' },
      { value: '500+', label: 'Happy Clients' },
      { value: '3+', label: 'Countries Lived In' },
      { value: '100%', label: 'Presence & Care' },
    ],
  },
  pt: {
    heading: 'O Toque Sempre Foi a Minha Linguagem',
    subheading: 'Sobre Mim',
    bio: [
      'Desde muito nova, o toque faz parte de quem sou. Sempre senti uma facilidade e confiança naturais ao cuidar de corpos, como se as minhas mãos já soubessem para onde ir. Ao longo dos anos, este dom intuitivo tornou-se um caminho.',
      'Através do trabalho corporal, descobri não apenas uma profissão, mas uma forma de me ligar profundamente a pessoas, culturas e lugares. A massagem deu-me asas — permitindo-me viajar, viver em diferentes países e construir ligações significativas através da presença e do cuidado.',
      'Não sou apenas terapeuta corporal. Sou também artista têxtil, trabalhando com as minhas mãos para criar, tecer e dar forma. Acredito que somos feitos de muitas camadas, e o meu trabalho reflete esta totalidade: toque, escuta, criatividade e respeito.',
    ],
    certifications: [
      'Massoterapeuta Certificada – Certificação Europeia',
      'Praticante do Método Kusum Mudak',
      'Formação em Bodywork Ayurvédico',
    ],
    stats: [
      { value: '3+', label: 'Anos de Experiência' },
      { value: '500+', label: 'Clientes Satisfeitos' },
      { value: '3+', label: 'Países Vividos' },
      { value: '100%', label: 'Presença e Cuidado' },
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
      name: 'Kusum Modak Method',
      subtitle: 'Signature Method',
      description:
        'Developed by Kusum Modak — a direct student of yoga master B.K.S. Iyengar — this method weaves together Ayurvedic bodywork, assisted yoga postures, conscious breathing and long, uninterrupted strokes into a single, deeply integrative experience.\n\nWhat makes it truly distinctive is the use of the feet. Standing alongside and sometimes over the body, the therapist works with body weight rather than muscular effort alone — creating a pressure that is both powerful and profoundly gentle. Fascia softens, joints release, and the nervous system settles into a rare stillness.\n\nEach session follows the natural flow of prana — life energy — moving along the body\'s channels to release tension held not just in muscle, but in memory and emotion. You leave feeling not only relaxed, but reorganised. More yourself.',
    },
    pt: {
      name: 'Método Kusum Modak',
      subtitle: 'Método Exclusivo',
      description:
        'Desenvolvido por Kusum Modak — aluna direta do mestre de yoga B.K.S. Iyengar — este método entrelaça o trabalho corporal ayurvédico, posturas de yoga assistidas, respiração consciente e longas passagens ininterruptas numa experiência profundamente integrativa.\n\nO que o torna verdadeiramente singular é o uso dos pés. Trabalhando ao lado e por vezes sobre o corpo, a terapeuta utiliza o peso do corpo em vez apenas da força muscular — criando uma pressão que é simultaneamente poderosa e profundamente gentil. A fáscia amolece, as articulações libertam-se e o sistema nervoso assenta numa quietude rara.\n\nCada sessão segue o fluxo natural do prana — energia vital — movendo-se pelos canais do corpo para libertar a tensão acumulada não apenas nos músculos, mas também na memória e nas emoções. Sai sentindo-se não só relaxada, mas reorganizada. Mais você.',
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
    en: { alt: 'Bodywork detail', caption: 'Presence & Touch' },
    pt: { alt: 'Detalhe de trabalho corporal', caption: 'Presença & Toque' },
  },
  {
    id: 'gallery-3',
    src: '/images/gallery/IMG_5752.PNG',
    span: false,
    gradient: 'from-stone-600 via-stone-500 to-amber-700',
    en: { alt: 'Session atmosphere', caption: 'Deep Stillness' },
    pt: { alt: 'Atmosfera da sessão', caption: 'Quietude Profunda' },
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
    src: '',
    span: true,
    placeholder: true,
    gradient: 'from-stone-800 via-stone-700 to-stone-800',
    en: { alt: 'Coming soon', caption: 'Coming Soon' },
    pt: { alt: 'Em breve', caption: 'Em Breve' },
  },
  {
    id: 'gallery-6',
    src: '',
    span: false,
    placeholder: true,
    gradient: 'from-stone-800 via-stone-700 to-stone-800',
    en: { alt: 'Coming soon', caption: 'Coming Soon' },
    pt: { alt: 'Em breve', caption: 'Em Breve' },
  },
];
