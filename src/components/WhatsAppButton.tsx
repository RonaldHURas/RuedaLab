import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/bikes';

const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowTooltip(true), 500);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent(
      '¡Hola! Estoy interesado en las bicicletas de RUEDALAB. ¿Pueden ayudarme?'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full left-0 mb-4 animate-fade-in">
          <div className="relative bg-white rounded-lg shadow-xl p-4 max-w-xs border border-gray-200">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-sm text-gray-700 font-medium pr-6">
              ¿Necesitas ayuda? Escríbenos por WhatsApp
            </p>
            <div className="absolute bottom-0 left-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-200" />
          </div>
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-subtle"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />

        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-bounce">
          1
        </span>

        {/* Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
