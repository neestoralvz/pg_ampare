import React, { useState } from 'react';
import { ArrowRight, Wine, Globe, Search } from 'lucide-react';

interface Vino {
  name: string;
  description: string;
  price: string;
  image: string;
  region: string;
  country: string;
  year: string;
  type: 'Tinto' | 'Blanco' | 'Rosado' | 'Espumoso';
  uva: string[];
  maridaje: string[];
}

const vinos: Vino[] = [
  {
    name: 'Rioja Reserva',
    description: 'Un tinto elegante con notas de frutos rojos maduros, vainilla y especias. 18 meses en barrica de roble francés.',
    price: '$980',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80',
    region: 'La Rioja',
    country: 'España',
    year: '2018',
    type: 'Tinto',
    uva: ['Tempranillo', 'Garnacha'],
    maridaje: ['Cortes madurados', 'Quesos curados', 'Jamón ibérico']
  },
  {
    name: 'Malbec Reserva',
    description: 'Intenso y complejo, con aromas a ciruela madura, chocolate negro y un toque de vainilla.',
    price: '$850',
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&q=80',
    region: 'Mendoza',
    country: 'Argentina',
    year: '2019',
    type: 'Tinto',
    uva: ['Malbec'],
    maridaje: ['Ribeye', 'Cordero', 'Quesos fuertes']
  },
  {
    name: 'Albariño',
    description: 'Fresco y aromático, con notas de frutas tropicales, cítricos y un final mineral.',
    price: '$720',
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80',
    region: 'Rías Baixas',
    country: 'España',
    year: '2021',
    type: 'Blanco',
    uva: ['Albariño'],
    maridaje: ['Mariscos', 'Pescados', 'Tapas ligeras']
  }
];

function VinosPage() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVinos = vinos.filter(vino => {
    const matchesType = selectedType === 'all' || vino.type === selectedType;
    const matchesSearch = vino.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vino.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vino.country.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80"
            alt="Carta de vinos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Carta de Vinos
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Un viaje por las mejores regiones vinícolas del mundo
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6">Nuestra Selección</h2>
            <p className="text-gray-600 mb-8">
              Cada vino en nuestra carta ha sido cuidadosamente seleccionado para 
              complementar nuestra propuesta gastronómica y ofrecer una experiencia 
              única a nuestros comensales.
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Wine className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Selección Premium</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Origen Controlado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white py-8 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSelectedType('all')}
                className={`px-4 py-2 rounded-full ${
                  selectedType === 'all' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-purple-50 text-purple-600'
                }`}
              >
                Todos
              </button>
              {['Tinto', 'Blanco', 'Rosado', 'Espumoso'].map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full ${
                    selectedType === type 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-purple-50 text-purple-600'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nombre, región o país..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vinos Grid */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-1 gap-16">
            {filteredVinos.map((vino) => (
              <div key={vino.name} className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                  <img 
                    src={vino.image}
                    alt={vino.name}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-center gap-2 text-purple-600 mb-2">
                    <span>{vino.region}</span>
                    <span>•</span>
                    <span>{vino.country}</span>
                  </div>
                  <h3 className="text-3xl font-serif mb-3">{vino.name}</h3>
                  <p className="text-gray-600 mb-6">{vino.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Año</h4>
                      <p className="text-purple-600">{vino.year}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Tipo</h4>
                      <p className="text-purple-600">{vino.type}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Uvas</h4>
                    <div className="flex flex-wrap gap-2">
                      {vino.uva.map(u => (
                        <span key={u} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Maridaje Recomendado</h4>
                    <div className="flex flex-wrap gap-2">
                      {vino.maridaje.map(m => (
                        <span key={m} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold text-purple-600">{vino.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-purple-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-6">¿Listo para maridar?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Reserva tu mesa y déjate asesorar por nuestros expertos sommeliers 
            para encontrar el maridaje perfecto.
          </p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors inline-flex items-center">
            Reserva tu experiencia <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VinosPage;