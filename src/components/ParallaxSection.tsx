import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ParallaxSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden flex items-center justify-center">
      {/* Background with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">
          Supera tus límites
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto">
          La tecnología más avanzada en ciclismo al alcance de tu mano. 
          Diseñadas para el rendimiento, construidas para la aventura.
        </p>
        <button
          onClick={() => navigate('/catalogo')}
          className="inline-flex items-center space-x-2 bg-rose-600 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full hover:bg-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
        >
          <span>Explorar Colección</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default ParallaxSection;
