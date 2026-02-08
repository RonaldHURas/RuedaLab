import React from 'react';
import { Mountain, ArrowRight, Shield, Truck, Award } from 'lucide-react';
import BikeCarousel from './BikeCarousel';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-20 transition-colors duration-300"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23Be123c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-colors">
              <Award className="w-3 h-3 md:w-4 md:h-4" />
              <span>La mejor selección de ciclismo en España</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight font-sans transition-colors">
              Tu próxima
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-700 dark:from-rose-400 dark:to-rose-600">
                aventura
              </span>
              comienza aquí
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans transition-colors">
              Descubre nuestra amplia gama de bicicletas para todas las modalidades.
              Desde montaña y carretera hasta urbana y gravel, tenemos la bici ideal para ti.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onNavigate('products')}
                className="group flex items-center justify-center space-x-2 bg-rose-600 text-white px-8 py-4 rounded-xl hover:bg-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                <span>Ver Catálogo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg transition-colors">
                  <Shield className="w-6 h-6 text-gray-900 dark:text-gray-100" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 transition-colors">Garantía</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">2-5 años</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg transition-colors">
                  <Truck className="w-6 h-6 text-gray-900 dark:text-gray-100" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 transition-colors">Envío</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">Todo España</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg transition-colors">
                  <Award className="w-6 h-6 text-gray-900 dark:text-gray-100" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 dark:text-gray-100 transition-colors">Calidad</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">Garantizada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Carousel */}
          <div className="relative animate-slide-in-right">
             <BikeCarousel />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-200 rounded-full blur-3xl opacity-50 -z-10" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-rose-300 rounded-full blur-3xl opacity-30 -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rose-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-rose-600 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
