import React, { useState } from 'react';
import { MessageCircle, X, Bot } from 'lucide-react';
import { bikes, categories, WHATSAPP_NUMBER } from '../data/bikes';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatWidgetProps {
  onNavigate: (section: string) => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '¡Hola! Soy tu asistente virtual de RUEDALAB. ¿En qué puedo ayudarte hoy?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [step, setStep] = useState<'initial' | 'experience' | 'category' | 'budget' | 'recommendation'>('initial');
  const [userPreferences, setUserPreferences] = useState({
    experience: '',
    category: '',
    budget: 0
  });

  const addMessage = (text: string, isBot: boolean) => {
    const newMessage: Message = {
      id: messages.length + 1,
      text,
      isBot,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleQuickReply = (option: string) => {
    addMessage(option, false);

    setTimeout(() => {
      switch (step) {
        case 'initial':
          if (option === 'Busco una bicicleta') {
            addMessage('Perfecto! ¿Cuál es tu nivel de experiencia en ciclismo de montaña?', true);
            setStep('experience');
          } else if (option === 'Ver catálogo completo') {
            addMessage('Te llevo al catálogo completo. ¡Échale un vistazo!', true);
            setTimeout(() => onNavigate('products'), 500);
          } else if (option === 'Comparar bicicletas') {
            addMessage('Te llevo al comparador para que veas las diferencias entre modelos.', true);
            setTimeout(() => onNavigate('comparator'), 500);
          } else if (option === 'Hablar con un asesor') {
            addMessage(
              'Claro! Te contacto con un asesor por WhatsApp. ¿Te parece?',
              true
            );
            setTimeout(() => {
              const message = encodeURIComponent(
                '¡Hola! Necesito asesoría para comprar una bicicleta de montaña.'
              );
              window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
            }, 1000);
          }
          break;

        case 'experience':
          setUserPreferences((prev) => ({ ...prev, experience: option }));
          addMessage('Excelente! ¿Qué tipo de ciclismo te interesa más?', true);
          setStep('category');
          break;

        case 'category':
          setUserPreferences((prev) => ({ ...prev, category: option }));
          addMessage('¿Cuál es tu presupuesto aproximado?', true);
          setStep('budget');
          break;

        case 'budget':
          const budgetValue =
            option === 'Menos de 1.000 €'
              ? 1000
              : option === 'Entre 1.000 € y 2.000 €'
              ? 2000
              : option === 'Entre 2.000 € y 3.500 €'
              ? 3500
              : 5000;

          setUserPreferences((prev) => ({ ...prev, budget: budgetValue }));

          setTimeout(() => {
            recommendBike(userPreferences.experience, userPreferences.category, budgetValue);
          }, 500);
          break;
      }
    }, 600);
  };

  const recommendBike = (experience: string, category: string, budget: number) => {
    let categoryId = 'xc';

    if (category.includes('Cross Country')) categoryId = 'xc';
    else if (category.includes('Trail')) categoryId = 'trail';
    else if (category.includes('Enduro')) categoryId = 'enduro';
    else if (category.includes('Downhill')) categoryId = 'dh';

    const filteredBikes = bikes.filter((bike) => {
      const matchesCategory = bike.category === categoryId;
      const withinBudget = bike.originalPrice <= budget * 1.15; // 15% tolerance
      return matchesCategory && withinBudget && bike.inStock;
    });

    if (filteredBikes.length === 0) {
      addMessage(
        `No encontré bicicletas disponibles en tu rango de presupuesto para ${category}. Te recomiendo ajustar tu presupuesto o considerar otra categoría.`,
        true
      );
      setTimeout(() => {
        addMessage('¿Te gustaría ver todo el catálogo o hablar con un asesor?', true);
      }, 1000);
    } else {
      const recommended = filteredBikes.sort((a, b) => {
        if (experience === 'Principiante') return a.originalPrice - b.originalPrice;
        if (experience === 'Intermedio') return Math.abs((a.originalPrice + b.originalPrice) / 2 - budget) - Math.abs((a.originalPrice + b.originalPrice) / 2 - budget);
        return b.originalPrice - a.originalPrice;
      })[0];

      const formatPrice = (price: number) => {
        const discountedPrice = price - (price * 40) / 100; // Asumiendo 40% de descuento promedio
        return new Intl.NumberFormat('es-ES', {
          style: 'currency',
          currency: 'EUR',
          minimumFractionDigits: 2
        }).format(discountedPrice);
      };

      addMessage(
        `¡Encontré la bicicleta perfecta para ti! Te recomiendo la ${recommended.name} (${formatPrice(recommended.originalPrice)}). ${recommended.description}`,
        true
      );

      setTimeout(() => {
        addMessage(
          '¿Te gustaría ver más detalles, comparar con otras opciones, o contactar a un asesor?',
          true
        );
      }, 1500);
    }

    setStep('recommendation');
  };

  const getQuickReplies = () => {
    switch (step) {
      case 'initial':
        return [
          'Busco una bicicleta',
          'Ver catálogo completo',
          'Comparar bicicletas',
          'Hablar con un asesor'
        ];
      case 'experience':
        return ['Principiante', 'Intermedio', 'Avanzado'];
      case 'category':
        return categories.map((cat) => cat.name);
      case 'budget':
        return [
          'Menos de 1.000 €',
          'Entre 1.000 € y 2.000 €',
          'Entre 2.000 € y 3.500 €',
          'Más de 3.500 €'
        ];
      case 'recommendation':
        return [
          'Ver catálogo',
          'Ir al comparador',
          'Contactar asesor',
          'Empezar de nuevo'
        ];
      default:
        return [];
    }
  };

  const handleRecommendationAction = (option: string) => {
    addMessage(option, false);

    setTimeout(() => {
      if (option === 'Ver catálogo') {
        addMessage('Te llevo al catálogo completo. ¡Échale un vistazo!', true);
        setTimeout(() => onNavigate('products'), 500);
      } else if (option === 'Ir al comparador') {
        addMessage('Te llevo al comparador para que compares diferentes modelos.', true);
        setTimeout(() => onNavigate('comparator'), 500);
      } else if (option === 'Contactar asesor') {
        addMessage('Te contacto con un asesor por WhatsApp.', true);
        setTimeout(() => {
          const message = encodeURIComponent(
            '¡Hola! El bot me recomendó una bicicleta y me gustaría más información.'
          );
          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
        }, 1000);
      } else if (option === 'Empezar de nuevo') {
        setMessages([
          {
            id: 1,
            text: '¡Perfecto! Empecemos de nuevo. ¿En qué puedo ayudarte?',
            isBot: true,
            timestamp: new Date()
          }
        ]);
        setStep('initial');
        setUserPreferences({ experience: '', category: '', budget: 0 });
      }
    }, 600);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 hover:scale-110 animate-float"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
            1
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 flex flex-col animate-scale-in transition-colors">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Asistente MTB Store</h3>
                <p className="text-xs text-white/80">Siempre en línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96 bg-gray-50 dark:bg-gray-950 transition-colors">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg transition-colors ${
                    message.isBot
                      ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm'
                      : 'bg-gradient-to-r from-green-600 to-green-700 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-b-2xl transition-colors">
            <div className="grid grid-cols-1 gap-2">
              {getQuickReplies().map((option, index) => (
                <button
                  key={index}
                  onClick={() =>
                    step === 'recommendation'
                      ? handleRecommendationAction(option)
                      : handleQuickReply(option)
                  }
                  className="text-left px-4 py-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-900/30 hover:text-green-700 dark:hover:text-green-400 rounded-lg transition-colors text-sm font-medium"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
