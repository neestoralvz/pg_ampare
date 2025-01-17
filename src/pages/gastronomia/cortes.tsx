import React from 'react';
import { ArrowRight, Beef, Award, Flame } from 'lucide-react';

interface Corte {
  name: string;
  description: string;
  price: string;
  image: string;
  weight: string;
  cookingPoints: string[];
  origin: string;
  madurado?: string;
}

const cortes: Corte[] = [
  {
    name: 'Ribeye Premium',
    description: 'Un corte jugoso y tierno con un excelente marmoleado. Madurado en seco durante 30 días para intensificar sus sabores y lograr una textura excepcional.',
    price: '$450',
    image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&q=80',
    weight: '400g',
    cookingPoints: ['Rare', 'Medium Rare', 'Medium'],
    origin: 'USDA Prime',
    madurado: '30 días'
  },
  {
    name: 'Arrachera Premium',
    description: 'Marinada durante 24 horas en nuestra mezcla secreta de especias y hierbas. Servida con guacamole artesanal y tortillas hechas a mano.',
    price: '$320',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80',
    weight: '300g',
    cookingPoints: ['Medium Rare', 'Medium'],
    origin: 'Sonora, México'
  },
  {
    name: 'Tomahawk',
    description: 'El rey de los cortes, con su característico hueso largo. Ideal para compartir, este corte espectacular es la estrella de nuestra parrilla.',
    price: '$890',
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80',
    weight: '800g',
    cookingPoints: ['Rare', 'Medium Rare', 'Medium'],
    origin: 'USDA Prime',
    madurado: '45 días'
  }
];

function CortesPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&q=80"
            alt="Cortes finos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Cortes Finos
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              La excelencia en cada bocado
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6">El Arte de la Carne</h2>
            <p className="text-gray-600 mb-8">
              En Ampare, la selección y preparación de nuestros cortes es un arte que 
              practicamos con pasión. Cada pieza es cuidadosamente elegida y madurada 
              para alcanzar su máximo potencial de sabor y textura.
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Beef className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Selección Premium</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Maduración Perfecta</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Flame className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Cocción Experta</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cortes Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-1 gap-16">
            {cortes.map((corte, index) => (
              <div key={corte.name} className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                  <img 
                    src={corte.image}
                    alt={corte.name}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="text-sm text-purple-600 mb-2">{corte.origin}</div>
                  <h3 className="text-3xl font-serif mb-3">{corte.name}</h3>
                  <p className="text-gray-600 mb-6">{corte.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Peso</h4>
                      <p className="text-purple-600">{corte.weight}</p>
                    </div>
                    {corte.madurado && (
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Maduración</h4>
                        <p className="text-purple-600">{corte.madurado}</p>
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Términos recomendados</h4>
                    <div className="flex flex-wrap gap-2">
                      {corte.cookingPoints.map(point => (
                        <span key={point} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold text-purple-600">{corte.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Behind the Scenes */}
      <div className="py-20 bg-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12">Detrás de Cada Corte</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Selección</h3>
              <p className="text-gray-600">
                Cada pieza es cuidadosamente seleccionada por nuestros expertos, 
                considerando el marmoleado, color y textura para garantizar la 
                mejor calidad.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Maduración</h3>
              <p className="text-gray-600">
                Nuestro proceso de maduración en seco permite que los sabores se 
                concentren y la carne desarrolle una terneza excepcional.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Preparación</h3>
              <p className="text-gray-600">
                Cocinamos cada corte en nuestra parrilla especial, sellando los 
                jugos y creando una costra perfecta que realza los sabores naturales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-6">¿Listo para la experiencia?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Reserva tu mesa y déjate sorprender por nuestros cortes excepcionales, 
            preparados exactamente a tu gusto.
          </p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors inline-flex items-center">
            Reserva tu experiencia <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CortesPage;