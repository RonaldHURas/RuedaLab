import React from 'react';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import ParallaxSection from '../components/ParallaxSection';
import { useNavigate } from 'react-router-dom';
import { bikes } from '../data/bikes';
import { ArrowRight, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (section: string) => {
    if (section === 'products') {
      navigate('/catalogo');
    } else if (section === 'comparator') {
      navigate('/catalogo');
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Super ofertas (bicicletas con super oferta especial)
  const superOffers = bikes.filter(bike => bike.superOffer);
  
  // Featured bikes regulares (excluyendo las super ofertas)
  const regularFeatured = bikes.filter(bike => !bike.superOffer).slice(0, 4);

  return (
    <main className="animate-fade-in bg-white dark:bg-gray-950 transition-colors duration-300">
      <Hero onNavigate={handleNavigate} />
      
      {/* Super Ofertas Section */}
      {superOffers.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-rose-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-rose-600 to-orange-600 text-white px-6 py-3 rounded-full mb-4 animate-pulse">
                <span className="text-2xl font-black">⚡ SUPER OFERTAS ⚡</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                ¡Ahorra €300 adicionales!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg transition-colors">
                Ofertas limitadas en nuestros modelos más exclusivos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {superOffers.map(bike => (
                <div 
                  key={bike.id} 
                  className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-rose-500"
                  onClick={() => navigate('/catalogo')}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={bike.image} 
                      alt={bike.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-rose-600 to-orange-600 text-white text-sm font-bold px-3 py-2 rounded-full shadow-lg animate-pulse">
                      -{bike.discount}%
                    </div>
                    <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 text-xs font-black px-3 py-2 rounded-full shadow-lg">
                      -€300 EXTRA
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors line-clamp-2">
                      {bike.name}
                    </h3>
                    <div className="flex items-center text-yellow-400 text-xs mb-2">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-gray-400 dark:text-gray-500 ml-1">(12)</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-500 text-xs line-through">
                        €{bike.originalPrice}
                      </p>
                      <p className="text-2xl font-black text-rose-600 dark:text-rose-400">
                        €{Math.round(bike.originalPrice * (1 - bike.discount / 100))}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <button 
                onClick={() => navigate('/catalogo')}
                className="inline-flex items-center bg-gradient-to-r from-rose-600 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-rose-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Ver todas las super ofertas <ArrowRight className="ml-2 w-6 h-6" />
              </button>
            </div>
          </div>
        </section>
      )}
      
      {/* Featured Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Destacados de la Temporada
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl transition-colors">
                Las bicicletas más buscadas por nuestros ciclistas expertos.
              </p>
            </div>
            <button 
              onClick={() => navigate('/catalogo')}
              className="hidden md:flex items-center text-rose-600 dark:text-rose-400 font-semibold hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
            >
              Ver todo el catálogo <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regularFeatured.map(bike => (
              <div key={bike.id} className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300" onClick={() => navigate('/catalogo')}>
                <div className="relative overflow-hidden aspect-[4/3] mb-4">
                  <img 
                    src={bike.image} 
                    alt={bike.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {bike.discount > 0 && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      -{bike.discount}%
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {bike.name}
                  </h3>
                  <div className="flex items-center text-yellow-400 text-sm mb-2">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-gray-400 dark:text-gray-500 ml-2">(12)</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                     <p className="text-gray-500 text-sm line-through">
                      €{bike.originalPrice}
                     </p>
                     <p className="text-xl font-bold text-gray-900 dark:text-white">
                      €{Math.round(bike.originalPrice * (1 - bike.discount / 100))}
                     </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <button 
              onClick={() => navigate('/catalogo')}
              className="inline-flex items-center text-rose-600 dark:text-rose-400 font-semibold hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
            >
              Ver todo el catálogo <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <ParallaxSection />


      <WhyUs />
      <Reviews />
      <FAQ />
      <Contact />
    </main>
  );
};

export default HomePage;
