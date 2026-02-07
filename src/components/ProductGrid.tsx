import React from 'react';
import { bikes, Bike } from '../data/bikes';
import ProductCard from './ProductCard';

interface ProductGridProps {
  selectedCategory: string;
  onAddToCompare: (bike: Bike) => void;
  comparatorBikes: Bike[];
}

const ProductGrid: React.FC<ProductGridProps> = ({
  selectedCategory,
  onAddToCompare,
  comparatorBikes
}) => {
  const filteredBikes =
    selectedCategory === 'all'
      ? bikes
      : bikes.filter((bike) => bike.category === selectedCategory);

  const isInComparator = (bikeId: number) => {
    return comparatorBikes.some((bike) => bike.id === bikeId);
  };

  return (
    <section id="products" className="py-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Nuestro Catálogo
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            {selectedCategory === 'all'
              ? `${filteredBikes.length} bicicletas disponibles en todas las categorías`
              : `${filteredBikes.length} bicicletas en la categoría ${selectedCategory.toUpperCase()}`}
          </p>
        </div>

        {filteredBikes.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors">
              No se encontraron bicicletas en esta categoría
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBikes.map((bike) => (
              <ProductCard
                key={bike.id}
                bike={bike}
                onAddToCompare={onAddToCompare}
                isInComparator={isInComparator(bike.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
