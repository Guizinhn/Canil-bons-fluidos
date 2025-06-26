import { Instagram, Phone } from 'lucide-react';

export default function FloatingSocialButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/5511947189164
"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-start w-20 hover:w-56 transition-all duration-300 shadow-lg overflow-visible bg-green-700 rounded-full"
      >
        {/* Ícone no centro da bolinha */}
        <div className="w-20 h-20 flex items-center justify-center">
          <Phone className="w-8 h-8 text-white" />
        </div>

        {/* Texto que aparece no hover */}
        <span className="ml-3 mr-4 text-white text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Fale com a Gente
        </span>

        {/* Notificação no topo direito da bolinha */}
        <span className="absolute top-0 right-0 z-20 translate-x-1/2 -translate-y-1/2">
          <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-red-600 text-white text-xs font-bold items-center justify-center shadow-md">
            1
          </span>
        </span>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/familiabonsfluidos/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-start w-20 hover:w-56 transition-all duration-300 shadow-lg overflow-visible rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500"
      >
        <div className="w-20 h-20 flex items-center justify-center">
          <Instagram className="w-8 h-8 text-white" />
        </div>

        <span className="ml-3 mr-4 text-white text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Siga no Instagram
        </span>
      </a>
    </div>
  );
}
