import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data/bikes';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-5 h-5 mr-2" />
            <span className="font-semibold">Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            ¿Tienes dudas?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            Aquí respondemos las preguntas más comunes. Si no encuentras lo que buscas,
            contáctanos por WhatsApp.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-rose-300 dark:hover:border-rose-700 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white pr-8 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-rose-600 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-4 pt-2">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 max-w-2xl mx-auto transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
              ¿Aún tienes preguntas?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors">
              Nuestro equipo está disponible 24/7 para ayudarte por WhatsApp
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent(
                  '¡Hola! Tengo una pregunta sobre las bicicletas.'
                );
                window.open(
                  `https://wa.me/34637149629?text=${message}`,
                  '_blank'
                );
              }}
              className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              Contactar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
