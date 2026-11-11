/**
 * Datos oficiales del Menú y Carta - Asados Colombianos
 * Basado fielmente en el contenido fotográfico y gráfico del restaurante
 */

const RESTAURANT_INFO = {
  name: "Asados Colombianos",
  slogan: "Asadero - Restaurante",
  tagline: "Un sabor que te hace volver",
  address: "Cra. 5 #134, Ibagué, Tolima",
  city: "Ibagué, Tolima",
  coords: { lat: 4.445838, lng: -75.152604 },
  googleMapsLink: "https://maps.app.goo.gl/weU8bPZRaHW5u1pe8",
  plusCode: "CRWW+8XJ Ibagué, Tolima",
  logo: "assets/images/logo-eslogan.jpg",
  favicon: "assets/images/favicon.png",
  video: "assets/video/video.mp4",
  videoThumb: "assets/video/video_thumb.jpg",
  banner: "assets/images/banner-asadero.jpg",
  domiciliosFlyer: "assets/images/domicilios.jpg",
  phones: [
    { number: "3106312148", display: "310-631-2148", isPrimary: true },
    { number: "3162334974", display: "316-233-4974", isPrimary: false },
    { number: "3182885605", display: "318-288-5605", isPrimary: false },
    { number: "3112447905", display: "311-244-7905", isPrimary: false }
  ],
  schedule: "Lunes a Domingo: 11:00 AM - 9:30 PM",
  promo: "¡Por la compra de un pollo reclama un cuarto GRATIS!",
  serviceNote: "Atendemos en nuestro local y enviamos domicilios calienticos y rápidos a toda la zona."
};

const CATEGORIES = [
  { id: "todos", name: "Todos los Platos", icon: "🔥" },
  { id: "pollo", name: "Especialidades de Pollo", icon: "🍗" },
  { id: "carnes", name: "Carnes al Carbón & BBQ", icon: "🥩" },
  { id: "alitas", name: "Alitas & Compartir", icon: "✨" },
  { id: "ejecutivos", name: "Menú Ejecutivo", icon: "🍱" },
  { id: "sopas", name: "Sopas & Tradición", icon: "🍲" },
  { id: "platos", name: "Platos Especiales", icon: "🍛" },
  { id: "adicionales", name: "Acompañamientos", icon: "🍟" },
  { id: "bebidas", name: "Bebidas", icon: "🥤" }
];

const MENU_ITEMS = [
  {
    id: "pollo-asado",
    name: "Pollo Asado Tradicional",
    category: "pollo",
    badge: "El Favorito de la Casa",
    description: "Delicioso pollo fresco marinado con nuestra receta secreta y asado lentamente al carbón hasta lograr una piel dorada y carne jugosa.",
    accompaniments: ["Maduro", "Papas Saladas", "Arepa", "Ají Casero"],
    hasPortions: true,
    defaultPrice: 40000,
    portions: [
      { name: "Pollo Entero", detail: "Con maduro, papas saladas, arepas y ají", price: 40000 },
      { name: "Medio Pollo (1/2)", detail: "Con maduro, papas saladas, arepas y ají", price: 22000 },
      { name: "Cuarto de Pollo (1/4)", detail: "Con maduro, papas saladas, arepa y ají", price: 13000 }
    ],
    cardImage: "assets/images/pollo-asado.jpg",
    fullFlyer: "assets/images/pollo-asado.jpg",
    aspect: "square"
  },
  {
    id: "pollo-broaster",
    name: "Pollo Broaster Crujiente",
    category: "pollo",
    badge: "Súper Crocante",
    description: "Pollo apanado con nuestra mezcla crocante especial, frito a la perfección a presión para conservar toda la jugosidad interior sin exceso de grasa.",
    accompaniments: ["Yuca Frita", "Papas a la Francesa", "Arepa", "Salsas de la Casa"],
    hasPortions: true,
    defaultPrice: 42000,
    portions: [
      { name: "Pollo Entero (8 Presas)", detail: "Con yuca, papas francesas, arepas y salsas", price: 42000 },
      { name: "Medio Pollo (4 Presas)", detail: "Con yuca, papas francesas, arepas y salsas", price: 23000 },
      { name: "Cuarto de Pollo (2 Presas)", detail: "Con yuca, papas francesas, arepa y salsas", price: 14000 }
    ],
    cardImage: "assets/images/pollo-broaster.jpg",
    fullFlyer: "assets/images/pollo-broaster.jpg",
    aspect: "square"
  },
  {
    id: "churrasco",
    name: "Churrasco al Carbón",
    category: "carnes",
    badge: "100% Carne de Res",
    description: "Disfruta un jugoso corte de carne 100% de res tierna y asada al término de tu preferencia en nuestra parrilla de carbón.",
    accompaniments: ["Papas a la Francesa", "Yuquitas Crocantes", "Salsas Artesanales"],
    hasPortions: false,
    defaultPrice: 34000,
    portions: null,
    cardImage: "assets/images/churrasco_plate.jpg",
    fullFlyer: "assets/images/churrasco.jpg",
    aspect: "vertical"
  },
  {
    id: "costillas-bbq",
    name: "Costillas BBQ",
    category: "carnes",
    badge: "Glaseado Ahumado",
    description: "Tiernas y suaves costillitas de cerdo horneadas y glaseadas con una generosa salsa BBQ agridulce con el toque ahumado del fogón.",
    accompaniments: ["Papas a la Francesa", "Yuquitas Doradas", "Salsa BBQ Adicional"],
    hasPortions: false,
    defaultPrice: 33000,
    portions: null,
    cardImage: "assets/images/costillas_plate.jpg",
    fullFlyer: "assets/images/costillas-bbq.jpg",
    aspect: "horizontal"
  },
  {
    id: "alitas-bbq",
    name: "Alitas BBQ",
    category: "alitas",
    badge: "Para Chuparse los Dedos",
    description: "Alitas de pollo doraditas y crujientes, generosamente bañadas en deliciosa salsa BBQ acompañada de salsa especial para untar.",
    accompaniments: ["Papas a la Francesa", "Yuquitas", "Salsas"],
    hasPortions: false,
    defaultPrice: 26000,
    portions: null,
    cardImage: "assets/images/alitas_plate.jpg",
    fullFlyer: "assets/images/alitas-bbq.jpg",
    aspect: "horizontal"
  },
  {
    id: "pechuga-plancha",
    name: "Pechuga a la Plancha",
    category: "pollo",
    badge: "Corte Magro y Suave",
    description: "Pechuga de pollo fileteada y asada a la plancha con finas hierbas y condimentos naturales, dorada por fuera y suave por dentro.",
    accompaniments: ["Papas Francesas", "Yuquitas", "Salsas"],
    hasPortions: false,
    defaultPrice: 28000,
    portions: null,
    cardImage: "assets/images/pechuga-plancha.jpg",
    fullFlyer: "assets/images/pechuga-plancha.jpg",
    aspect: "square"
  },
  {
    id: "arroz-con-pollo",
    name: "Arroz con Pollo Tradicional",
    category: "platos",
    badge: "El Mejor de la Ciudad",
    description: "El auténtico y más delicioso arroz con pollo preparado al estilo casero colombiano con pollo desmechado, verduras frescas y sazón inigualable.",
    accompaniments: ["Papas a la Francesa", "Yuquitas", "Salsas"],
    hasPortions: false,
    defaultPrice: 22000,
    portions: null,
    cardImage: "assets/images/arroz_con_pollo_plate.jpg",
    fullFlyer: "assets/images/arroz-con-pollo.jpg",
    aspect: "vertical"
  },
  {
    id: "caldo-costilla",
    name: "Caldo de Costilla",
    category: "sopas",
    badge: "Reconfortante & Típico",
    description: "Nutritivo y tradicional caldo preparado con costilla de res seleccionada, cilantro fresco, papa y sazón casera colombiana.",
    accompaniments: ["Acompañado con Arepa o Arroz (A tu elección)"],
    hasPortions: false,
    defaultPrice: 14000,
    portions: null,
    cardImage: "assets/images/caldo-costilla.jpg",
    fullFlyer: "assets/images/caldo-costilla.jpg",
    options: [
      { name: "Acompañamiento", choices: ["Con Arepa Caliente", "Con Porción de Arroz"] }
    ],
    aspect: "square"
  },
  {
    id: "ejecutivo-combo",
    name: "Ejecutivo + 1/4 de Pollo",
    category: "ejecutivos",
    badge: "Combo Completo Almuerzo",
    description: "El almuerzo más completo y generoso: Sopa del día, fríjol, arroz, 1/4 de pollo de tu elección (asado o broaster), ensalada fresca, papitas a la francesa y limonada fría.",
    accompaniments: ["Sopa del Día", "Fríjol", "Arroz Blanco", "1/4 Pollo (Asado o Broaster)", "Ensalada", "Papitas Francesas", "Limonada Refrescante"],
    note: "Puedes elegir entre pollo asado o pollo broaster. (No incluye sopa los días sábados, domingos y festivos).",
    hasPortions: false,
    defaultPrice: 20000,
    portions: null,
    cardImage: "assets/images/ejecutivo_plate_full.jpg",
    fullFlyer: "assets/images/ejecutivo-combo.jpg",
    options: [
      { name: "Tipo de Pollo", choices: ["1/4 Pollo Asado", "1/4 Pollo Broaster"] }
    ],
    aspect: "vertical"
  },
  {
    id: "papas-francesa",
    name: "Porción de Papas a la Francesa",
    category: "adicionales",
    badge: "Acompañamiento",
    description: "Papas cortadas a la francesa, fritas al momento hasta quedar crujientes por fuera y suaves por dentro con una pizca de sal.",
    accompaniments: ["Salsas de la casa"],
    hasPortions: false,
    defaultPrice: 7000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "papas-saladas",
    name: "Porción de Papas Saladas",
    category: "adicionales",
    badge: "Tradición",
    description: "Papas criollas o sabaneras cocinadas en su punto con corteza de sal marina tradicional de los asaderos colombianos.",
    accompaniments: ["Ají artesanal de la casa"],
    hasPortions: false,
    defaultPrice: 6000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "yuquitas-fritas",
    name: "Porción de Yuquitas Fritas",
    category: "adicionales",
    badge: "Doradas & Suaves",
    description: "Trozos de yuca fresca cocida y frita con textura crocante y suave corazón.",
    accompaniments: ["Ají o salsas"],
    hasPortions: false,
    defaultPrice: 7000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "platano-maduro",
    name: "Plátano Maduro Asado",
    category: "adicionales",
    badge: "Dulce Tradición",
    description: "Plátano maduro asado en su punto meloso y dulce para acompañar el pollo asado o carnes.",
    accompaniments: ["Melado natural"],
    hasPortions: false,
    defaultPrice: 5000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "limonada-natural",
    name: "Limonada Natural Fría",
    category: "bebidas",
    badge: "Refrescante",
    description: "Preparada con limones frescos recién exprimidos, panela o azúcar al gusto y mucho hielo.",
    accompaniments: ["Vaso grande 16 oz"],
    hasPortions: false,
    defaultPrice: 6000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "gaseosa-familiar",
    name: "Gaseosa Familiar 1.5L / 3L",
    category: "bebidas",
    badge: "Para la Mesa",
    description: "Coca-Cola, Postobón Manzana, Colombiana, Cuatro o Sprite bien fría para compartir.",
    accompaniments: ["Sabores a elección al pedir"],
    hasPortions: true,
    defaultPrice: 9000,
    portions: [
      { name: "Botella 1.5 Litros", detail: "Sabor a elección", price: 9000 },
      { name: "Mega Botella 3 Litros", detail: "Sabor a elección", price: 14000 },
      { name: "Personal 350ml", detail: "Sabor a elección", price: 4500 }
    ],
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  }
];

