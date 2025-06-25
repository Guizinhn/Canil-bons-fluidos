import React from 'react';
import { Link } from 'react-router-dom';
const breeds = [{
  name: 'Corgi',
  description: 'Conheça o Corgi: o baixinho mais charmoso do pedaço! Com orelhas gigantes, bumbum fofo e um sorriso que derrete corações, o Corgi é puro amor e alegria em forma de patas curtinhas. Um verdadeiro rei da fofura esperando por você!',
  image: '/src/img/Corgi.jpg'
}, {
  name: 'Cavachon',
  description: 'Cavachon: o pacotinho de doçura que faltava na sua vida! Mistura perfeita de carinho e charme, o Cavachon é peludinho, carinhoso e sempre pronto pra te fazer sorrir. Um companheiro leve, fofo e impossível de não amar! ',
  image: '/src/img/cavachon.jpeg'
}, {
  name: 'Bichon Frisé',
  description: ' Bichon Frisé: um floquinho de alegria com patas! Branquinho, fofinho e cheio de charme, o Bichon Frisé parece um ursinho de pelúcia que te dá amor de verdade. Companheiro ideal pra quem quer carinho e estilo num só doguinho!',
  image: '/src/img/bichon.jpg'
}, {
  name: ' Spitz Alemão',
  description: 'pitz Alemão: uma bola de pelos com atitude de estrela! Pequenininho, elegante e com uma juba digna de rei, o Spitz Alemão conquista com olhar esperto e personalidade marcante. Um mini leãozinho que vai roubar seu coração e os holofotes!',
  image: '/src/img/Spitz alemao.jpg'
}, {
  name: 'Cavalier',
  description: 'Cavalier King Charles Spaniel: Doçura e elegância que encantam! O Cavalier é o companheiro perfeito para quem busca um amigo leal, carinhoso e cheio de charme. Pronto para conquistar seu coração?',
  image: '/src/img/Cavalier.jpg'
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