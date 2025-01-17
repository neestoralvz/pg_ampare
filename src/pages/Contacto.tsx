import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#FDF8F5] pt-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif mb-12 text-center">Contacto</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-serif mb-6">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-serif mb-6">Información de Contacto</h2>
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

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.2298839741766!2d-96.91701692374978!3d19.530694181767395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db31f6238ff32f%3A0x7c9f3bb3e8f0b5a0!2sXalapa-Enr%C3%ADquez%2C%20Ver.!5e0!3m2!1ses!2smx!4v1709901234567!5m2!1ses!2smx"
                className="w-full h-[300px]"
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
