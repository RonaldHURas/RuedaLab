import React from 'react';
import { X, ShoppingCart, CheckCircle, XCircle } from 'lucide-react';
import { Bike, WHATSAPP_NUMBER } from '../data/bikes';

interface ComparatorProps {
  bikes: Bike[];
  onRemoveBike: (bikeId: number) => void;
}

const Comparator: React.FC<ComparatorProps> = ({ bikes, onRemoveBike }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const calculateDiscount = (price: number, discount: number) => {
    return price - (price * discount) / 100;
  };

  const handleWhatsAppClick = (bike: Bike) => {
    const message = encodeURIComponent(
      `Hola! Me interesa la ${bike.name} (${formatPrice(bike.originalPrice)}). ¿Tienen stock disponible?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  if (bikes.length === 0) {
    return (
      <section id="comparator" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Comparador de Bicicletas
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
              Compara hasta 3 bicicletas lado a lado para encontrar la perfecta para ti
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-12 text-center transition-colors">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 transition-colors">
              <ShoppingCart className="w-12 h-12 text-gray-400 dark:text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors">
              No hay bicicletas en el comparador
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors">
              Agrega bicicletas desde el catálogo usando el botón "+" en cada tarjeta
            </p>
            <button
              onClick={() => {
                const productsSection = document.getElementById('products');
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              Ir al catálogo
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="comparator" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Comparador de Bicicletas
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            Comparando {bikes.length} {bikes.length === 1 ? 'bicicleta' : 'bicicletas'}
            {bikes.length < 3 && ` (puedes agregar ${3 - bikes.length} más)`}
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bikes.map((bike) => (
                <div
                  key={bike.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-colors"
                >
                  {/* Header with Remove Button */}
                  <div className="relative">
                    <img
                      src={bike.image}
                      alt={bike.name}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => onRemoveBike(bike.id)}
                      className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-lg"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    {!bike.inStock && (
                      <div className="absolute bottom-4 left-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Bajo pedido
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title & Category */}
                    <div className="mb-4">
                      <div className="inline-block bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 px-3 py-1 rounded-full text-xs font-medium mb-2 transition-colors">
                        {bike.category.toUpperCase()}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors">
                        {bike.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700 transition-colors">
                      {bike.discount ? (
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 line-through transition-colors">
                            {formatPrice(bike.originalPrice)}
                          </p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
                            {formatPrice(
                              calculateDiscount(bike.originalPrice, bike.discount)
                            )}
                          </p>
                        </div>
                      ) : (
                        <p className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">
                          {formatPrice(bike.originalPrice)}
                        </p>
                      )}
                    </div>

                    {/* Specs Comparison */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-start">
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors">
                          Suspensión:
                        </span>
                        <span className="text-sm text-gray-900 dark:text-gray-200 font-semibold text-right transition-colors">
                          {bike.specs.suspension}
                        </span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors">
                          Cuadro:
                        </span>
                        <span className="text-sm text-gray-900 dark:text-gray-200 font-semibold text-right transition-colors">
                          {bike.specs.frame}
                        </span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors">
                          Velocidades:
                        </span>
                        <span className="text-sm text-gray-900 dark:text-gray-200 font-semibold text-right transition-colors">
                          {bike.specs.gears}
                        </span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors">
                          Frenos:
                        </span>
                        <span className="text-sm text-gray-900 dark:text-gray-200 font-semibold text-right transition-colors">
                          {bike.specs.brakes}
                        </span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors">
                          Ruedas:
                        </span>
                        <span className="text-sm text-gray-900 dark:text-gray-200 font-semibold text-right transition-colors">
                          {bike.specs.wheels}
                        </span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium transition-colors">
                          Peso:
                        </span>
                        <span className="text-sm text-gray-900 dark:text-gray-200 font-semibold text-right transition-colors">
                          {bike.specs.weight}
                        </span>
                      </div>
                    </div>

                    {/* Stock Status */}
                    <div className="mb-4">
                      {bike.inStock ? (
                        <div className="flex items-center text-green-600 dark:text-green-400 text-sm transition-colors">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          <span className="font-medium">Disponible</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-gray-600 text-sm">
                          <XCircle className="w-4 h-4 mr-2" />
                          <span className="font-medium">Bajo pedido</span>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handleWhatsAppClick(bike)}
                      className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Consultar</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clear All Button */}
        {bikes.length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={() => bikes.forEach((bike) => onRemoveBike(bike.id))}
              className="text-red-600 hover:text-red-700 font-medium hover:underline"
            >
              Limpiar comparador
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Comparator;
