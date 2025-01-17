import React from 'react';
import { ArrowRight, Utensils, Flame, Award } from 'lucide-react';

interface Taco {
  name: string;
  description: string;
  price: string;
  image: string;
  ingredients: string[];
  spicyLevel?: 1 | 2 | 3;
  isNew?: boolean;
  recommended?: boolean;
}

const tacos: Taco[] = [
  {
    name: 'Taco de Ribeye',
    description: 'Corte premium de ribeye madurado, servido sobre tortilla artesanal de maíz azul, topped con cebolla caramelizada y aguacate.',
    price: '$95',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&q=80',
    ingredients: ['Ribeye madurado', 'Tortilla azul', 'Cebolla caramelizada', 'Aguacate'],
    recommended: true
  },
  {
    name: 'Taco de Pulpo al Pastor',
    description: 'Pulpo marinado en adobo tradicional al pastor, asado a la parrilla y servido con piña asada y cilantro fresco.',
    price: '$85',
    image: 'https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&q=80',
    ingredients: ['Pulpo', 'Adobo al pastor', 'Piña asada', 'Cilantro'],
    spicyLevel: 2,
    isNew: true
  },
  {
    name: 'Taco de Cordero',
    description: 'Cordero cocido a baja temperatura por 12 horas, servido con salsa de menta, yogurt de cilantro y cebolla encurtida.',
    price: '$80',
    image: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&q=80',
    ingredients: ['Cordero', 'Salsa de menta', 'Yogurt de cilantro', 'Cebolla encurtida'],
    spicyLevel: 1
  }
];

function TacosPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&q=80"
            alt="Tacos gourmet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Tacos Gourmet
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              La tradición mexicana elevada a su máxima expresión
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6">El Arte del Taco</h2>
            <p className="text-gray-600 mb-8">
              En Ampare, reimaginamos el taco tradicional mexicano con ingredientes 
              premium y técnicas culinarias contemporáneas, creando una experiencia 
              gastronómica única que honra nuestras raíces.
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Utensils className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Ingredientes Premium</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Flame className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Técnicas Modernas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Sabor Auténtico</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tacos Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-1 gap-16">
            {tacos.map((taco) => (
              <div key={taco.name} className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                  <div className="relative">
                    <img 
                      src={taco.image}
                      alt={taco.name}
                      className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                    {taco.isNew && (
                      <span className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        Nuevo
                      </span>
                    )}
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-center gap-2 mb-3">
                    {taco.recommended && (
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                        Recomendado
                      </span>
                    )}
                    {taco.spicyLevel && (
                      <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        {Array(taco.spicyLevel).fill('🌶️').join('')}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-3xl font-serif mb-3">{taco.name}</h3>
                  <p className="text-gray-600 mb-6">{taco.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Ingredientes</h4>
                    <div className="flex flex-wrap gap-2">
                      {taco.ingredients.map(ingredient => (
                        <span key={ingredient} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold text-purple-600">{taco.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preparation Process */}
      <div className="py-20 bg-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12">Nuestro Proceso</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Las Tortillas</h3>
              <p className="text-gray-600">
                Elaboradas a mano diariamente con masa de maíz nixtamalizado. 
                Cada tortilla es prensada y cocida al momento para garantizar 
                la mejor textura y sabor.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Los Ingredientes</h3>
              <p className="text-gray-600">
                Seleccionamos los mejores cortes y productos frescos. Cada 
                ingrediente es preparado con técnicas específicas para 
                resaltar sus sabores naturales.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">El Montaje</h3>
              <p className="text-gray-600">
                Cada taco es ensamblado con precisión, cuidando el balance 
                de sabores y texturas para crear una experiencia 
                gastronómica memorable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-6">¿Listo para probar?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Reserva tu mesa y descubre nuestra interpretación contemporánea 
            de la tradición taquera mexicana.
          </p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors inline-flex items-center">
            Reserva tu experiencia <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TacosPage;