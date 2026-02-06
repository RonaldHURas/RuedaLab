import React, { useState } from 'react';
import Categories from '../components/Categories';
import ProductGrid from '../components/ProductGrid';
import Comparator from '../components/Comparator';
import { Bike } from '../data/bikes';
import { useLocation } from 'react-router-dom';

const CatalogPage: React.FC = () => {
  const location = useLocation();
  const initialCategory = location.state?.category || 'all';
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [comparatorBikes, setComparatorBikes] = useState<Bike[]>([]);

  const handleAddToCompare = (bike: Bike) => {
    if (comparatorBikes.length >= 3) {
      alert('Solo puedes comparar hasta 3 bicicletas. Elimina una para añadir otra.');
      return;
    }
    if (!comparatorBikes.find(b => b.id === bike.id)) {
      setComparatorBikes([...comparatorBikes, bike]);
      // Optional: scroll to comparator
      const element = document.getElementById('comparator');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setComparatorBikes(comparatorBikes.filter(b => b.id !== bike.id));
    }
  };

  const handleRemoveFromCompare = (bikeId: number) => {
    setComparatorBikes(comparatorBikes.filter(b => b.id !== bikeId));
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors">Catálogo Completo</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 transition-colors">
          Explora nuestra colección completa de bicicletas de montaña. Utiliza los filtros para encontrar tu compañera ideal de aventuras.
        </p>
      </div>

      <Categories
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ProductGrid
        selectedCategory={selectedCategory}
        onAddToCompare={handleAddToCompare}
        comparatorBikes={comparatorBikes}
      />

      <Comparator
        bikes={comparatorBikes}
        onRemoveBike={handleRemoveFromCompare}
      />
    </div>
  );
};

export default CatalogPage;
