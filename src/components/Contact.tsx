import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/bikes';

const Contact: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      '¡Hola! Me gustaría obtener más información sobre las bicicletas.'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      details: ['Avenida del deporte', 'Av. Grupo María Blanchard, 3', 'Bloque 10 oeste, 39012 Santander', 'Cantabria, España'],
      action: null
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['+34 637 14 96 29'],
      action: () => window.open('tel:+34637149629')
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contacto@mtbstore.es'],
      action: () => window.open('mailto:contacto@mtbstore.es')
    },
    {
      icon: Clock,
      title: 'Horario',
      details: ['Lun - Vie: 09:00 - 20:00', 'Sáb: 10:00 - 17:00', 'Domingos: Cerrado'],
      action: null
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Contáctanos
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            Estamos aquí para ayudarte. Visítanos, llámanos o escríbenos por WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ${
                    info.action ? 'cursor-pointer' : ''
                  }`}
                  onClick={info.action || undefined}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg flex-shrink-0 transition-colors">
                      <IconComponent className="w-6 h-6 text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 dark:text-gray-400 transition-colors">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Card */}
          <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 text-white shadow-xl transition-colors">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <MessageCircle className="w-12 h-12" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-4">
              ¿Listo para tu próxima aventura?
            </h3>

            <p className="text-white/90 text-center mb-6 leading-relaxed">
              Contáctanos por WhatsApp y recibe asesoría personalizada de inmediato.
              Estamos disponibles 24/7 para ayudarte a encontrar la bicicleta perfecta.
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-white text-gray-900 px-6 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chatear por WhatsApp</span>
            </button>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-white/80 text-center">
                Respuesta promedio en menos de 5 minutos
              </p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 max-w-6xl mx-auto">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Avenida+del+deporte+Santander+Cantabria+Spain"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[21/9] bg-gray-100 flex items-center justify-center relative transition-colors duration-300">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-900 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-700 font-semibold text-lg">
                    Mapa de ubicación
                  </p>
                  <p className="text-gray-600 text-sm">
                    Santander, Cantabria - España
                  </p>
                  <span className="inline-block mt-4 text-gray-900 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Abrir en Google Maps &rarr;
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
