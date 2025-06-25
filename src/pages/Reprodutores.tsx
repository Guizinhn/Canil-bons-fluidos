import React from "react";

const reprodutores = [
  {
    nome: "Rosinha",
    imagem: "/src/reprodutoresCachorros/Rosinha.avif",
  },
  {
    nome: "Sarita",
    imagem: "/src/reprodutoresCachorros/Sarita.jpg",
  },
  {
    nome: "Sugar",
    imagem: "/src/reprodutoresCachorros/Sugar.jpg",
  },
  {
    nome: "Bichon Fluffy",
    imagem: "/src/img/bichon.jpg",
  },
  {
    nome: "Corgi Max",
    imagem: "/src/img/Corgi.jpg",
  },
  {
    nome: "Cavachon Jr.",
    imagem: "/src/img/home cavachon.jpeg",
  },
];

export default function Reprodutores() {
  return (
    <div className="py-12 px-4 bg-blue-50 min-h-screen" id="reprodutores">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Nossos Reprodutores
        </h2>
        <h3 className="text-4xl font-serif italic font-bold tracking-wide text-blue-800 text-left drop-shadow-md shadow-blue-300 mb-10">
          Corgi
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {reprodutores.map((cao, index) => (
            <div
              key={index}
              className="bg-blue-100 rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={cao.imagem}
                alt={cao.nome}
                className="w-full h-50 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-900">
                {cao.nome}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
