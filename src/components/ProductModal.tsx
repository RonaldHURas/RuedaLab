import React from 'react';
import { X, ShoppingCart, CheckCircle, AlertCircle, Tag, Plus } from 'lucide-react';
import { Bike, WHATSAPP_NUMBER } from '../data/bikes';

interface ProductModalProps {
  bike: Bike | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCompare: (bike: Bike) => void;
  isInComparator: boolean;
}

const ProductModal: React.FC<ProductModalProps> = ({
  bike,
  isOpen,
  onClose,
  onAddToCompare,
  isInComparator
}) => {
  if (!isOpen || !bike) return null;

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

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa la ${bike.name} (${formatPrice(bike.originalPrice)}). ¿Tienen stock disponible?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in transition-colors">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>

          <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
            {/* Left Column - Image */}
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {bike.discount && (
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1 shadow-sm">
                      <Tag className="w-4 h-4" />
                      <span>-{bike.discount}%</span>
                    </div>
                  )}
                  {bike.inStock ? (
                    <div className="bg-gray-900 dark:bg-black text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 shadow-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Disponible</span>
                    </div>
                  ) : (
                    <div className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 shadow-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>Bajo pedido</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg transition-colors">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center transition-colors">
                  <CheckCircle className="w-5 h-5 text-gray-900 dark:text-white mr-2" />
                  Características destacadas
                </h4>
                <ul className="space-y-2">
                  {bike.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700 dark:text-gray-300 transition-colors">
                      <span className="text-gray-900 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="inline-block bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {bike.category.toUpperCase()}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {bike.name}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {bike.description}
                </p>
              </div>

              {/* Price */}
              <div className="bg-gray-50 p-4 rounded-lg">
                {bike.discount ? (
                  <div>
                    <p className="text-sm text-gray-500 line-through mb-1">
                      {formatPrice(bike.originalPrice)}
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {formatPrice(calculateDiscount(bike.originalPrice, bike.discount))}
                    </p>
                    <p className="text-sm text-red-600 font-medium mt-1">
                      Ahorras {formatPrice(bike.originalPrice - calculateDiscount(bike.originalPrice, bike.discount))}
                    </p>
                  </div>
                ) : (
                  <p className="text-3xl font-bold text-gray-900">
                    {formatPrice(bike.originalPrice)}
                  </p>
                )}
              </div>

              {/* Specs */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Especificaciones técnicas
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Suspensión</p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {bike.specs.suspension}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Cuadro</p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {bike.specs.frame}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Velocidades</p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {bike.specs.gears}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Frenos</p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {bike.specs.brakes}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Ruedas</p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {bike.specs.wheels}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Peso</p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {bike.specs.weight}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center space-x-2 bg-rose-600 text-white px-6 py-4 rounded-lg hover:bg-rose-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Consultar por WhatsApp</span>
                </button>

                <button
                  onClick={() => onAddToCompare(bike)}
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg transition-all duration-300 font-semibold ${
                    isInComparator
                      ? 'bg-rose-100 text-rose-700 border-2 border-rose-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Plus className="w-5 h-5" />
                  <span>
                    {isInComparator ? 'En comparador' : 'Agregar al comparador'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
