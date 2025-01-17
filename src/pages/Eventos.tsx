import React from 'react';
import { Music, Theater, ChefHat, Wine, Calendar as CalendarIcon } from 'lucide-react';

export default function EventosPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F5] pt-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif mb-12 text-center">Eventos y Actividades</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Music className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Música en Vivo</h2>
            <p className="text-gray-600 mb-4">Disfruta de las mejores noches de jazz y música acústica en vivo.</p>
            <p className="text-purple-600">Jueves a Sábado, 20:00 - 23:00</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Theater className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Teatro y Monólogos</h2>
            <p className="text-gray-600 mb-4">Una selección de obras y monólogos que te harán reír y reflexionar.</p>
            <p className="text-purple-600">Viernes, 21:00</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <ChefHat className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Talleres</h2>
            <p className="text-gray-600 mb-4">Aprende técnicas culinarias con nuestros chefs expertos.</p>
            <p className="text-purple-600">Sábados, 11:00 - 14:00</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Wine className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Wine & Draw</h2>
            <p className="text-gray-600 mb-4">Una experiencia única combinando arte y vino.</p>
            <p className="text-purple-600">Miércoles, 19:00 - 21:00</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors inline-flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            Ver Calendario Completo
          </button>
        </div>
      </div>
    </div>
  );
}
