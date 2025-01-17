import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface TapaItem {
  name: string;
  description: string;
  price: string;
  image: string;
  region?: string;
  ingredients?: string[];
  isSpicy?: boolean;
}

const tapas: TapaItem[] = [
  {
    name: 'Patatas Bravas',
    description: 'Cubos de patata crujientes por fuera y suaves por dentro, bañados en nuestra salsa brava casera elaborada con pimentón de la Vera. Un clásico madrileño con nuestro toque especial.',
    price: '$120',
    image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&q=80',
    region: 'Madrid',
    ingredients: ['Patatas', 'Pimentón de la Vera', 'Ajo', 'Aceite de oliva'],
    isSpicy: true
  },
  {
    name: 'Gambas al Ajillo',
    description: 'Camarones frescos salteados en aceite de oliva virgen extra con ajo y guindilla. Servidos en cazuela de barro tradicional para mantener el calor y los aromas.',
    price: '$180',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80',
    region: 'Andalucía',
    ingredients: ['Camarones', 'Ajo', 'Guindilla', 'Aceite de oliva virgen extra']
  },
  {
    name: 'Tortilla Española',
    description: 'El equilibrio perfecto entre patatas confitadas y huevos frescos. Cocida al punto para mantener su jugosidad interior. Una receta transmitida por generaciones.',
    price: '$140',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80',
    region: 'España',
    ingredients: ['Huevos', 'Patatas', 'Cebolla', 'Aceite de oliva']
  }
];

function TapasPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&q=80"
            alt="Tapas españolas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Tapas Españolas
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Un viaje por los sabores auténticos de España
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6">La Historia de Nuestras Tapas</h2>
            <p className="text-gray-600 mb-8">
              Las tapas son más que aperitivos; son una tradición centenaria que refleja la 
              cultura social española. En Ampare, honramos esta tradición seleccionando los 
              mejores ingredientes y respetando las recetas tradicionales, mientras añadimos 
              nuestro toque contemporáneo.
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Ingredientes Premium</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Recetas Auténticas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Preparación Artesanal</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tapas Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {tapas.map((tapa, index) => (
              <div key={tapa.name} className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <img 
                    src={tapa.image}
                    alt={tapa.name}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="text-sm text-purple-600 mb-2">{tapa.region}</div>
                  <h3 className="text-2xl font-serif mb-3">{tapa.name}</h3>
                  <p className="text-gray-600 mb-4">{tapa.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tapa.ingredients?.map(ingredient => (
                      <span key={ingredient} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-purple-600">{tapa.price}</span>
                    {tapa.isSpicy && (
                      <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm">
                        Picante
                      </span>
                    )}
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
          <h2 className="text-3xl font-serif mb-6">¿Listo para degustar?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Reserva tu mesa y déjate llevar por un viaje gastronómico a través de 
            los sabores más auténticos de España.
          </p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors inline-flex items-center">
            Reserva tu experiencia <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TapasPage;