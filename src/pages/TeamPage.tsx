import React from 'react';
import { Link } from 'react-router-dom';
import { ImageCarousel } from '../components/ImageCarousel';
import { ArrowLeftIcon } from 'lucide-react';
const spaceImages = [{
  src: 'https://i.postimg.cc/DybFJMN1/clique-para-ajudar.png',
  alt: 'Espaço do canil - área externa'
}, {
src: 'https://cdn.pixabay.com/photo/2023/12/22/05/55/dog-8463178_960_720.jpg',
  alt: 'Espaço do canil - área de recreação'
}, {
  src: 'https://images.unsplash.com/photo-1596492784531-6d8df069b6dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  alt: 'Espaço do canil - área de cuidados'
}, {
  src: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  alt: 'Filhotes brincando no canil'
}];
const teamMembers = [{
  name: 'Maria Eugênia e José Carlos',
  role: 'Fundadores do Canil Bons Fluidos',
  image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  description: 'Apaixonados por animais, Maria Eugênia e José Carlos fundaram o Canil Bons Fluidos com a missão de proporcionar bem-estar e qualidade de vida para os pets e suas famílias.'
}, {
  name: 'Dra. Maria Isabel (Tia Mabel)',
  role: 'Veterinária',
  image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  description: 'Mãe do Pug Shaolin, a Dra. Maria Isabel cuida com carinho e dedicação da saúde de todos os nossos bichinhos.'
}, {
  name: 'Vovô Jairo e Vovó Bernardita',
  role: 'Cuidadores',
  image: 'https://images.unsplash.com/photo-1524117853209-a2fcab240719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  description: 'Dedicados e atentos, Vovô Jairo e Vovó Bernardita adoram mimar os pets, garantindo que recebam todo o carinho e atenção que merecem.'
}, {
  name: 'Tia Ana',
  role: 'Atendimento e Documentação',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
  description: 'Mãe das Shitzus Mel e Belinha, Tia Ana é responsável pelos pedigrees e atendimento ao cliente. Ela adora dar petiscos escondidos para os pets.'
}, {
  name: 'Tia Laurinha',
  role: 'Banho e Tosa',
  image: 'https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  description: 'Tia favorita dos peludos, Laurinha é especialista em dar aquele banho gostoso nos pets, deixando-os limpos, cheirosos e felizes.'
}];
export function TeamPage() {
  return <div className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-8">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Voltar para a página inicial
        </Link>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">
            Nossa Equipe
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Conheça os membros da nossa equipe dedicada, que trabalham com amor
            e carinho para garantir o bem-estar dos nossos pets.
          </p>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4"></div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">
            Nosso Espaço
          </h2>
          <ImageCarousel images={spaceImages} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>)}
        </div>
        <div className="mt-12 bg-amber-100 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Junte-se à Nossa Família
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Nossa equipe trabalha com amor e dedicação para garantir o bem-estar
            dos nossos animais. Venha conhecer pessoalmente nosso espaço e nossa
            equipe!
          </p>
          <Link to="/#contato" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Agende uma Visita
          </Link>
        </div>
      </div>
    </div>;
}