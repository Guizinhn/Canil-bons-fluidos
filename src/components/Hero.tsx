import React from 'react';
export function Hero() {
  return <section className="relative bg-amber-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80" alt="Cachorros felizes" className="w-full h-full object-cover opacity-25" />
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Família Bons Fluidos
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 mb-8">
            Bem-vindo ao nosso canil familiar, onde o carinho e bem-estar dos
            pets são nossa prioridade. Oferecemos filhotes saudáveis, com
            pedigree CBKC, castrados, vacinados e microchipados.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#quem-somos" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Nossa História
            </a>
            <a href="#servicos" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              O que fazemos?
            </a>
            <a href="#contato" className="bg-white hover:bg-gray-100 text-amber-600 font-semibold py-3 px-6 rounded-lg border border-amber-600 transition-colors">
              Agende sua visita
            </a>
          </div>
        </div>
      </div>
    </section>;
}