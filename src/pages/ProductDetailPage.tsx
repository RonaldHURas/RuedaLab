import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  CheckCircle, 
  AlertCircle, 
  Tag, 
  ChevronLeft, 
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import { bikes, WHATSAPP_NUMBER } from '../data/bikes';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Encontrar la bicicleta por ID
  const bike = bikes.find((b) => b.id === Number(id));

  if (!bike) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Producto no encontrado
          </h1>
          <button
            onClick={() => navigate('/catalogo')}
            className="text-rose-600 hover:text-rose-700 font-semibold"
          >
            Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  // Crear array de todas las imágenes (principal + adicionales)
  const allImages = [bike.image, ...(bike.images || [])];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
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
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/catalogo')}
          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al catálogo
        </button>

        {/* Product Detail */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-8 lg:p-12">
            {/* Left Column - Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative rounded-xl overflow-hidden aspect-square md:aspect-[4/3] bg-gray-100 dark:bg-gray-800">
                <img
                  src={allImages[currentImageIndex]}
                  alt={`${bike.name} - Imagen ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain md:object-cover"
                />

                {/* Navigation Arrows - Only show if multiple images */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
                    </button>
                  </>
                )}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {bike.discount > 0 && (
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1 shadow-sm">
                      <Tag className="w-4 h-4" />
                      <span>-{bike.discount}%</span>
                    </div>
                  )}
                  {bike.superOffer && (
                    <div className="bg-yellow-400 text-gray-900 text-xs font-black px-3 py-2 rounded-full shadow-lg">
                      SUPER OFERTA
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

                {/* Image Counter */}
                {allImages.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {currentImageIndex + 1} / {allImages.length}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {allImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => selectImage(index)}
                      className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index
                          ? 'border-rose-600 ring-2 ring-rose-200 dark:ring-rose-900'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${bike.name} - Miniatura ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="inline-block bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {bike.category.toUpperCase()}
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                  {bike.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg transition-colors">
                  {bike.description}
                </p>
              </div>

              {/* Price */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-colors">
                {bike.discount ? (
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-through mb-2 transition-colors">
                      Precio original: {formatPrice(bike.originalPrice)}
                    </p>
                    <p className="text-4xl font-bold text-rose-600 dark:text-rose-400 mb-2 transition-colors">
                      {formatPrice(calculateDiscount(bike.originalPrice, bike.discount))}
                    </p>
                    <p className="text-sm text-red-600 dark:text-red-400 font-medium transition-colors">
                      Ahorras {formatPrice(bike.originalPrice - calculateDiscount(bike.originalPrice, bike.discount))}
                    </p>
                  </div>
                ) : (
                  <p className="text-4xl font-bold text-gray-900 dark:text-white transition-colors">
                    {formatPrice(bike.originalPrice)}
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center text-lg transition-colors">
                  <CheckCircle className="w-6 h-6 text-rose-600 dark:text-rose-400 mr-2" />
                  Características destacadas
                </h3>
                <ul className="space-y-3">
                  {bike.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700 dark:text-gray-300 transition-colors">
                      <span className="text-rose-600 dark:text-rose-400 mr-3 text-lg">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg transition-colors">
                  Especificaciones técnicas
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg transition-colors">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 transition-colors">Suspensión</p>
                    <p className="font-semibold text-gray-900 dark:text-white transition-colors">
                      {bike.specs.suspension}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg transition-colors">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 transition-colors">Cuadro</p>
                    <p className="font-semibold text-gray-900 dark:text-white transition-colors">
                      {bike.specs.frame}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg transition-colors">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 transition-colors">Velocidades</p>
                    <p className="font-semibold text-gray-900 dark:text-white transition-colors">
                      {bike.specs.gears}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg transition-colors">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 transition-colors">Frenos</p>
                    <p className="font-semibold text-gray-900 dark:text-white transition-colors">
                      {bike.specs.brakes}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg transition-colors">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 transition-colors">Ruedas</p>
                    <p className="font-semibold text-gray-900 dark:text-white transition-colors">
                      {bike.specs.wheels}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg transition-colors">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 transition-colors">Peso</p>
                    <p className="font-semibold text-gray-900 dark:text-white transition-colors">
                      {bike.specs.weight}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700 transition-colors">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center space-x-2 bg-rose-600 text-white px-8 py-4 rounded-lg hover:bg-rose-700 transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span>Consultar por WhatsApp</span>
                </button>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400 transition-colors">
                  Respuesta inmediata • Envío a toda España
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
