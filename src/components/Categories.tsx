import React from 'react';
import { Mountain, Trees, Zap, TrendingDown, Map, Wind, Building2 } from 'lucide-react';
import { categories } from '../data/bikes';

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Mountain,
  Trees,
  Zap,
  TrendingDown,
  Map,
  Wind,
  Building2
};

const Categories: React.FC<CategoriesProps> = ({ selectedCategory, onSelectCategory }) => {
  const activeClass = "bg-rose-600 text-white shadow-lg scale-105";
  const inactiveClass = "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:shadow-md hover:scale-102 border border-gray-200 dark:border-gray-700";

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Categorías
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors text-sm sm:text-base">
            Encuentra la bicicleta perfecta según tu estilo de ciclismo
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-3 sm:gap-4">
          {/* All Categories Button */}
          <button
            onClick={() => onSelectCategory('all')}
            className={`p-3 sm:p-6 rounded-xl transition-all duration-300 ${
              selectedCategory === 'all' ? activeClass : inactiveClass
            }`}
          >
            <div className="flex flex-col items-center space-y-2 sm:space-y-3">
              <div
                className={`p-3 sm:p-4 rounded-full transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-white/20'
                    : 'bg-rose-100 dark:bg-rose-900/30'
                }`}
              >
                <Mountain
                  className={`w-6 h-6 sm:w-8 sm:h-8 ${
                    selectedCategory === 'all' ? 'text-white' : 'text-rose-600 dark:text-rose-400'
                  }`}
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-sm sm:text-lg mb-0.5 sm:mb-1">Todas</h3>
                <p
                  className={`text-[10px] sm:text-sm ${
                    selectedCategory === 'all'
                      ? 'text-white/90'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Ver catálogo
                </p>
              </div>
            </div>
          </button>

          {/* Category Buttons */}
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon] || Mountain;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`p-3 sm:p-6 rounded-xl transition-all duration-300 ${
                  selectedCategory === category.id ? activeClass : inactiveClass
                }`}
              >
                <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                  <div
                    className={`p-3 sm:p-4 rounded-full transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-white/20'
                        : 'bg-rose-100 dark:bg-rose-900/30'
                    }`}
                  >
                    <IconComponent
                      className={`w-6 h-6 sm:w-8 sm:h-8 ${
                        selectedCategory === category.id
                          ? 'text-white'
                          : 'text-rose-600 dark:text-rose-400'
                      }`}
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-sm sm:text-lg mb-0.5 sm:mb-1">{category.name}</h3>
                    <p
                      className={`text-[10px] sm:text-sm ${
                        selectedCategory === category.id
                          ? 'text-white/90'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      Bicis {category.name}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
