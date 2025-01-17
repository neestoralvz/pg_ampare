import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F5] pt-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif mb-12 text-center">Blog Ampare</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src="/blog/wine-tasting.jpg" 
              alt="Cata de vinos" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">El Arte de la Cata de Vinos</h2>
              <p className="text-gray-600 mb-4">
                Descubre los secretos para apreciar los matices y aromas de un buen vino...
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  15 Ene 2025
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Sommelier Carlos
                </span>
              </div>
              <button className="text-purple-600 hover:text-purple-700 inline-flex items-center gap-1">
                Leer más <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src="/blog/tapas.jpg" 
              alt="Tapas españolas" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Tapas: La Esencia Española</h2>
              <p className="text-gray-600 mb-4">
                Un recorrido por la historia y tradición de las tapas españolas...
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  12 Ene 2025
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Chef María
                </span>
              </div>
              <button className="text-purple-600 hover:text-purple-700 inline-flex items-center gap-1">
                Leer más <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src="/blog/art.jpg" 
              alt="Arte y gastronomía" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Arte y Gastronomía</h2>
              <p className="text-gray-600 mb-4">
                Cómo la gastronomía y el arte se entrelazan en la experiencia Ampare...
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  10 Ene 2025
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Ana Curator
                </span>
              </div>
              <button className="text-purple-600 hover:text-purple-700 inline-flex items-center gap-1">
                Leer más <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
