import React from "react";

const reprodutores = [
  {
    nome: "Cavachon Bravo",
    imagem: "/src/img/cavachon.jpeg",
    descricao: "Macho premiado, linha internacional."
  },
  {
    nome: "Spitz Thor",
    imagem: "/src/img/Spitz alemao.jpg",
    descricao: "Reprodutor com pedigree e ótima genética."
  },
  {
    nome: "Cavalier Roy",
    imagem: "/src/img/Cavalier.jpg",
    descricao: "Calmo, sociável e muito inteligente."
  },
  {
    nome: "Bichon Fluffy",
    imagem: "/src/img/bichon.jpg",
    descricao: "Pelagem densa e branca como neve."
  },
  {
    nome: "Corgi Max",
    imagem: "/src/img/Corgi.jpg",
    descricao: "Baixinho simpático e muito esperto."
  },
  {
    nome: "Cavachon Jr.",
    imagem: "/src/img/home cavachon.jpeg",
    descricao: "Filho do Bravo, segue o legado."
  }
];

export default function Reprodutores() {
  return (
    <div className="py-12 px-4 bg-blue-50 min-h-screen" id="reprodutores">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Nossos Reprodutores
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {reprodutores.map((cao, index) => (
            <div
              key={index}
              className="bg-blue-100 rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={cao.imagem}
                alt={cao.nome}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-900">
                {cao.nome}
              </h3>
              <p className="text-sm text-gray-700 mt-1">{cao.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
