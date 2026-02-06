import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Bicicletas', id: 'products' },
    { label: 'Comparador', id: 'comparator' },
    { label: 'Reseñas', id: 'reviews' }
  ];

  const categories = [
    { label: 'Cross Country', id: 'xc' },
    { label: 'Trail', id: 'trail' },
    { label: 'Enduro', id: 'enduro' },
    { label: 'Downhill', id: 'dh' }
  ];

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Youtube, url: '#', label: 'Youtube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/image.png"
                alt="RUEDALAB"
                className="w-12 h-12"
              />
              <span className="text-xl font-bold">RUEDALAB</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Tu tienda especializada en bicicletas de montaña. Calidad, variedad y
              atención personalizada desde 2020.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-lg hover:bg-rose-600 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-400 hover:text-rose-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  Preguntas Frecuentes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => onNavigate('products')}
                    className="text-gray-400 hover:text-rose-400 transition-colors"
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Av. Grupo María Blanchard, 3<br />39012 Santander<br />Cantabria, España
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a
                  href="tel:+34637149629"
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  +34 637 14 96 29
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a
                  href="mailto:contacto@mtbstore.es"
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  contacto@mtbstore.es
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Kit Digital Banner - Full Width */}
        <div className="pt-8 pb-6 border-t border-gray-800">
          <div className="flex justify-center items-center">
            <img 
              src="/kit-digital-banner.png" 
              alt="Financiado por Kit Digital - Next Generation EU" 
              className="w-full max-w-5xl h-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} RUEDALAB. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-rose-400 transition-colors">
                Términos y Condiciones
              </button>
              <button className="text-gray-400 hover:text-rose-400 transition-colors">
                Política de Privacidad
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
