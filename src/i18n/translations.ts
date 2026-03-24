export const translations = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      pricing: 'Pricing',
      contact: 'Contact',
      book: 'Book Now',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      heading1: 'Restore Your Body,',
      heading2: 'Renew Your Spirit',
      subtitle: 'A deep and unique bodywork experience rooted in presence, breath and touch.',
      bookBtn: 'Book a Session',
      exploreBtn: 'Explore Services',
      scroll: 'Scroll',
    },
    about: {
      badgeTitle: 'Certified',
      badgeSub: 'European Certification',
      certsHeading: 'Certifications & Training',
      imagePlaceholder: 'Add therapist.jpg here',
    },
    services: {
      title: 'Our Services',
      subtitle:
        'Each technique is selected and applied with expertise to address your specific wellbeing needs.',
      bookLink: 'Book This Service',
    },
    gallery: {
      title: 'Gallery',
      subtitle:
        'Moments of peace, balance and wellbeing that we look forward to creating together.',
      followText: 'Follow us on Instagram for more',
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'The satisfaction of every client is our greatest reward.',
      prev: 'Previous',
      next: 'Next',
      dot: (n: number) => `Testimonial ${n}`,
    },
    pricing: {
      title: 'Invest in Your Wellbeing',
      subtitle: 'Choose the ideal package for your journey of care and relaxation.',
      popular: 'Most Popular',
      note: '* Prices subject to change. Contact us for special packages and loyalty programmes.',
    },
    contact: {
      title: 'Book Your Session',
      subtitle:
        'Ready to begin your wellness journey? Get in touch and we will create the perfect experience for you.',
      form: {
        nameLabel: 'Full Name *',
        namePlaceholder: 'Your name',
        emailLabel: 'Email *',
        emailPlaceholder: 'your@email.com',
        phoneLabel: 'Phone / WhatsApp',
        phonePlaceholder: '+351 XXX XXX XXX',
        serviceLabel: 'Service of Interest',
        servicePlaceholder: 'Select a service…',
        serviceOther: 'Other / Not sure yet',
        messageLabel: 'Message',
        messagePlaceholder:
          'Tell me a little about what you are looking for, any pain or goals…',
        submit: 'Send Message',
        submitting: 'Sending…',
        orContact: 'Or contact us directly via',
      },
      success: {
        heading: 'Message Sent!',
        body: 'Thank you for getting in touch! I will be in contact shortly to confirm your session.',
        again: 'Send Another Message',
      },
      info: {
        heading: 'Contact Information',
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        whatsappChat: 'Click to chat',
        email: 'Email',
        location: 'Location',
        instagram: 'Instagram',
        hoursHeading: 'Opening Hours',
        mapTitle: 'Google Map',
        mapBody: 'Replace this block with your Google Maps embed.',
        mapLink: 'See instructions in CONTENT_GUIDE.md',
        closed: 'Closed',
      },
    },
    footer: {
      tagline: 'Experience the restorative power of professional massage therapy.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      copyright: (year: number, name: string) =>
        `© ${year} ${name}. All rights reserved.`,
      madeWith: 'Made with care for your wellbeing',
      serviceLinks: ['Kusum Mudak Method'],
    },
    hours: [
      { day: 'Monday – Friday', hours: '09:00 – 19:00' },
      { day: 'Saturday', hours: '09:00 – 16:00' },
      { day: 'Sunday', hours: 'Closed' },
    ],
  },

  pt: {
    nav: {
      about: 'Sobre',
      services: 'Serviços',
      gallery: 'Galeria',
      pricing: 'Preços',
      contact: 'Contacto',
      book: 'Agendar',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
    },
    hero: {
      heading1: 'Restaure o Seu Corpo,',
      heading2: 'Renove o Seu Espírito',
      subtitle: 'Uma experiência de bodywork profunda e única, enraizada na presença, respiração e toque.',
      bookBtn: 'Agendar Sessão',
      exploreBtn: 'Explorar Serviços',
      scroll: 'Scroll',
    },
    about: {
      badgeTitle: 'Certificada',
      badgeSub: 'Certificação Europeia',
      certsHeading: 'Certificações & Formações',
      imagePlaceholder: 'Adicione therapist.jpg aqui',
    },
    services: {
      title: 'Os Nossos Serviços',
      subtitle:
        'Cada técnica é selecionada e aplicada com expertise para responder às suas necessidades específicas de bem-estar.',
      bookLink: 'Agendar Este Serviço',
    },
    gallery: {
      title: 'Galeria',
      subtitle:
        'Momentos de paz, equilíbrio e bem-estar que esperamos criar juntos.',
      followText: 'Siga-nos no Instagram para mais conteúdo',
    },
    testimonials: {
      title: 'O Que Dizem Os Nossos Clientes',
      subtitle: 'A satisfação de cada cliente é a nossa maior recompensa.',
      prev: 'Anterior',
      next: 'Próximo',
      dot: (n: number) => `Depoimento ${n}`,
    },
    pricing: {
      title: 'Investimento no Seu Bem-Estar',
      subtitle: 'Escolha o pacote ideal para a sua jornada de cuidado e relaxamento.',
      popular: 'Mais Popular',
      note: '* Preços sujeitos a alteração. Entre em contacto para pacotes especiais e programas de fidelidade.',
    },
    contact: {
      title: 'Agende a Sua Sessão',
      subtitle:
        'Pronta para começar a sua jornada de bem-estar? Entre em contacto e criaremos a experiência perfeita para si.',
      form: {
        nameLabel: 'Nome Completo *',
        namePlaceholder: 'O seu nome',
        emailLabel: 'E-mail *',
        emailPlaceholder: 'seu@email.pt',
        phoneLabel: 'Telefone / WhatsApp',
        phonePlaceholder: '+351 XXX XXX XXX',
        serviceLabel: 'Serviço de Interesse',
        servicePlaceholder: 'Selecione um serviço…',
        serviceOther: 'Outro / Não sei ainda',
        messageLabel: 'Mensagem',
        messagePlaceholder:
          'Conte-me um pouco sobre o que procura, dores ou objetivos…',
        submit: 'Enviar Mensagem',
        submitting: 'A enviar…',
        orContact: 'Ou contacte-nos diretamente via',
      },
      success: {
        heading: 'Mensagem Enviada!',
        body: 'Obrigada pelo seu contacto! Responderei em breve para confirmar a sua sessão.',
        again: 'Enviar Outra Mensagem',
      },
      info: {
        heading: 'Informações de Contacto',
        phone: 'Telefone',
        whatsapp: 'WhatsApp',
        whatsappChat: 'Clique para conversar',
        email: 'E-mail',
        location: 'Localização',
        instagram: 'Instagram',
        hoursHeading: 'Horários de Atendimento',
        mapTitle: 'Mapa do Google',
        mapBody: 'Substitua este bloco pelo embed do Google Maps.',
        mapLink: 'Ver instruções no CONTENT_GUIDE.md',
        closed: 'Encerrado',
      },
    },
    footer: {
      tagline: 'Experimente o poder restaurador da massoterapia profissional.',
      quickLinks: 'Links Rápidos',
      services: 'Serviços',
      contact: 'Contacto',
      copyright: (year: number, name: string) =>
        `© ${year} ${name}. Todos os direitos reservados.`,
      madeWith: 'Feito com carinho para o seu bem-estar',
      serviceLinks: ['Método Kusum Mudak'],
    },
    hours: [
      { day: 'Segunda – Sexta', hours: '09:00 – 19:00' },
      { day: 'Sábado', hours: '09:00 – 16:00' },
      { day: 'Domingo', hours: 'Encerrado' },
    ],
  },
} as const;

export type Translations = (typeof translations)['en'];
