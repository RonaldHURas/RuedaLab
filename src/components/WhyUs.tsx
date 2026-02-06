import React from 'react';
import { Shield, Truck, Award, Headphones, CreditCard, Users } from 'lucide-react';

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Garantía Extendida',
      description: 'Todas nuestras bicicletas incluyen garantía del fabricante de 2 a 5 años en cuadro y componentes.'
    },
    {
      icon: Truck,
      title: 'Envío a Toda España',
      description: 'Despachamos a cualquier región del país con embalaje especializado y seguro de transporte incluido.'
    },
    {
      icon: Award,
      title: 'Productos Certificados',
      description: 'Trabajamos solo con marcas reconocidas mundialmente que garantizan calidad y rendimiento.'
    },
    {
      icon: Headphones,
      title: 'Asesoría Personalizada',
      description: 'Nuestro equipo de expertos te ayuda a elegir la bicicleta perfecta según tu nivel y necesidades.'
    },
    {
      icon: CreditCard,
      title: 'Pago en Cuotas',
      description: 'Acepta tarjetas de crédito hasta en 12 cuotas sin interés. También transferencias y WebPay.'
    },
    {
      icon: Users,
      title: 'Comunidad MTB',
      description: 'Únete a nuestra comunidad de ciclistas. Organizamos salidas, eventos y talleres de mantención.'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            Somos más que una tienda, somos tu compañero en cada aventura sobre dos ruedas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <IconComponent className="w-7 h-7 text-gray-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">500+</p>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">Clientes satisfechos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">12+</p>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">Modelos disponibles</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">5★</p>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">Calificación promedio</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">24/7</p>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">Atención por WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
