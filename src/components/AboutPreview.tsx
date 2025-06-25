import React from 'react';
import { Link } from 'react-router-dom';
export function AboutPreview() {
  return <section id="quem-somos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-800 mb-4">Quem Somos</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/src/img/home cavachon.jpeg" alt="Nosso canil" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-amber-700 mb-4">
              Nossa História
            </h3>
            <p className="text-gray-700 mb-4">
              Fundado em 2004, o canil Família Bons Fluidos nasceu da paixão por
              cães e o desejo de promover o bem-estar emocional através desses
              companheiros incríveis.
            </p>
            <p className="text-gray-700 mb-4">
              Estamos localizados em um sítio em Juquitiba, na Mata Atlântica,
              proporcionando um ambiente natural com clima ameno ideal para
              nossos animais.
            </p>
            <p className="text-gray-700 mb-4">
              Oferecemos monitoramento veterinário 24 horas, alimentação
              balanceada e muito carinho. Nossos filhotes são entregues com
              pedigree, castrados e vacinados.
            </p>
            <p className="text-gray-700">
              Somos um canil premiado e referência na CBKC, comprometidos com a
              saúde e o bem-estar de todos os nossos cães.
            </p>
            <Link to="/equipe" className="inline-block mt-6 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
              Conheça nossa equipe
            </Link>
          </div>
        </div>
      </div>
    </section>;
}