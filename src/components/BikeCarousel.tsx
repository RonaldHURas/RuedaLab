import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { bikes } from '../data/bikes';
import { useNavigate } from 'react-router-dom';

const BikeCarousel: React.FC = () => {
    // Select a few premium bikes for the showcase
    const showcaseBikes = bikes.filter(b => [1, 2, 8, 13, 21, 42].includes(b.id)); 
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % showcaseBikes.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [showcaseBikes.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % showcaseBikes.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + showcaseBikes.length) % showcaseBikes.length);
    };

    const currentBike = showcaseBikes[currentIndex];

    // Calculate final price safely
    const finalPrice = Math.round(currentBike.originalPrice * (1 - currentBike.discount / 100));

    return (
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] lg:h-[500px]">
           
            {/* Image Layer */}
             <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
                <img 
                    src={currentBike.image} 
                    alt={currentBike.name}
                    className="w-full h-full object-cover object-center"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent sm:bg-gradient-to-r" />
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 flex items-end sm:items-center p-4 sm:p-8 md:p-16">
                <div className="max-w-xl space-y-2 md:space-y-4 animate-fade-in text-left pb-8 sm:pb-0">
                    <div className="inline-flex items-center space-x-2 bg-rose-600 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold">
                        <Tag className="w-3 h-3 md:w-4 md:h-4" />
                        <span>-{currentBike.discount}% Descuento</span>
                    </div>

                    <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                        {currentBike.name}
                    </h2>
                    
                    <p className="text-gray-100 text-xs sm:text-lg md:text-xl line-clamp-2 md:line-clamp-3 drop-shadow-md">
                        {currentBike.description}
                    </p>

                    <div className="flex items-end gap-2 md:gap-3 pt-1 md:pt-4">
                        <div className="text-xl sm:text-2xl md:text-4xl font-bold text-white drop-shadow-md">
                            {finalPrice.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                        </div>
                        <div className="text-sm sm:text-base md:text-xl text-gray-300 line-through mb-0.5 md:mb-1 drop-shadow-sm">
                            {currentBike.originalPrice.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                        </div>
                    </div>

                    <div className="pt-2 md:pt-6">
                         <button
                            onClick={() => navigate('/catalogo')}
                            className="bg-white text-rose-600 hover:bg-gray-100 px-5 py-2 md:px-8 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all transform hover:scale-105 shadow-lg"
                         >
                            Ver Detalles
                         </button>
                    </div>
                </div>
            </div>

             {/* Controls */}
            <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 p-1.5 sm:p-2 rounded-full backdrop-blur-sm text-white transition-all z-20"
            >
                <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" />
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 p-1.5 sm:p-2 rounded-full backdrop-blur-sm text-white transition-all z-20"
            >
                <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" />
            </button>

             {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-20">
                {showcaseBikes.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrentIndex(idx);
                        }}
                        className={`w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                            idx === currentIndex ? 'bg-rose-500 w-4 sm:w-8' : 'bg-white/50 hover:bg-white'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BikeCarousel;
