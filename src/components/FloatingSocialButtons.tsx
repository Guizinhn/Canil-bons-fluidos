import { Instagram, Phone } from 'lucide-react';

export default function FloatingSocialButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center w-20 hover:w-56 transition-all duration-300 shadow-lg overflow-hidden rounded-full bg-green-700"
      >
        <div className="relative w-20 h-20 flex items-center justify-center">
          <Phone className="w-8 h-8 text-white block" style={{ display: 'block', margin: 'auto' }} />
          
          {/* Bolinha vermelha de notificação */}
          <span className="absolute -top-1 -right-10 inline-flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-600 text-white text-xs font-bold items-center justify-center shadow-md">
              1
            </span>
          </span>
        </div>

        <span className="ml-3 mr-4 text-white text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Fale com a Gente
        </span>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/seu_perfil"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center w-20 hover:w-56 transition-all duration-300 shadow-lg overflow-hidden rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500"
      >
        <div className="w-20 h-20 flex items-center justify-center">
          <Instagram className="w-8 h-8 text-white block" style={{ display: 'block', margin: 'auto' }} />
        </div>

        <span className="ml-3 mr-4 text-white text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Siga no Instagram
        </span>
      </a>
    </div>
  );
}
