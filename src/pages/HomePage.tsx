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

  // Featured bikes (just taking the first 4 for now)
  const featuredBikes = bikes.slice(0, 4);

  return (
    <main className="animate-fade-in bg-white dark:bg-gray-950 transition-colors duration-300">
      <Hero onNavigate={handleNavigate} />
      
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
            {featuredBikes.map(bike => (
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
