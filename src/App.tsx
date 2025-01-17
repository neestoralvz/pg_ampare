import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Menu, Music, Home, ChefHat, Calendar as CalendarIcon, ArrowRight, MapPin, Utensils, Theater, Wine, BookOpen, Newspaper, ChevronRight, ChevronLeft, X, Users, Share2, Phone, Mail, Clock, Facebook, Instagram, Send, Filter } from 'lucide-react';

const TapasPage = React.lazy(() => import('./pages/gastronomia/tapas'));
const CortesPage = React.lazy(() => import('./pages/gastronomia/cortes'));
const TacosPage = React.lazy(() => import('./pages/gastronomia/tacos'));
const VinosPage = React.lazy(() => import('./pages/gastronomia/vinos'));

interface SubMenuItem {
  label: string;
  href: string;
  to?: string;
  icon?: React.ReactNode;
  description?: string;
  image?: string;
}

interface MenuItem {
  label: string;
  href?: string;
  to?: string;
  icon?: React.ReactNode;
  children?: SubMenuItem[];
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showGastronomyModal, setShowGastronomyModal] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const menuItems: MenuItem[] = [
    {
      label: 'Inicio',
      to: '/',
      icon: <Home className="w-4 h-4" />
    },
    {
      label: 'Gastronomía',
      to: '/gastronomia',
      icon: <Utensils className="w-4 h-4" />,
      children: [
        { label: 'Menú del Día', href: '#menu' },
        { 
          label: 'Tapas Españolas', 
          to: '/gastronomia/tapas',
          description: 'Auténticos sabores mediterráneos en el corazón de Xalapa',
          image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&q=80'
        },
        { 
          label: 'Cortes Finos', 
          to: '/gastronomia/cortes',
          description: 'Selección premium de carnes maduradas a la perfección',
          image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&q=80'
        },
        { 
          label: 'Carta de Vinos', 
          to: '/gastronomia/vinos',
          description: 'Un viaje por las mejores regiones vinícolas del mundo',
          image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80'
        },
        { 
          label: 'Tacos Gourmet', 
          to: '/gastronomia/tacos',
          description: 'La tradición mexicana elevada a su máxima expresión',
          image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&q=80'
        }
      ]
    },
    {
      label: 'Eventos',
      to: '/eventos',
      children: [
        { label: 'Música en Vivo', href: '#musica', icon: <Music className="w-4 h-4" /> },
        { label: 'Teatro y Monólogos', href: '#teatro', icon: <Theater className="w-4 h-4" /> },
        { label: 'Talleres', href: '#talleres', icon: <ChefHat className="w-4 h-4" /> },
        { label: 'Wine & Draw', href: '#wine-draw', icon: <Wine className="w-4 h-4" /> },
        { label: 'Ver Calendario', href: '#calendario', icon: <CalendarIcon className="w-4 h-4" /> }
      ]
    },
    {
      label: 'Blog',
      to: '/blog',
      icon: <Newspaper className="w-4 h-4" />
    },
    {
      label: 'Contacto',
      to: '/#contact',
      icon: <MapPin className="w-4 h-4" />
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeMenu && !(event.target as Element).closest('.menu-item')) {
        setTimeout(() => setActiveMenu(null), 100);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeMenu]);

  const handleMenuToggle = (menuId: string) => {
    if (activeMenu === menuId) {
      setActiveMenu(null);
      // Close modal if menu is being closed
      if (menuId === 'Gastronomía') {
        setShowGastronomyModal(false);
      }
    } else {
      setActiveMenu(menuId);
    }
  };

  const handleGastronomyItemClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href === '#menu') {
      setShowGastronomyModal(true);
    } else {
      window.location.href = href;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between relative">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              <Wine className="w-5 h-5 text-purple-600" />
            </div>
            <h1 className="text-2xl font-serif text-purple-900">Ampare</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative menu-item">
                {item.children ? (
                  <>
                    <button
                      onClick={() => handleMenuToggle(item.label)}
                      className={`text-purple-900 hover:text-purple-700 flex items-center gap-1 ${
                        activeMenu === item.label ? 'text-purple-700' : ''
                      }`}
                    >
                      {item.icon}
                      {item.label}
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          activeMenu === item.label ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    {activeMenu === item.label && item.children && (
                      <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg mt-2 py-2 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href || child.to || ''}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-purple-50 text-purple-900"
                          >
                            {child.icon}
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.to || '/'}
                    className="text-purple-900 hover:text-purple-700 flex items-center gap-1"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
              Reservar
            </button>
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-purple-900"
          >
            <Menu />
          </button>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 w-64 bg-white shadow-lg rounded-lg mt-2 py-2 md:hidden">
              <div className="py-2">
                {menuItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => handleMenuToggle(item.label)}
                          className="w-full text-left px-4 py-2 hover:bg-purple-50 text-purple-900 flex items-center justify-between"
                        >
                          <span className="flex items-center gap-2">
                            {item.icon}
                            {item.label}
                          </span>
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                              activeMenu === item.label ? 'rotate-90' : ''
                            }`}
                          />
                        </button>
                        {activeMenu === item.label && (
                          <div className="bg-purple-50 py-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.href || child.to || ''}
                                className="flex items-center gap-2 px-8 py-2 hover:bg-purple-100 text-purple-900"
                              >
                                {child.icon}
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.to || '/'}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-purple-50 text-purple-900"
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="px-4 pt-2 border-t border-gray-100">
                <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
                  Reservar
                </button>
              </div>
            </div>
          )}

          {/* Gastronomy Menu Popup */}
          {showGastronomyModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-serif text-purple-900">Nuestro Menú</h2>
                  <button onClick={() => setShowGastronomyModal(false)} className="text-gray-500 hover:text-gray-700">
                    ✕
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Tapas Españolas</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Patatas Bravas</h4>
                        <p className="text-gray-600 text-sm">Papas crujientes, salsa brava picante</p>
                        <p className="text-purple-600">$120</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Gambas al Ajillo</h4>
                        <p className="text-gray-600 text-sm">Camarones al ajo, aceite de oliva, guindilla</p>
                        <p className="text-purple-600">$180</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Cortes Finos</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Ribeye 400g</h4>
                        <p className="text-gray-600 text-sm">Marinado con hierbas, papas rostizadas</p>
                        <p className="text-purple-600">$450</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Arrachera Premium</h4>
                        <p className="text-gray-600 text-sm">Marinada 24h, guacamole artesanal</p>
                        <p className="text-purple-600">$320</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="mt-8 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors w-full">
                  Descargar Menú Completo (PDF)
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Routes */}
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
        <Routes>
          <Route path="/" element={
            <div>
              {/* Hero Section */}
              <div className="relative h-screen">
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
                    alt="Colonial house interior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                <div className="relative h-full flex items-center justify-center text-center px-6">
                  <div className="max-w-3xl">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <MapPin className="text-purple-400 w-5 h-5" />
                      <span className="text-purple-200">Callejón Jesús P. Ampare, Xalapa, Veracruz</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">
                      Un Rincón de Arte y Sabor en el Corazón de Xalapa
                    </h2>
                    <p className="text-xl text-gray-200 mb-4">
                      Cocina y Cultura en Xalapa
                    </p>
                    <p className="text-lg text-gray-300 mb-8">
                      Donde la gastronomía se encuentra con el arte
                    </p>
                    <button className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors text-lg">
                      Reserva tu experiencia
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Location Story */}
              <div className="py-20 bg-gradient-to-b from-purple-50 to-white">
                <div className="container mx-auto px-6">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                      <img 
                        src="https://images.unsplash.com/photo-1620064916958-605375619af8?auto=format&fit=crop&q=80"
                        alt="Jacaranda tree"
                        className="rounded-lg shadow-xl"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-sm font-semibold text-purple-600 mb-2">NUESTRA HISTORIA</h3>
                      <h2 className="text-3xl font-serif mb-4">Bajo la Sombra de la Jacaranda</h2>
                      <p className="text-gray-600 mb-6">
                        En el histórico callejón Jesús P. Ampare, junto a la iglesia de San José, florece nuestro espacio 
                        cultural. Como la jacaranda que adorna nuestra entrada con su distintivo color morado, Ampare 
                        es un símbolo de belleza y renovación en el corazón de Xalapa.
                      </p>
                      <button className="flex items-center text-purple-600 hover:text-purple-700">
                        Conoce nuestra historia <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cultural Activities */}
              <div className="py-20 bg-white">
                <div className="container mx-auto px-6">
                  <h2 className="text-3xl font-serif text-center mb-4">¿Qué se cuece este mes en Ampare?</h2>
                  <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Descubre nuestro calendario de eventos culturales, talleres y experiencias únicas
                  </p>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-all">
                      <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                        <Theater className="text-purple-600 w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">Teatro y Monólogos</h3>
                      <p className="text-sm text-gray-600">Obras íntimas y monólogos cautivadores</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-all">
                      <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                        <BookOpen className="text-purple-600 w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">Cuenta Cuentos</h3>
                      <p className="text-sm text-gray-600">Narraciones para todas las edades</p>
                    </div>
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
          } />
          <Route path="/gastronomia/tapas" element={<TapasPage />} />
          <Route path="/gastronomia/cortes" element={<CortesPage />} />
          <Route path="/gastronomia/tacos" element={<TacosPage />} />
          <Route path="/gastronomia/vinos" element={<VinosPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;