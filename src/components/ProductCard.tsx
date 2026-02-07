import React from 'react';
import { ShoppingCart, Info, Tag, AlertCircle, CheckCircle, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Bike, WHATSAPP_NUMBER } from '../data/bikes';

interface ProductCardProps {
  bike: Bike;
  onAddToCompare: (bike: Bike) => void;
  isInComparator: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  bike,
  onAddToCompare,
  isInComparator
}) => {
  const navigate = useNavigate();
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
    }).format(price);
  };

  const calculateDiscountedPrice = (originalPrice: number, discount: number) => {
    return originalPrice - (originalPrice * discount) / 100;
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const discountedPrice = calculateDiscountedPrice(bike.originalPrice, bike.discount);
    const message = encodeURIComponent(
      `¡Hola! Me interesa la ${bike.name} (${formatPrice(discountedPrice)}). ¿Tienen stock disponible?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div 
      onClick={() => navigate(`/producto/${bike.id}`)}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-800 cursor-pointer"
    >      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={bike.image}
          alt={bike.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

        {/* Quick Actions */}
        <div className="absolute top-4 right-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCompare(bike);
            }}
            className={`p-2 rounded-full transition-all duration-300 shadow-sm ${
              isInComparator
                ? 'bg-rose-600 text-white'
                : 'bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-200 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600'
            }`}
            title={isInComparator ? 'En comparador' : 'Agregar al comparador'}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="inline-block bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 px-3 py-1 rounded-full text-xs font-medium mb-3 transition-colors">
          {bike.category.toUpperCase()}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
          {bike.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 transition-colors">
          {bike.description}
        </p>

        {/* Key Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
          <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded transition-colors">
            <p className="text-gray-500 dark:text-gray-400 transition-colors">Suspensión</p>
            <p className="font-semibold text-gray-900 dark:text-white transition-colors">{bike.specs.suspension}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded transition-colors">
            <p className="text-gray-500 dark:text-gray-400 transition-colors">Velocidades</p>
            <p className="font-semibold text-gray-900 dark:text-white transition-colors">{bike.specs.gears}</p>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4 space-y-2">
          <div className="flex items-baseline space-x-3">
            <p className="text-3xl font-bold text-red-600 dark:text-red-500 transition-colors">
              {formatPrice(calculateDiscountedPrice(bike.originalPrice, bike.discount))}
            </p>
            <p className="text-lg text-gray-400 dark:text-gray-500 line-through transition-colors">
              {formatPrice(bike.originalPrice)}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/producto/${bike.id}`);
            }}
            className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            <Info className="w-4 h-4" />
            <span>Ver más</span>
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 flex items-center justify-center space-x-2 bg-rose-600 text-white px-4 py-3 rounded-lg hover:bg-rose-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Comprar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
