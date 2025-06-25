import React from "react";
import { Link } from "react-router-dom";

export function AboutPreview() {
  return (
    <section id="quem-somos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Quem Somos</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/src/img/home cavachon.jpeg"
              alt="Nosso canil"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Nossa História
            </h3>
            <p className="text-gray-700 mb-4">
              Sempre tivemos duas grandes paixões: os cães e o bem-estar
              emocional das pessoas. Em 2004 decidimos unir essas paixões e
              fundamos o Canil Bons Fluidos.
            </p>
            <p className="text-gray-700 mb-4">
              Começamos devagar e aos poucos o negócio foi crescendo e a família
              aumentando. Atualmente, nossa família canina, ocupa um sítio
              inteiro em Juquitiba, São Paulo.
            </p>
            <p className="text-gray-700 mb-4">
              Escolhemos essa região de Mata Atlântica pois possui clima ameno e
              agradável, propício a criação de nossos filhos pets.
            </p>
            <Link
              to="/equipe"
              className="inline-block mt-6 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Conheça nossa equipe
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
