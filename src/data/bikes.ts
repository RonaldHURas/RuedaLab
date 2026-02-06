export interface Bike {
  id: number;
  name: string;
  originalPrice: number;
  discount: number;
  category: string;
  image: string;
  description: string;
  specs: {
    suspension?: string;
    frame: string;
    gears: string;
    brakes?: string;
    wheels: string;
    weight?: string;
  };
  features: string[];
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  bike: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const WHATSAPP_NUMBER = "34637149629";

export const categories: Category[] = [
  {
    id: "xc",
    name: "Cross Country (XC)",
    description: "Ligeras y eficientes para competición y pistas",
    icon: "Mountain"
  },
  {
    id: "trail",
    name: "Trail",
    description: "Versatilidad total para subidas y bajadas técnicas",
    icon: "Trees"
  },
  {
    id: "enduro",
    name: "Enduro",
    description: "Geometría agresiva para descensos exigentes",
    icon: "Zap"
  },
  {
    id: "dh",
    name: "Downhill (DH)",
    description: "Máximo recorrido para descensos extremos",
    icon: "TrendingDown"
  },
  {
    id: "gravel",
    name: "Gravel",
    description: "Aventura sin límites en asfalto y tierra",
    icon: "Map"
  },
  {
    id: "road",
    name: "Carretera",
    description: "Velocidad y rendimiento sobre asfalto",
    icon: "Wind"
  },
  {
    id: "urban",
    name: "Urbana",
    description: "Movilidad eficiente para la ciudad",
    icon: "Building2"
  }
];

// ==================================================================================
// ⚠️ IMPORTANTE LEER / IMPORTANT READ ⚠️
// ==================================================================================
//
// 1. Las bicicletas "reales" que puedes editar están en la lista 'baseBikes' abajo.
//    (Son las primeras 40-50 bicicletas).
//
// 2. Las otras ~280 bicicletas NO existen en este archivo pre-escritas.
//    Se generan automáticamente al final del archivo (función 'generateMoreBikes')
//    usando las reales como plantilla para rellenar la tienda.
//
// 3. SI QUIERES AÑADIR UNA BICI NUEVA O EDITAR UNA EXISTENTE:
//    -> Tienes que añadirla o modificarla en la lista 'baseBikes'.
//    -> No intentes buscar la "bici #150" porque se genera al vuelo.
//    -> Si añades una bici nueva aquí, aparecerá en la tienda.
//
// ==================================================================================

const baseBikes: Bike[] = [
  // --- PLANTILLA PARA AÑADIR NUEVA BICI (Copia y pega esto) ---
  /*
  {
    id: 999,
    name: "Nombre de la Bici",
    originalPrice: 1999,
    discount: 20,
    category: "xc", // xc, trail, enduro, dh, gravel, road, urban
    image: "https://url-de-tu-imagen.jpg",
    description: "Descripción corta...",
    specs: {
      suspension: "Horquilla...",
      frame: "Cuadro...",
      gears: "Cambios...",
      brakes: "Frenos...",
      wheels: "29",
      weight: "12kg"
    },
    features: ["Feature 1", "Feature 2"],
    inStock: true
  },
  */

  // --- XC ---
  {
    id: 1,
    name: "Cannondale Scalpel Carbon 3 Mammoth Edition",
    originalPrice: 4999,
    discount: 40,
    category: "xc",
    image: "https://cdn.mammothbikes.com/product/Large/585946_28052025124032.jpg",
    description: "La bicicleta de XC definitiva. Suspensión revolucionaria, geometría agresiva y peso pluma para volar en las subidas y destruir las bajadas.",
    specs: {
      suspension: "Lefty Ocho 100mm",
      frame: "Carbono BallisTec",
      gears: "Shimano XT 1x12",
      brakes: "Shimano Deore hidr.",
      wheels: "29 pulgadas",
      weight: "10.8 kg"
    },
    features: ["Lefty Ocho", "Cuadro Carbono", "Conectividad App", "FlexPivot"],
    inStock: true
  },
  {
    id: 2,
    name: "Specialized S-Works Epic World Cup",
    originalPrice: 8248.75,
    discount: 40,
    category: "xc",
    image: "https://cdn.mammothbikes.com/product/Large/559247_06072023104828.jpg",
    description: "Diseñada para ganar Copas del Mundo. La Epic redefine la velocidad en cross country con una eficiencia inigualable.",
    specs: {
      suspension: "RockShox SID SL Ultimate",
      frame: "S-Works FACT 12m Carbon",
      gears: "SRAM XX SL Eagle",
      brakes: "SRAM Level Ultimate",
      wheels: "29 pulgadas",
      weight: "9.3 kg"
    },
    features: ["Brain Technology", "Transmisión Wireless", "Ruedas Roval Control SL", "Cockpit integrado"],
    inStock: true
  },
  {
    id: 3,
    name: "Scott Scale 940",
    originalPrice: 1830,
    discount: 60,
    category: "xc",
    image: "https://cdn.mammothbikes.com/product/Large/557823_19092023140709.jpg",
    description: "Geometría inspirada en la competición al más alto nivel. Una rígida de carbono que ofrece velocidad y control.",
    specs: {
      suspension: "RockShox Judy Silver 100mm",
      frame: "Scale 3 Carbon",
      gears: "SRAM NX Eagle 1x12",
      brakes: "Shimano MT200",
      wheels: "29 pulgadas",
      weight: "12.4 kg"
    },
    features: ["Bloqueo remoto RideLoc", "Cuadro carbono ligero", "Componentes Syncros", "Cableado interno"],
    inStock: true
  },
  {
    id: 4,
    name: "Orbea MX 20 XC",
    originalPrice: 449,
    discount: 40,
    category: "xc",
    image: "https://cdn.mammothbikes.com/product/Large/573434_1505202495741.jpg",
    description: "La puerta de entrada perfecta al mundo del MTB. Fiable, divertida y capaz.",
    specs: {
      suspension: "SR Suntour XCR 100mm",
      frame: "Orbea MX Alu",
      gears: "Shimano Deore 1x11",
      brakes: "Shimano MT200 hidr.",
      wheels: "29 pulgadas",
      weight: "13.9 kg"
    },
    features: ["Garantía de por vida (cuadro)", "Puntos de anclaje portabultos", "Geometría cómoda", "Cubiertas anchas"],
    inStock: true
  },
  {
    id: 5,
    name: "Specialized Chisel Comp",
    originalPrice: 3600,
    discount: 40,
    category: "xc",
    image: "https://cdn.mammothbikes.com/product/Large/583602_01042025165112.jpg",
    description: "El cuadro de aluminio más ligero y capaz del mercado. Tecnología D'Aluisio Smartweld.",
    specs: {
      suspension: "RockShox Judy Gold",
      frame: "Specialized D'Aluisio Smartweld M5",
      gears: "SRAM NX Eagle 12v",
      brakes: "SRAM Level T",
      wheels: "29 pulgadas",
      weight: "11.2 kg"
    },
    features: ["Smartweld Technology", "Geometría XC progresiva", "Tija telescópica compatible", "Paso de rueda ancho"],
    inStock: true
  },
  {
    id: 6,
    name: "Specialized Rockhopper Expert",
    originalPrice: 1299,
    discount: 60,
    category: "xc",
    image: "https://cdn.mammothbikes.com/product/Large/597271_07012026100845.jpg",
    description: "Rendimiento y valor inigualables. Horquilla de aire y frenos potentes para mejorar tu técnica.",
    specs: {
      suspension: "RockShox Judy Air",
      frame: "A1 Premium Butted Alloy",
      gears: "SRAM SX Eagle 1x12",
      brakes: "SRAM Level hidr.",
      wheels: "29 pulgadas",
      weight: "12.8 kg"
    },
    features: ["Horquilla aire Solo Air", "Transmisión 1x12", "Frenos hidráulicos", "Llantas tubeless ready"],
    inStock: true
  },
  {
    id: 7,
    name: "Orbea Onna 29 20",
    originalPrice: 899,
    discount: 60,
    category: "xc",
    image: "https://cdn.mammothbikes.com/product/Large/cp_13_845952_10092025_1.jpg",
    description: "Diseñada para ciclistas que quieren conquistar la montaña con seguridad y control.",
    specs: {
      suspension: "SR Suntour XCR Air 100mm",
      frame: "Orbea Onna Alloy",
      gears: "Shimano Deore 1x10",
      brakes: "Shimano MT200",
      wheels: "29 pulgadas",
      weight: "13.2 kg"
    },
    features: ["Guiado interno cables", "Compatible tija telescópica", "Roscar para portabultos", "Frenos disco"],
    inStock: true
  },
  {
    id: 8,
    name: "Cannondale Scalpel Carbon 2 Lefty",
    originalPrice: 6499,
    discount: 40,
    category: "xc",
    image: "https://cdn.mammothbikes.com/product/Large/567695_08042024122828.jpg",
    description: "La leyenda continúa. Equipada con la inconfundible horquilla Lefty Ocho para una precisión quirúrgica.",
    specs: {
      suspension: "Lefty Ocho 100mm",
      frame: "Carbono BallisTec",
      gears: "Shimano XT/XTR 12v",
      brakes: "Shimano XT",
      wheels: "29 pulgadas hollowgram",
      weight: "10.4 kg"
    },
    features: ["Sensor rueda Cannondale", "Horquilla Lefty", "FlexPivot", "Kit Stash integrado"],
    inStock: true
  },
  {
    id: 9,
    name: "Scott Spark RC Team",
    originalPrice: 4699,
    discount: 40,
    category: "xc",
    image: "https://cdn.mammothbikes.com/product/Large/578833_28012025133529.jpg",
    description: "Amortiguador integrado, geometría ajustable y construcción de carbono ligera. Una bici del futuro.",
    specs: {
      suspension: "FOX 34 SC Float 120mm",
      frame: "Spark RC Carbon HMF",
      gears: "Shimano XT 12v",
      brakes: "Shimano XT",
      wheels: "29 pulgadas Syncros",
      weight: "11.5 kg"
    },
    features: ["Amortiguador oculto", "TwinLoc 2", "Angulo dirección ajustable", "Acceso fácil amortiguador"],
    inStock: true
  },
  {
    id: 10,
    name: "Specialized Epic 8 Comp",
    originalPrice: 5200,
    discount: 40,
    category: "xc",
    image: "https://cdn.mammothbikes.com/product/Large/570835_1303202481756.jpg",
    description: "La evolución de la Epic. Más capaz, más eficiente y más ligera que nunca.",
    specs: {
      suspension: "RockShox SID Select 120mm",
      frame: "FACT 11m Carbon",
      gears: "SRAM GX Eagle Transmission",
      brakes: "SRAM Level Bronze",
      wheels: "29 pulgadas Roval",
      weight: "10.9 kg"
    },
    features: ["SWAT 4.0", "Geometría progresiva", "Transmisión T-Type", "Suspension Flight Attendant Ready"],
    inStock: true
  },

  // --- TRAIL y ENDURO ---
  {
    id: 11,
    name: "Cannondale Habit HT 1",
    originalPrice: 1699,
    discount: 60,
    category: "trail",
    image: "https://cdn.mammothbikes.com/product/Large/595319_11122025121554.jpg",
    description: "Una rígida para puristas del trail. Simple, robusta y extremadamente divertida.",
    specs: {
      suspension: "RockShox 35 Silver 130mm",
      frame: "SmartForm C2 Alloy",
      gears: "Shimano Deore 12v",
      brakes: "Shimano MT420 4-piston",
      wheels: "29 pulgadas",
      weight: "13.8 kg"
    },
    features: ["Geometría relajada", "Tija telescópica", "Frenos 4 pistones", "Cubiertas Trail"],
    inStock: true
  },
  {
    id: 12,
    name: "Specialized Stumpjumper 15 Comp",
    originalPrice: 6500,
    discount: 40,
    category: "trail",
    image: "https://cdn.mammothbikes.com/product/Large/576142_1609202475314.jpg",
    description: "La bici de trail por excelencia. Suspensión ajustable y manejo intuitivo en cualquier sendero.",
    specs: {
      suspension: "FOX FLOAT 34 Rhythm 140mm",
      frame: "FACT 11m Carbon",
      gears: "SRAM GX Eagle",
      brakes: "SRAM G2 RS",
      wheels: "29 pulgadas",
      weight: "13.5 kg"
    },
    features: ["SWAT Door", "Geometría ajustable", "Rider-First Engineered", "Silencioso de cadena"],
    inStock: true
  },
  {
    id: 13,
    name: "Specialized Enduro Pro",
    originalPrice: 9500,
    discount: 40,
    category: "enduro",
    image: "https://cdn.mammothbikes.com/product/Large/589356_1507202594822.jpg",
    description: "Una bestia de largo recorrido que sube con eficacia pero baja como una bici de DH.",
    specs: {
      suspension: "RockShox ZEB Ultimate 170mm",
      frame: "FACT 11m Carbon",
      gears: "SRAM X01 Eagle AXS",
      brakes: "SRAM Code RSC",
      wheels: "29 pulgadas Roval Traverse",
      weight: "14.8 kg"
    },
    features: ["Estilo DH", "Anclajes SWAT", "Transmisión electrónica", "Suspension 170mm"],
    inStock: true
  },
  {
    id: 14,
    name: "Orbea Rallon M20",
    originalPrice: 6499,
    discount: 60,
    category: "enduro",
    image: "https://cdn.mammothbikes.com/product/Large/563662_01082024162122.jpg",
    description: "Enfocada a la velocidad. Una bici de enduro pura sangre para competir o disfrutar en el bikepark.",
    specs: {
      suspension: "Fox 38 Float Performance 170mm",
      frame: "Orbea Monocoque Race Carbon",
      gears: "Shimano SLX 12v",
      brakes: "Shimano M6120",
      wheels: "29 pulgadas",
      weight: "15.1 kg"
    },
    features: ["Compartimento LOCKR", "Geometría Pure Enduro", "Garantía de por vida", "Mullet compatible"],
    inStock: true
  },
  {
    id: 15,
    name: "Trek Slash 8",
    originalPrice: 3799,
    discount: 40,
    category: "enduro",
    image: "https://cdn.mammothbikes.com/product/Large/595319_11122025121554.jpg",
    description: "Una enduro de aluminio indestructible. Gran recorrido, ruedas grandes y actitud agresiva.",
    specs: {
      suspension: "RockShox ZEB Select 170mm",
      frame: "Alpha Platinum Aluminum",
      gears: "SRAM GX Eagle",
      brakes: "SRAM Code R",
      wheels: "29 pulgadas",
      weight: "15.5 kg"
    },
    features: ["Almacenamiento interno", "Mino Link", "Knock Block", "Protector tubo inferior"],
    inStock: true
  },

  // --- GRAVEL ---
  {
    id: 16,
    name: "MMR X-Grip 10 Mammoth Edition",
    originalPrice: 1799,
    discount: 40,
    category: "gravel",
    image: "https://cdn.mammothbikes.com/product/Large/79655_30012026111406.jpg",
    description: "Versatilidad sin límites. Una gravel de aluminio ligera y resistente para descubrir nuevos caminos, edición especial.",
    specs: {
      suspension: "Rígida Carbono",
      frame: "Aluminio 6061 Hidroformado",
      gears: "Shimano GRX 400 2x10",
      brakes: "Shimano GRX hidr.",
      wheels: "700c",
      weight: "10.5 kg"
    },
    features: ["Horquilla carbono", "Grupo específico Gravel", "Paso de rueda amplio", "Anclajes bikepacking"],
    inStock: true
  },
  {
    id: 17,
    name: "Cannondale Topstone Carbon 4",
    originalPrice: 2799,
    discount: 60,
    category: "gravel",
    image: "https://cdn.mammothbikes.com/product/Large/512575_03012023132128.jpg",
    description: "La gravel más capaz y cómoda. Con suspensión Kingpin revolucionaria para mayor confort y tracción.",
    specs: {
      suspension: "Sistema Kingpin",
      frame: "Carbono BallisTec",
      gears: "Shimano GRX 400 2x10",
      brakes: "Shimano GRX 400",
      wheels: "700c WTB",
      weight: "9.8 kg"
    },
    features: ["Suspensión Kingpin", "Compatible SmartSense", "Geometría OutFront", "Preparada para tija telescópica"],
    inStock: true
  },
  {
    id: 18,
    name: "Merida Silex 4000",
    originalPrice: 2199,
    discount: 40,
    category: "gravel",
    image: "https://cdn.mammothbikes.com/product/Large/cp_1_847373_15092025_1.jpg",
    description: "Inspirada en el MTB, perfecta para la aventura. Posición erguida y estable para largas jornadas.",
    specs: {
      suspension: "Rígida Carbono",
      frame: "Silex CF2 Carbon",
      gears: "Shimano GRX 400 2x10",
      brakes: "Shimano GRX 400",
      wheels: "700c Merida Comp",
      weight: "9.5 kg"
    },
    features: ["Geometría confort", "Cuadro y horquilla carbono", "Multiples anclajes", "Tecnología Disc Cooler"],
    inStock: true
  },
  {
    id: 19,
    name: "Orbea Terra Race M31",
    originalPrice: 5499,
    discount: 40,
    category: "gravel",
    image: "https://cdn.mammothbikes.com/product/Large/cp_13_845994_22092025_1.jpg",
    description: "Diseñada por y para el gravel. Rápida en asfalto, capaz en tierra y cómoda siempre.",
    specs: {
      suspension: "Rígida Carbono",
      frame: "Orbea Terra Carbon OMR",
      gears: "SRAM Rival XPLR AXS",
      brakes: "SRAM Rival",
      wheels: "700c Fulcrum",
      weight: "8.9 kg"
    },
    features: ["Compartimento LOCKR", "Geometría Gravel", "Transmisión electrónica", "Paso rueda 45c"],
    inStock: true
  },
  {
    id: 20,
    name: "Cannondale Topstone Carbon Apex 1",
    originalPrice: 3199,
    discount: 60,
    category: "gravel",
    image: "https://cdn.mammothbikes.com/product/Large/554890_27052024123510.jpg",
    description: "Simplicidad y rendimiento 1x12. Lista para cualquier aventura off-road que imagines.",
    specs: {
      suspension: "Sistema Kingpin",
      frame: "Carbono BallisTec",
      gears: "SRAM Apex XPLR 12v",
      brakes: "SRAM Apex",
      wheels: "700c DT Swiss",
      weight: "9.2 kg"
    },
    features: ["Grupo SRAM Apex 12v", "Suspensión Kingpin", "Ruedas Tubeless", "Compatible SmartSense"],
    inStock: true
  },

  // --- CARRETERA ---
  {
    id: 21,
    name: "Specialized Tarmac SL7 Comp",
    originalPrice: 4800,
    discount: 40,
    category: "road",
    image: "https://cdn.mammothbikes.com/product/Large/561060_1807202395243.jpg",
    description: "Una bicicleta para gobernarlas a todas. Aerodinámica, ligereza y calidad de conducción en equilibrio perfecto.",
    specs: {
      suspension: "Rígida",
      frame: "Tarmac SL7 FACT 10r Carbon",
      gears: "Shimano 105 Di2 12v",
      brakes: "Shimano 105 hidr.",
      wheels: "700c DT Swiss R470",
      weight: "7.9 kg"
    },
    features: ["Aero y Ligera", "Cambio electrónico", "Cableado integrado", "Geometría Rider-First"],
    inStock: true
  },
  {
    id: 22,
    name: "Scott Addict RC 40",
    originalPrice: 5409,
    discount: 40,
    category: "road",
    image: "https://cdn.mammothbikes.com/product/Large/509878.jpg",
    description: "Ligera, rápida y lista para competir. La Addict RC establece el estándar en bicicletas de carretera de competición.",
    specs: {
      suspension: "Rígida",
      frame: "Addict RC Disc HMX",
      gears: "Shimano 105 Di2 12v",
      brakes: "Shimano 105 hidr.",
      wheels: "700c Syncros",
      weight: "7.8 kg"
    },
    features: ["Carbono HMX", "Integración total", "Ejes pasantes ocultos", "Tija carbono"],
    inStock: true
  },
  {
    id: 23,
    name: "Merida Scultura 5000",
    originalPrice: 2899,
    discount: 60,
    category: "road",
    image: "https://cdn.mammothbikes.com/product/Large/cp_1_847383_15092025_1.jpg",
    description: "Comodidad clásica con rendimiento moderno. Perfecta para largas horas en el sillín.",
    specs: {
      suspension: "Rígida",
      frame: "Scultura CF3 V",
      gears: "Shimano Ultegra/105 11v",
      brakes: "Shimano 105 hidr.",
      wheels: "700c Merida Expert",
      weight: "8.2 kg"
    },
    features: ["Tecnología NACA Fastback", "Tija flex S-Flex", "Refrigeración frenos", "Gran confort"],
    inStock: true
  },
  {
    id: 24,
    name: "Liv Langma Advanced 0",
    originalPrice: 3999,
    discount: 40,
    category: "road",
    image: "https://cdn.mammothbikes.com/product/Large/596824_15012026123256.jpg",
    description: "Diseñada específicamente para mujeres. Eficiente, ágil y preparada para coronar cualquier puerto.",
    specs: {
      suspension: "Rígida",
      frame: "Advanced-Grade Composite",
      gears: "Shimano Ultegra Di2 12v",
      brakes: "Shimano Ultegra",
      wheels: "700c Giant P-R2",
      weight: "7.7 kg"
    },
    features: ["Geometría mujer", "Tubos aerodinámicos", "PowerCore", "OverDrive"],
    inStock: true
  },
  {
    id: 25,
    name: "Specialized Tarmac SL8 Pro",
    originalPrice: 9000,
    discount: 40,
    category: "road",
    image: "https://cdn.mammothbikes.com/product/Large/576155_20112024111940.jpg",
    description: "Lo último en tecnología de bicicletas. La bici más rápida del mundo, ahora aún mejor.",
    specs: {
      suspension: "Rígida",
      frame: "Tarmac SL8 FACT 10r Carbon",
      gears: "Shimano Ultegra Di2 12v",
      brakes: "Shimano Ultegra",
      wheels: "700c Roval Rapide CL II",
      weight: "7.2 kg"
    },
    features: ["Speed Sniffer", "Peso mínimo UCI", "Manillar Roval Rapide", "Aerodinámica extrema"],
    inStock: true
  },

  // --- URBANA ---
  {
    id: 26,
    name: "Specialized Sirrus X 4.0",
    originalPrice: 1750,
    discount: 60,
    category: "urban",
    image: "https://cdn.mammothbikes.com/product/Large/595319_11122025121554.jpg",
    description: "Tu compañera perfecta para la ciudad y más allá. Cómoda, capaz y confiable.",
    specs: {
      suspension: "Future Shock 1.5",
      frame: "A1 SL Premium Aluminum",
      gears: "SRAM NX 1x11",
      brakes: "Tektro HD-R510",
      wheels: "700c",
      weight: "10.9 kg"
    },
    features: ["Future Shock", "Posición Fitness", "Neumáticos anchos", "Anclajes guardabarros"],
    inStock: true
  },
  {
    id: 27,
    name: "Orbea Carpe 10",
    originalPrice: 1099,
    discount: 40,
    category: "urban",
    image: "https://cdn.mammothbikes.com/product/Large/589356_1507202594822.jpg",
    description: "Estilo y funcionalidad. Una bici urbana elegante con componentes de bajo mantenimiento.",
    specs: {
      suspension: "Rígida",
      frame: "Orbea Urban Speed",
      gears: "Shimano Deore 10v",
      brakes: "Shimano MT200",
      wheels: "700c",
      weight: "11.2 kg"
    },
    features: ["Dinamo integrada", "Luces incluidas", "Guardabarros serie", "Diseño minimalista"],
    inStock: true
  },
  {
    id: 28,
    name: "Specialized Sirrus X 2.0",
    originalPrice: 749,
    discount: 40,
    category: "urban",
    image: "https://cdn.mammothbikes.com/product/Large/cp_1_481756_28022025.jpg",
    description: "Sencillez y eficiencia. Frenos de disco y transmisión monopto para moverte sin complicaciones.",
    specs: {
      suspension: "Rígida Acero",
      frame: "A1 Premium Aluminum",
      gears: "MicroSHIFT Advent 8v",
      brakes: "Promax R878",
      wheels: "700c",
      weight: "11.5 kg"
    },
    features: ["Cuadro ligero", "Cableado interno", "Puntos de contacto ergonómicos", "Reflectantes"],
    inStock: true
  },

  // --- Generate more variations for listing filler ---
  {
    id: 29,
    name: "Giant Talon 1",
    originalPrice: 899,
    discount: 40,
    category: "xc",
    image: "https://cdn.mammothbikes.com/product/Large/585116_22042025145933.jpg",
    description: "Siente el camino con esta rígida de aluminio hecha para aspirantes a ciclistas de singletrack.",
    specs: { suspension: "SXC32-2 RL 100mm", frame: "ALUXX-Grade Aluminum", gears: "Shimano Deore", wheels: "29", weight: "13.2kg" },
    features: ["Geometría equilibrada", "Suspension aire", "Frenos disco"],
    inStock: true
  },
  {
    id: 30,
    name: "Trek Marlin 4 Gen 3",
    originalPrice: 579,
    discount: 60,
    category: "xc",
    image: "https://cdn.mammothbikes.com/product/Large/592730_1510202592326.jpg",
    description: "Una bicicleta digna de competición que no te arruinará.",
    specs: { suspension: "RockShox Judy Silver", frame: "Alpha Silver Aluminum", gears: "SRAM SX Eagle", wheels: "29", weight: "13.5kg" },
    features: ["Tija telescópica", "Transmisión 1x12", "Bloqueo TurnKey"],
    inStock: true
  },
  {
    id: 31,
    name: "Cinelli Gazzetta Track",
    originalPrice: 890,
    discount: 40,
    category: "urban",
    image: "https://cdn.mammothbikes.com/product/Large/578233_12122024120048.jpg",
    description: "Rendimiento puro a un precio excelente.",
    specs: { suspension: "Fox 32 Rhythm", frame: "Carbono Monocasco", gears: "Shimano SLX", wheels: "29", weight: "12.1kg" },
    features: ["Doble suspensión", "Mando remoto", "Ruedas Boost"],
    inStock: true
  },
   {
    id: 36,
    name: "Coluer Poison 1x12 Sx Judy 2025",
    originalPrice: 1699,
    discount: 40,
    category: "xc",
    image: "https://cdn.mammothbikes.com/product/Large/cp_1_821166_24112025_1.jpg",
    description: "No es solo una bici de Enduro, es una mini DH que puedes pedalear.",
    specs: { suspension: "RockShox Zeb Ultimate", frame: "Aluminio 6066", gears: "SRAM GX", wheels: "Mullet", weight: "15.8kg" },
    features: ["VCS Virtual Contact", "Mullet setup", "Robustez extrema"],
    inStock: true
  },
  {
    id: 37,
    name: "Giant Reign Advanced Pro",
    originalPrice: 7799,
    discount: 60,
    category: "dh",
    image: "https://cdn.mammothbikes.com/product/Large/565134_31102023150644.jpg",
    description: "Desarrollada para las carreras de Enduro y DH más duras del mundo.",
    specs: { suspension: "Fox 38 Factory Live Valve", frame: "Advanced Grade Composite", gears: "Shimano XT", wheels: "29", weight: "14.9kg" },
    features: ["Maestro Suspension", "Live Valve", "Geometría ajustable"],
    inStock: true
  },
  {
    id: 39,
    name: "Trek Session 8",
    originalPrice: 5999,
    discount: 60,
    category: "dh",
    image: "https://cdn.mammothbikes.com/product/Large/592730_1510202592326.jpg",
    description: "Geometría de pivote alto para mantener la velocidad en los terrenos más rotos.",
    specs: { suspension: "RockShox Boxxer Select", frame: "Alpha Platinum", gears: "SRAM GX DH", wheels: "29", weight: "17.5kg" },
    features: ["High Pivot", "Idler Pulley", "Tamaño específico ruedas"],
    inStock: true
  },
  {
    id: 44,
    name: "Brompton C Line Explore",
    originalPrice: 1894,
    discount: 40,
    category: "urban",
    image: "https://cdn.mammothbikes.com/product/Large/571026_19032024150247.jpg",
    description: "La bicicleta plegable por excelencia. Perfecta para el viajero multimodal.",
    specs: { suspension: "Bloque trasero", frame: "Acero", gears: "6 velocidades", wheels: "16 pulgadas", weight: "12.1kg" },
    features: ["Plegado compacto", "Hecha en Londres", "Indestructible"],
    inStock: true
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Martínez",
    rating: 5,
    comment: "Excelente tienda. La Cannondale Scalpel Mammoth Edition es una locura.",
    date: "Hace 2 semanas",
    bike: "Cannondale Scalpel"
  },
  {
    id: 2,
    name: "Ana García",
    rating: 5,
    comment: "Compré la Orbea MX para mi hijo y el servicio fue impecable. Envío rápido.",
    date: "Hace 1 mes",
    bike: "Orbea MX 20 XC"
  },
  {
    id: 3,
    name: "Jorge Ruiz",
    rating: 5,
    comment: "Buscaba una gravel para empezar y la MMR X-Grip es perfecta. El descuento ayudó mucho.",
    date: "Hace 5 días",
    bike: "MMR X-Grip"
  }
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "¿Tienen tienda física en España?",
    answer: "Sí, contamos con varias tiendas Mammoth físicas donde puedes ver los modelos y recoger tu pedido."
  },
  {
    id: 2,
    question: "¿Los descuentos son reales?",
    answer: "Absolutamente. Trabajamos directamente con las marcas para ofrecer las mejores ofertas del mercado español."
  },
  {
    id: 3,
    question: "¿Qué garantía tienen las bicicletas?",
    answer: "Todas nuestras bicis tienen garantía oficial del fabricante, que varía entre 2 años y de por vida según la marca."
  }
];

// Generador automático de bicis de relleno (DESACTIVADO: Usando solo manuales)
/*
const generateMoreBikes = (bases: Bike[], count: number): Bike[] => {
  // Cambiamos 'bases' por 'baseBikes' para usar siempre las originales completas
  const generated: Bike[] = [...baseBikes]; 
  let idCounter = 1000; 

  const years = ["2023", "2024", "2025"];
  const editions = ["Limited", "Pro", "Team", "Elite", "Comp", "Sport"];
  const colors = ["Red", "Blue", "Black", "Carbon", "Silver", "Green"];

  // Variaciones de imágenes para que no parezcan repetidas
  const extraImages = [
    "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511994298220-41270c531543?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1533560906234-54e609349c8f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1596700868843-c07a3f4e1f76?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1485965120184-e224f7a1dbfe?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80&w=800",
    "https://cdn.mammothbikes.com/product/Large/596824_15012026123256.jpg",
    "https://cdn.mammothbikes.com/product/Large/589356_1507202594822.jpg",
    "https://cdn.mammothbikes.com/product/Large/cp_13_845994_22092025_1.jpg",
    "https://cdn.mammothbikes.com/product/Large/512575_03012023132128.jpg"
  ];

  while (generated.length < count) {
    const base = bases[Math.floor(Math.random() * bases.length)];
    const year = years[Math.floor(Math.random() * years.length)];
    const edition = editions[Math.floor(Math.random() * editions.length)];
    
    // Variation de precio (+/- 20%)
    const priceVariance = (Math.random() * 0.4) - 0.2;
    const newPrice = Math.round(base.originalPrice * (1 + priceVariance));

    // Seleccionar imagen aleatoria si queremos variar
    const randomImage = Math.random() > 0.7 ? extraImages[Math.floor(Math.random() * extraImages.length)] : base.image;

    generated.push({
      ...base,
      id: idCounter++,
      name: `${base.name.split(' - ')[0]} ${edition} ${year}`,
      originalPrice: newPrice,
      image: randomImage, // Usamos imagen variable
      discount: Math.random() > 0.5 ? 20 : 40, // Variar descuentos
      inStock: Math.random() > 0.1
    });
  }
  
  return generated;
};

export const bikes = generateMoreBikes(baseBikes, 320);
*/

export const bikes = baseBikes;
