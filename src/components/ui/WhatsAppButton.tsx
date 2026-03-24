import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '../../data/content';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <span
        className={`bg-stone-800 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        Fale Conosco
      </span>

      {/* Button */}
      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Chat no WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
