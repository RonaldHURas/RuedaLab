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
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white aspect-[16/9] md:aspect-[21/9] lg:h-[500px]">
           
            {/* Image Layer */}
             <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
                <img 
                    src={currentBike.image} 
                    alt={currentBike.name}
                    className="w-full h-full object-cover object-center"
                />
                 <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 flex items-center p-8 md:p-16">
                <div className="max-w-xl space-y-4 animate-fade-in">
                    <div className="inline-flex items-center space-x-2 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        <Tag className="w-4 h-4" />
                        <span>-{currentBike.discount}% Descuento</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        {currentBike.name}
                    </h2>
                    
                    <p className="text-gray-200 text-lg md:text-xl line-clamp-2 md:line-clamp-3">
                        {currentBike.description}
                    </p>

                    <div className="flex items-end gap-3 pt-4">
                        <div className="text-4xl font-bold text-white">
                            {finalPrice.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                        </div>
                        <div className="text-xl text-gray-400 line-through mb-1">
                            {currentBike.originalPrice.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                        </div>
                    </div>

                    <div className="pt-6">
                         <button
                            onClick={() => navigate('/catalogo')}
                            className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
                         >
                            Ver Detalles
                         </button>
                    </div>
                </div>
            </div>

             {/* Controls */}
            <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm text-white transition-all"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm text-white transition-all"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

             {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {showcaseBikes.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            idx === currentIndex ? 'bg-rose-500 w-8' : 'bg-white/50 hover:bg-white'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BikeCarousel;
