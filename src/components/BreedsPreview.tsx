import React from 'react';
import { Link } from 'react-router-dom';
const breeds = [{
  name: 'Corgi',
  description: 'Ativo, inteligente e sociável. Ideal para quintal. Longevidade de 11-13 anos. Requer cuidados com discos e displasia.',
  image: 'https://images.unsplash.com/photo-1612536057832-2ff7ead58194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
}, {
  name: 'Border Collie',
  description: 'Superinteligente e energético. Ideal para quintal.',
  image: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80'
}, {
  name: 'Cavachon',
  description: 'Híbrido entre Bichon Frisé e Cavalier. Estrutura robusta e pelagem hipoalergênica.',
  image: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
}, {
  name: 'Bichon Frisé',
  description: 'Alegre e brincalhão. Pode latir. Expectativa de vida de 12-15 anos. Risco de luxação de patela.',
  image: 'https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
}, {
  name: 'Spitz Alemão',
  description: 'Carinhoso, pequeno mas confiante. Vive bem em apartamento. Expectativa de vida de 12-16 anos. Cuidado com patela.',
  image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80'
}, {
  name: 'Cavalier',
  description: 'Dócil e afetuoso. Bom convívio com pessoas e pets. Atenção à patela. Expectativa de vida de 12-15 anos.',
  image: 'https://images.unsplash.com/photo-1626231537276-e7200c84459c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
}];
export function BreedsPreview() {
  return <section id="racas" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-800 mb-4">
            Nossas Raças
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Trabalhamos com raças selecionadas, garantindo saúde e qualidade
            genética. Todos os nossos filhotes são entregues com pedigree CBKC,
            castrados, vacinados e vermifugados.
          </p>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {breeds.map(breed => <div key={breed.name} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img src={breed.image} alt={`Raça ${breed.name}`} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">
                  {breed.name}
                </h3>
                <p className="text-gray-600">{breed.description}</p>
                <a href="#racas" className="inline-block mt-4 text-amber-600 hover:text-amber-800 font-medium">
                  Saiba mais →
                </a>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-10">
          <Link to="/racas" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Ver todas as raças
          </Link>
        </div>
      </div>
    </section>;
}