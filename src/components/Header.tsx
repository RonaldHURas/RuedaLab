import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Moon, Sun } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navItems = [
    { label: 'Inicio', path: '/', isScrollTop: true },
    { label: 'Catálogo', path: '/catalogo' },
    { label: 'Reseñas', path: '/', hash: '#reviews' },
    { label: 'FAQ', path: '/', hash: '#faq' },
    { label: 'Contacto', path: '/', hash: '#contact' }
  ];

  const handleNavClick = (path: string, hash?: string, isScrollTop?: boolean) => {
    setIsMobileMenuOpen(false);
    
    // If we simply want to go to top of home
    if (path === '/' && isScrollTop) {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    navigate(path);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const goToHomeTop = () => {
     navigate('/');
     window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 shadow-lg py-3 backdrop-blur-md'
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
             onClick={goToHomeTop}
             className="flex items-center space-x-3 group"
          >
            <img
              src="/image.png"
              alt="RUEDALAB"
              className="w-12 h-12 hover:scale-110 transition-transform"
            />
            <span className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-rose-600 transition-colors">
              RUEDALAB
            </span>
          </button>

          <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path, item.hash, item.isScrollTop)}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 font-medium font-sans"
              >
                {item.label}
              </button>
            ))}
          </nav>

           {/* Theme Toggle */}
           <button
            onClick={toggleTheme}
            className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>


          {/* CTA Button - Desktop */}
          <Link
            to="/catalogo"
            className="hidden md:flex items-center space-x-2 bg-rose-600 text-white px-6 py-2.5 rounded-lg hover:bg-rose-700 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Ver Catálogo</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path, item.hash)}
                  className="px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:bg-rose-50 dark:hover:bg-gray-800 hover:text-rose-600 dark:hover:text-rose-400 rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => navigate('/catalogo')}
                className="w-full flex items-center justify-center space-x-2 bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-all duration-300 shadow-md font-medium mt-2"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Ver Catálogo</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
