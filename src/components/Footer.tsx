import React from 'react';
import { FacebookIcon, InstagramIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-amber-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Família Bons Fluidos</h3>
            <p className="flex items-center mb-2">
              <MapPinIcon className="mr-2" size={18} />
              R. Itaucama, 161 – Bosque da Saúde, São Paulo/SP
            </p>
            <p className="flex items-center mb-2">
              <PhoneIcon className="mr-2" size={18} />
              (11) 5083‑7071 | (11) 97854‑4334
            </p>
            <p className="mb-2">WhatsApp: 11 94718‑9164</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="hover:text-amber-200">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#racas" className="hover:text-amber-200">
                  Raças
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-200">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-amber-200">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-200">
                <FacebookIcon size={24} />
              </a>
              <a href="#" className="hover:text-amber-200">
                <InstagramIcon size={24} />
              </a>
              <a href="#" className="hover:text-amber-200 flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor" />
                </svg>
              </a>
            </div>
            <div className="mt-4">
              <p>Parceiro:</p>
              <p className="font-semibold">CBKC</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-amber-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} Família Bons Fluidos. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
}