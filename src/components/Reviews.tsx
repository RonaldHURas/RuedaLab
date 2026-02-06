import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/bikes';

const Reviews: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="reviews" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-gray-100 dark:border-gray-700"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-32 h-32 text-gray-900 dark:text-gray-100" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 relative z-10 transition-colors">
                "{testimonial.comment}"
              </p>

              {/* Bike Tag */}
              <div className="inline-block bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 px-3 py-1 rounded-full text-xs font-medium mb-4 transition-colors">
                {testimonial.bike}
              </div>

              {/* Author & Date */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700 transition-colors">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
                    {formatDate(testimonial.date)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 px-6 py-3 rounded-full transition-colors">
            <Star className="w-5 h-5 fill-rose-700 dark:fill-rose-300" />
            <span className="font-semibold">
              4.9/5 basado en más de 100 reseñas verificadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
