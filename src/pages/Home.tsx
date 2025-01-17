import React from 'react';
import { ArrowRight, ChefHat, Wine, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      {/* Hero Section */}
      <div className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Ampare</h1>
          <p className="text-xl md:text-2xl mb-8">Gastronomía & Cultura en el corazón de Xalapa</p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
            Reservar ahora
          </button>
        </div>
      </div>

      {/* Cultural Activities Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-12">Actividades Culturales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Wine className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Wine & Draw</h3>
              <p className="text-sm text-gray-600">Arte y vino en perfecta armonía</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <ChefHat className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Talleres de Cocina</h3>
              <p className="text-sm text-gray-600">Aprende con nuestros chefs</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Wine className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Música en Vivo</h3>
              <p className="text-sm text-gray-600">Noches de jazz y más</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors inline-flex items-center">
              Explora nuestras actividades <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20 bg-purple-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif mb-6">Visítanos</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-purple-600 w-5 h-5 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Dirección</h3>
                    <p className="text-gray-600">Callejón Jesús P. Ampare</p>
                    <p className="text-gray-600">Xalapa, Veracruz</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-purple-600 w-5 h-5 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Horario</h3>
                    <p className="text-gray-600">Martes a Domingo</p>
                    <p className="text-gray-600">12:00 - 23:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-purple-600 w-5 h-5 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-gray-600">+52 228 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-purple-600 w-5 h-5 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Correo</h3>
                    <p className="text-gray-600">info@ampare.mx</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.2298839741766!2d-96.91701692374978!3d19.530694181767395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db31f6238ff32f%3A0x7c9f3bb3e8f0b5a0!2sXalapa-Enr%C3%ADquez%2C%20Ver.!5e0!3m2!1ses!2smx!4v1709901234567!5m2!1ses!2smx"
                className="w-full h-[400px] rounded-lg shadow-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
