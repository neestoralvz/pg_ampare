import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Menu, Home, Calendar as CalendarIcon, Utensils, Wine, Newspaper, ChevronRight, MapPin } from 'lucide-react';

// Lazy load pages
const HomePage = React.lazy(() => import('./pages/Home'));
const EventosPage = React.lazy(() => import('./pages/Eventos'));
const BlogPage = React.lazy(() => import('./pages/Blog'));
const ContactoPage = React.lazy(() => import('./pages/Contacto'));
const TapasPage = React.lazy(() => import('./pages/gastronomia/tapas'));
const CortesPage = React.lazy(() => import('./pages/gastronomia/cortes'));
const TacosPage = React.lazy(() => import('./pages/gastronomia/tacos'));
const VinosPage = React.lazy(() => import('./pages/gastronomia/vinos'));

interface SubMenuItem {
  label: string;
  to: string;
  href?: string;
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
      icon: <CalendarIcon className="w-4 h-4" />
    },
    {
      label: 'Blog',
      to: '/blog',
      icon: <Newspaper className="w-4 h-4" />
    },
    {
      label: 'Contacto',
      to: '/contacto',
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
    } else {
      setActiveMenu(menuId);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between relative">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              <Wine className="w-5 h-5 text-purple-600" />
            </div>
            <h1 className="text-2xl font-serif text-purple-900">Ampare</h1>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <>
                    <button
                      onClick={() => handleMenuToggle(item.label)}
                      className="menu-item flex items-center gap-2 text-gray-700 hover:text-purple-600"
                    >
                      {item.icon}
                      {item.label}
                    </button>
                    {activeMenu === item.label && (
                      <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg mt-2 py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.to || '#'}
                            className="block px-4 py-2 hover:bg-purple-50 text-gray-700"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.to || '#'}
                    className="menu-item flex items-center gap-2 text-gray-700 hover:text-purple-600"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-purple-900"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 w-64 bg-white shadow-lg rounded-lg mt-2 py-2 md:hidden">
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
                              to={child.to || '#'}
                              className="flex items-center gap-2 px-8 py-2 hover:bg-purple-100 text-purple-900"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.to || '#'}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-purple-50 text-purple-900"
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Routes */}
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/eventos" element={<EventosPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
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