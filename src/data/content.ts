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
  en: { name: string; subtitle: string; description: string };
  pt: { name: string; subtitle: string; description: string };
}

export const services: Service[] = [
  {
    id: 'kusum-modak',
    icon: 'feather',
    gradient: 'from-amber-100 to-orange-100',
    duration: '90 min',
    en: {
      name: 'Kusum Modak Method',
      subtitle: 'Signature Method',
      description:
        'This practice combines Ayurvedic principles, assisted yoga stretches, conscious breathing and deep, continuous touch. The session is dynamic, grounding and deeply restorative.\n\nOne of its most distinctive aspects is the use of the feet — creating a unique experience that often awakens curiosity and surprise. Each session is a dialogue between bodies, breath and presence.',
    },
    pt: {
      name: 'Método Kusum Modak',
      subtitle: 'Método Exclusivo',
      description:
        'Esta prática combina princípios ayurvédicos, posturas de yoga assistidas, respiração consciente e toque profundo e contínuo. A sessão é dinâmica, enraizante e profundamente restauradora.\n\nUm dos seus aspetos mais distintivos é o uso dos pés — criando uma experiência única que frequentemente desperta curiosidade e surpresa. Cada sessão é um diálogo entre corpos, respiração e presença.',
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
    initial: 'A',
    rating: 5,
    en: {
      name: 'Ana Carolina S.',
      role: 'Regular Client',
      text: "Julle is simply incredible! I had suffered from chronic back pain for years and after just a few deep tissue sessions my quality of life improved enormously. She has a natural talent and a magical touch that makes all the difference. I recommend her wholeheartedly!",
    },
    pt: {
      name: 'Ana Carolina S.',
      role: 'Cliente Regular',
      text: 'A Julle é simplesmente incrível! Sofria de dores crónicas nas costas há anos e, após algumas sessões de massagem de tecido profundo, a minha qualidade de vida melhorou imensamente. Tem um talento natural e um toque mágico que faz toda a diferença. Recomendo de olhos fechados!',
    },
  },
  {
    id: '2',
    initial: 'M',
    rating: 5,
    en: {
      name: 'Marcos Oliveira',
      role: 'Amateur Athlete',
      text: "As a runner, I found in Julle the ideal partner for my muscle recovery. Her sports massage sessions help me perform better and prevent injuries. The environment is beautiful, peaceful and welcoming. I feel completely renewed after every visit.",
    },
    pt: {
      name: 'Marcos Oliveira',
      role: 'Atleta Amador',
      text: 'Como corredor, encontrei na Julle a parceira ideal para a minha recuperação muscular. As sessões de massagem desportiva ajudam-me a ter melhor desempenho e a prevenir lesões. O ambiente é lindo, tranquilo e acolhedor. Fico renovado após cada visita.',
    },
  },
  {
    id: '3',
    initial: 'F',
    rating: 5,
    en: {
      name: 'Fernanda Lima',
      role: 'Executive',
      text: "Julle's hot stone relaxation massage is a transformative experience. I leave every session feeling completely renewed, as if I've been on holiday! Her professionalism and attention to every detail are exceptional. A true and accessible luxury.",
    },
    pt: {
      name: 'Fernanda Lima',
      role: 'Executiva',
      text: 'A massagem relaxante com pedras quentes da Julle é uma experiência transformadora. Saio de cada sessão completamente renovada, como se tivesse tirado férias! O profissionalismo e o cuidado com cada detalhe são excecionais. É um verdadeiro luxo acessível.',
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
  en: { alt: string; caption: string };
  pt: { alt: string; caption: string };
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    src: '/images/gallery/IMG_5117.PNG',
    span: true,
    gradient: 'from-stone-700 via-stone-600 to-amber-800',
    en: { alt: 'Cosy massage room', caption: 'Peaceful Environment' },
    pt: { alt: 'Sala de massagem aconchegante', caption: 'Ambiente Tranquilo' },
  },
  {
    id: 'gallery-2',
    src: '/images/gallery/IMG_5749.PNG',
    span: false,
    gradient: 'from-amber-800 via-orange-700 to-stone-700',
    en: { alt: 'Hot stones and essential oils', caption: 'Hot Stone Treatment' },
    pt: { alt: 'Pedras quentes e óleos essenciais', caption: 'Pedras Quentes' },
  },
  {
    id: 'gallery-3',
    src: '/images/gallery/IMG_5752.PNG',
    span: false,
    gradient: 'from-sage-700 via-sage-600 to-stone-700',
    en: { alt: 'Lymphatic drainage session', caption: 'Lymphatic Drainage' },
    pt: { alt: 'Sessão de drenagem linfática', caption: 'Drenagem Linfática' },
  },
  {
    id: 'gallery-4',
    src: '/images/gallery/IMG_5755.PNG',
    span: false,
    gradient: 'from-amber-700 via-yellow-700 to-orange-800',
    en: { alt: 'Premium essential oils', caption: 'Aromatherapy' },
    pt: { alt: 'Óleos essenciais premium', caption: 'Aromaterapia' },
  },
  {
    id: 'gallery-5',
    src: '/images/gallery/IMG_5117.PNG',
    span: true,
    gradient: 'from-stone-800 via-sage-700 to-stone-700',
    en: { alt: 'Relaxation session', caption: 'Deep Relaxation' },
    pt: { alt: 'Sessão de relaxamento', caption: 'Relaxamento Profundo' },
  },
  {
    id: 'gallery-6',
    src: '/images/gallery/IMG_5749.PNG',
    span: false,
    gradient: 'from-stone-600 via-amber-700 to-stone-800',
    en: { alt: 'Towels and preparation', caption: 'Thoughtful Details' },
    pt: { alt: 'Toalhas e preparação', caption: 'Detalhes com Carinho' },
  },
];
