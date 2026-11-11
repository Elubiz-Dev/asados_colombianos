/**
 * Datos oficiales del Menú y Carta - Asados Colombianos
 * Basado 100% en el volante oficial actualizado de Domicilios y Carta de Precios
 */

const RESTAURANT_INFO = {
  name: "Asados Colombianos",
  slogan: "Asadero - Restaurante",
  tagline: "Un sabor que te hace volver",
  address: "Cra. 5 #134, Ibagué, Tolima",
  city: "Ibagué, Tolima",
  coords: { lat: 4.445838, lng: -75.152604 },
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=4.445838,-75.152604",
  plusCode: "CRWW+8XJ Ibagué, Tolima",
  logo: "assets/images/logo-eslogan.jpg",
  favicon: "assets/images/favicon.png",
  video: "assets/video/video.mp4",
  videoThumb: "assets/video/video_thumb.jpg",
  banner: "assets/images/banner-asadero.jpg",
  menuOficialFlyer: "assets/images/menu-oficial-completo.jpg",
  domiciliosFlyer: "assets/images/domicilios.jpg",
  phones: [
    { number: "3106312148", display: "310-631-2148", isPrimary: true },
    { number: "3182885605", display: "318-288-5605", isPrimary: false },
    { number: "3162334974", display: "316-233-4974", isPrimary: false },
    { number: "3112447905", display: "311-244-7905", isPrimary: false }
  ],
  schedule: "Lunes a Domingo: 11:00 AM - 9:30 PM",
  promo: "¡Por la compra de un pollo reclama un cuarto GRATIS!",
  serviceNote: "Atendemos en nuestro punto físico y enviamos domicilios calienticos y rápidos a toda la zona."
};

const CATEGORIES = [
  { id: "todos", name: "Todos los Platos", icon: "🔥" },
  { id: "pollo", name: "Pollos Asado & Broaster", icon: "🍗" },
  { id: "carta", name: "Platos a la Carta", icon: "🥩" },
  { id: "bandejas", name: "Bandejas Asados", icon: "🍱" },
  { id: "sopas", name: "Sopas & Caldos", icon: "🍲" },
  { id: "adicionales", name: "Adicionales", icon: "🍟" },
  { id: "bebidas", name: "Bebidas & Cervezas", icon: "🥤" }
];

const MENU_ITEMS = [
  // ==========================================
  // POLLOS: ASADO & BROASTER
  // ==========================================
  {
    id: "pollo-asado",
    name: "Pollo Asado Tradicional",
    category: "pollo",
    badge: "Al Carbón",
    description: "Delicioso pollo fresco marinado con nuestra receta secreta y asado lentamente al carbón.",
    accompaniments: ["Papa Salada", "Arepa", "Ají Casero"],
    hasPortions: true,
    defaultPrice: 40000,
    portions: [
      { name: "1 Pollo (8 Presas)", detail: "Con papa salada, arepa y ají", price: 40000 },
      { name: "1/2 Pollo (4 Presas)", detail: "Con papa salada, arepa y ají", price: 21000 },
      { name: "1/4 Pollo (2 Presas)", detail: "Con papa salada, arepa y ají", price: 10000 }
    ],
    cardImage: "assets/images/pollo-asado.jpg",
    fullFlyer: "assets/images/pollo-asado.jpg",
    aspect: "square"
  },
  {
    id: "pollo-broaster",
    name: "Pollo Broaster Crujiente",
    category: "pollo",
    badge: "Crocante & Dorado",
    description: "Pollo apanado crocante, frito a presión para conservar la carne suave y jugosa.",
    accompaniments: ["Papa Francesa", "Ají", "Arepa", "Miel"],
    hasPortions: true,
    defaultPrice: 40000,
    portions: [
      { name: "1 Pollo (8 Presas)", detail: "Con papa francesa, ají, arepa y miel", price: 40000 },
      { name: "1/2 Pollo (4 Presas)", detail: "Con papa francesa, ají, arepa y miel", price: 21000 },
      { name: "1/4 Pollo (2 Presas)", detail: "Con papa francesa, ají, arepa y miel", price: 10000 }
    ],
    cardImage: "assets/images/pollo-broaster.jpg",
    fullFlyer: "assets/images/pollo-broaster.jpg",
    aspect: "square"
  },
  {
    id: "pollo-combinado",
    name: "1/2 Broaster + 1/2 Asado",
    category: "pollo",
    badge: "Combinado Especial",
    description: "La combinación perfecta para compartir: medio pollo asado al carbón y medio pollo broaster crujiente.",
    accompaniments: ["Papa Salada", "Papa Francesa", "Arepas", "Ají Casero", "Miel"],
    hasPortions: false,
    defaultPrice: 42000,
    portions: null,
    cardImage: "assets/images/pollo-asado.jpg",
    fullFlyer: "assets/images/menu-oficial-completo.jpg",
    aspect: "square"
  },
  {
    id: "alitas",
    name: "Porción de Alitas",
    category: "pollo",
    badge: "Crujientes",
    description: "Alitas de pollo doraditas y crujientes con la sazón tradicional de la casa.",
    accompaniments: ["Yuquitas o Papas", "Salsas Especiales"],
    hasPortions: false,
    defaultPrice: 12000,
    portions: null,
    cardImage: "assets/images/alitas_plate.jpg",
    fullFlyer: "assets/images/alitas-bbq.jpg",
    aspect: "horizontal"
  },

  // ==========================================
  // PLATOS A LA CARTA
  // ==========================================
  {
    id: "churrasco",
    name: "Churrasco al Carbón",
    category: "carta",
    badge: "100% Carne de Res",
    description: "Jugoso corte de carne de res asado en parrilla de carbón al término de tu gusto.",
    accompaniments: ["Papas a la Francesa", "Yuquitas Crocantes", "Salsas Artesanales"],
    hasPortions: false,
    defaultPrice: 38000,
    portions: null,
    cardImage: "assets/images/churrasco_plate.jpg",
    fullFlyer: "assets/images/churrasco.jpg",
    aspect: "vertical"
  },
  {
    id: "costillas-bbq",
    name: "Costillas BBQ",
    category: "carta",
    badge: "Glaseado Ahumado",
    description: "Tiernas costillitas de cerdo horneadas y glaseadas con salsa BBQ agridulce con el toque ahumado del fogón.",
    accompaniments: ["Papas a la Francesa", "Yuquitas", "Salsa BBQ"],
    hasPortions: false,
    defaultPrice: 30000,
    portions: null,
    cardImage: "assets/images/costillas_plate.jpg",
    fullFlyer: "assets/images/costillas-bbq.jpg",
    aspect: "horizontal"
  },
  {
    id: "lomo",
    name: "Lomo al Carbón",
    category: "carta",
    badge: "Corte Suave",
    description: "Tierno y magro filete de lomo de res asado al carbón con sazón casera colombiana.",
    accompaniments: ["Papas a la Francesa", "Yuquitas", "Salsas"],
    hasPortions: false,
    defaultPrice: 30000,
    portions: null,
    cardImage: "assets/images/churrasco_plate.jpg",
    fullFlyer: "assets/images/menu-oficial-completo.jpg",
    aspect: "square"
  },
  {
    id: "chuleta",
    name: "Chuleta Valluna",
    category: "carta",
    badge: "Crocante & Dorada",
    description: "Chuleta de cerdo apanada crocante, dorada al punto y jugosa por dentro.",
    accompaniments: ["Papas a la Francesa", "Yuquitas", "Limón Fresco"],
    hasPortions: false,
    defaultPrice: 30000,
    portions: null,
    cardImage: null,
    fullFlyer: "assets/images/menu-oficial-completo.jpg",
    aspect: "square"
  },
  {
    id: "punta-de-anca",
    name: "Punta de Anca",
    category: "carta",
    badge: "Corte Parrillero",
    description: "Exquisita punta de anca con su característico borde dorado a las brasas de carbón.",
    accompaniments: ["Papas a la Francesa", "Yuquitas", "Salsas de la Casa"],
    hasPortions: false,
    defaultPrice: 40000,
    portions: null,
    cardImage: null,
    fullFlyer: "assets/images/menu-oficial-completo.jpg",
    aspect: "square"
  },
  {
    id: "parrillada",
    name: "Parrillada Asados Colombianos",
    category: "carta",
    badge: "Surtido Especial",
    description: "Generoso surtido parrillero con variedad de carnes al carbón, pollo y acompañamientos tradicionales.",
    accompaniments: ["Papas Francesas", "Yuquitas", "Arepa", "Ají Casero"],
    hasPortions: false,
    defaultPrice: 40000,
    portions: null,
    cardImage: null,
    fullFlyer: "assets/images/menu-oficial-completo.jpg",
    aspect: "square"
  },
  {
    id: "sobrebarriga",
    name: "Sobrebarriga al Carbón",
    category: "carta",
    badge: "Tradición Parrillera",
    description: "Tradicional sobrebarriga asada a la brasa, tierna y con sazón autóctona colombiana.",
    accompaniments: ["Papas a la Francesa", "Yuquitas", "Ají Casero"],
    hasPortions: false,
    defaultPrice: 40000,
    portions: null,
    cardImage: null,
    fullFlyer: "assets/images/menu-oficial-completo.jpg",
    aspect: "square"
  },
  {
    id: "mojarra-frita",
    name: "Mojarra Frita",
    category: "carta",
    badge: "Pescado Fresco",
    description: "Mojarra roja entera, frita y crocante con piel doradita y carne jugosa.",
    accompaniments: ["Papas Francesas", "Ensalada", "Limón Fresco"],
    hasPortions: false,
    defaultPrice: 30000,
    portions: null,
    cardImage: null,
    fullFlyer: "assets/images/menu-oficial-completo.jpg",
    aspect: "square"
  },
  {
    id: "bagre-en-salsa",
    name: "Bagre en Salsa",
    category: "carta",
    badge: "Sazón de Río",
    description: "Generosa posta de bagre sudada en delicioso guiso criollo con tomate, cebolla y hierbas naturales.",
    accompaniments: ["Arroz Blanco", "Papa", "Yuca", "Ensalada"],
    hasPortions: false,
    defaultPrice: 25000,
    portions: null,
    cardImage: null,
    fullFlyer: "assets/images/menu-oficial-completo.jpg",
    aspect: "square"
  },
  {
    id: "arroz-con-pollo",
    name: "Arroz con Pollo Tradicional",
    category: "carta",
    badge: "El Mejor de la Ciudad",
    description: "El auténtico arroz con pollo preparado al estilo casero con pollo desmechado, verduras frescas y sazón inigualable.",
    accompaniments: ["Papas a la Francesa", "Yuquitas", "Salsas"],
    hasPortions: false,
    defaultPrice: 19000,
    portions: null,
    cardImage: "assets/images/arroz_con_pollo_plate.jpg",
    fullFlyer: "assets/images/arroz-con-pollo.jpg",
    aspect: "vertical"
  },
  {
    id: "pechuga",
    name: "Pechuga Plancha / Apanada",
    category: "carta",
    badge: "Corte Magro & Suave",
    description: "Filete de pechuga seleccionado, preparado a la plancha doradita o apanada crujiente a tu elección.",
    accompaniments: ["Papas Francesas", "Yuquitas", "Salsas"],
    hasPortions: false,
    defaultPrice: 30000,
    portions: null,
    options: [
      { name: "Tipo de Preparación", choices: ["A la Plancha", "Apanada Crujiente"] }
    ],
    cardImage: "assets/images/pechuga-plancha.jpg",
    fullFlyer: "assets/images/pechuga-plancha.jpg",
    aspect: "square"
  },

  // ==========================================
  // BANDEJA ASADOS COLOMBIANOS
  // ==========================================
  {
    id: "bandeja-pollo",
    name: "Bandeja Asados + 1/4 Pollo",
    category: "bandejas",
    badge: "Almuerzo Completo",
    description: "Completa bandeja servida con frijol, arroz, ensalada, papa francesa y 1/4 de pollo a tu gusto.",
    accompaniments: ["Fríjol", "Arroz Blanco", "Ensalada", "Papa Francesa"],
    hasPortions: false,
    defaultPrice: 18000,
    portions: null,
    options: [
      { name: "Tipo de Pollo", choices: ["1/4 Pollo Asado al Carbón", "1/4 Pollo Broaster Crujiente"] }
    ],
    cardImage: "assets/images/ejecutivo_plate_full.jpg",
    fullFlyer: "assets/images/ejecutivo-combo.jpg",
    aspect: "vertical"
  },
  {
    id: "bandeja-carne",
    name: "Bandeja Asados con Carne",
    category: "bandejas",
    badge: "Proteína a Elección",
    description: "Generosa bandeja con frijol, arroz, ensalada y papa francesa, acompañada de la carne que más te guste.",
    accompaniments: ["Fríjol", "Arroz Blanco", "Ensalada", "Papa Francesa"],
    hasPortions: false,
    defaultPrice: 18000,
    portions: null,
    options: [
      { name: "Carne a Elección", choices: ["Pechuga de Pollo", "Lomo de Res", "Churrasquito", "Chuleta"] }
    ],
    cardImage: null,
    fullFlyer: "assets/images/menu-oficial-completo.jpg",
    aspect: "square"
  },

  // ==========================================
  // SOPAS & CALDOS
  // ==========================================
  {
    id: "sancocho",
    name: "Sancocho Especial",
    category: "sopas",
    badge: "Tradición Típica",
    description: "Nutritivo y sustancioso sancocho preparado con plátano, yuca, papa, mazorca y sazón casera colombiana.",
    accompaniments: ["Arroz Blanco", "Arepa"],
    hasPortions: false,
    defaultPrice: 18000,
    portions: null,
    cardImage: null,
    fullFlyer: "assets/images/menu-oficial-completo.jpg",
    aspect: "square"
  },
  {
    id: "ajiaco",
    name: "Ajiaco Santafereño",
    category: "sopas",
    badge: "Clásico Reconfortante",
    description: "Tradicional ajiaco espeso preparado con tres variedades de papa, pollo desmechado, mazorca y guascas.",
    accompaniments: ["Arroz Blanco", "Alcaparras / Crema"],
    hasPortions: false,
    defaultPrice: 9000,
    portions: null,
    cardImage: null,
    fullFlyer: "assets/images/menu-oficial-completo.jpg",
    aspect: "square"
  },
  {
    id: "mondongo",
    name: "Sopa de Mondongo",
    category: "sopas",
    badge: "Sabor Tradicional",
    description: "Deliciosa sopa de mondongo cocinada con carne de cerdo picadita, verduras y legumbres frescas.",
    accompaniments: ["Arroz", "Arepa", "Limón"],
    hasPortions: false,
    defaultPrice: 9000,
    portions: null,
    cardImage: null,
    fullFlyer: "assets/images/menu-oficial-completo.jpg",
    aspect: "square"
  },
  {
    id: "menudencia",
    name: "Sopa de Menudencia",
    category: "sopas",
    badge: "Sabor Casero",
    description: "Tradicional sopa con menudencias frescas de pollo, papa picada y cilantro campesino.",
    accompaniments: ["Arroz Blanco o Arepa"],
    hasPortions: false,
    defaultPrice: 9000,
    portions: null,
    cardImage: null,
    fullFlyer: "assets/images/menu-oficial-completo.jpg",
    aspect: "square"
  },
  {
    id: "caldo-costilla",
    name: "Caldo de Costilla",
    category: "sopas",
    badge: "Revitalizante",
    description: "Nutritivo caldo preparado con tierna costilla de res, papa y cilantro fresco campesino.",
    accompaniments: ["Arepa Caliente o Arroz"],
    hasPortions: false,
    defaultPrice: 9000,
    portions: null,
    options: [
      { name: "Acompañamiento", choices: ["Con Arepa Caliente", "Con Porción de Arroz"] }
    ],
    cardImage: "assets/images/caldo-costilla.jpg",
    fullFlyer: "assets/images/caldo-costilla.jpg",
    aspect: "square"
  },
  {
    id: "caldo-campesino",
    name: "Caldo Campesino",
    category: "sopas",
    badge: "Del Campo",
    description: "Sustancioso y reconfortante caldo criollo campesino con papa y finas hierbas naturales.",
    accompaniments: ["Arepa Caliente"],
    hasPortions: false,
    defaultPrice: 9000,
    portions: null,
    cardImage: null,
    fullFlyer: "assets/images/menu-oficial-completo.jpg",
    aspect: "square"
  },
  {
    id: "caldo-pajarilla",
    name: "Caldo de Pajarilla",
    category: "sopas",
    badge: "Auténtico Criollo",
    description: "Tradicional caldo de pajarilla con sazón casera colombiana para empezar el día con toda la energía.",
    accompaniments: ["Arepa Caliente"],
    hasPortions: false,
    defaultPrice: 8000,
    portions: null,
    cardImage: null,
    fullFlyer: "assets/images/menu-oficial-completo.jpg",
    aspect: "square"
  },

  // ==========================================
  // ADICIONALES
  // ==========================================
  {
    id: "adicional-maduro",
    name: "Plátano Maduro Asado",
    category: "adicionales",
    badge: "Dulce Tradición",
    description: "Plátano maduro asado en su punto meloso y dulce para acompañar tus platos.",
    accompaniments: ["Melado natural"],
    hasPortions: false,
    defaultPrice: 3000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "adicional-papa",
    name: "Porción de Papa Salada",
    category: "adicionales",
    badge: "Al Carbón",
    description: "Papas cocinadas al punto con corteza de sal tradicional de asadero.",
    accompaniments: ["Ají artesanal"],
    hasPortions: false,
    defaultPrice: 4000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "adicional-ensalada",
    name: "Porción de Ensalada",
    category: "adicionales",
    badge: "Fresca",
    description: "Ensalada fresca del día con verduras seleccionadas.",
    accompaniments: ["Aderezo casero"],
    hasPortions: false,
    defaultPrice: 4000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "adicional-arroz",
    name: "Porción de Arroz Blanco",
    category: "adicionales",
    badge: "Acompañamiento",
    description: "Porción de arroz blanco calientico y suelto.",
    accompaniments: [],
    hasPortions: false,
    defaultPrice: 4000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "adicional-frijol",
    name: "Porción de Fríjol",
    category: "adicionales",
    badge: "Sazón Casera",
    description: "Fríjoles cargamanto cocinados con el toque casero colombiano.",
    accompaniments: [],
    hasPortions: false,
    defaultPrice: 5000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "adicional-yuca",
    name: "Porción de Yuca Frita",
    category: "adicionales",
    badge: "Dorada & Suave",
    description: "Trozos de yuca frita con exterior crocante y corazón tierno.",
    accompaniments: ["Ají o salsas"],
    hasPortions: false,
    defaultPrice: 5000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "adicional-papa-francesa",
    name: "Porción de Papa Francesa",
    category: "adicionales",
    badge: "Crujiente",
    description: "Papas cortadas a la francesa fritas al momento hasta quedar crujientes.",
    accompaniments: ["Salsas de la casa"],
    hasPortions: false,
    defaultPrice: 5000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },

  // ==========================================
  // BEBIDAS & CERVEZAS
  // ==========================================
  {
    id: "bebida-gaseosa-500",
    name: "Gaseosa Personal P500",
    category: "bebidas",
    badge: "Individual 500ml",
    description: "Botella 500ml bien fría (Coca-Cola, Postobón Manzana, Colombiana, Cuatro o Sprite).",
    accompaniments: ["Sabor a elección"],
    hasPortions: false,
    defaultPrice: 3500,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "bebida-hit-litro",
    name: "Jugo Hit 1 Litro",
    category: "bebidas",
    badge: "Familiar",
    description: "Jugo Hit botella de 1 Litro (Mora, Mango, Frutas Tropicales o Lulo).",
    accompaniments: ["Sabor a elección"],
    hasPortions: false,
    defaultPrice: 5000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "bebida-gaseosa-25",
    name: "Gaseosa 2.5 Litros",
    category: "bebidas",
    badge: "Para Compartir",
    description: "Gaseosa familiar de 2.5 Litros bien helada para acompañar en la mesa.",
    accompaniments: ["Coca-Cola, Postobón, Colombiana"],
    hasPortions: false,
    defaultPrice: 10000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "bebida-gaseosa-mega",
    name: "Gaseosa Mega 3 Litros",
    category: "bebidas",
    badge: "Mega Tamaño",
    description: "Botella gigante de 3 Litros para toda la familia y amigos.",
    accompaniments: ["Sabor a elección"],
    hasPortions: false,
    defaultPrice: 12000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "bebida-agua",
    name: "Agua en Botella",
    category: "bebidas",
    badge: "Natural o con Gas",
    description: "Botella de agua purificada fresca.",
    accompaniments: ["Con gas o sin gas"],
    hasPortions: false,
    defaultPrice: 3000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "bebida-colapola-lata",
    name: "Cola y Pola en Lata",
    category: "bebidas",
    badge: "Refajo Típico",
    description: "Refajo tradicional colombiano en lata fría.",
    accompaniments: [],
    hasPortions: false,
    defaultPrice: 4000,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "bebida-colapola-15",
    name: "Cola y Pola 1.5 Litros",
    category: "bebidas",
    badge: "Familiar",
    description: "Botella de 1.5 Litros de delicioso refajo para acompañar asados.",
    accompaniments: [],
    hasPortions: false,
    defaultPrice: 7500,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "bebida-malta-15",
    name: "Pony Malta 1.5 Litros",
    category: "bebidas",
    badge: "Energía & Sabor",
    description: "Botella de 1.5 Litros de deliciosa bebida de malta fría.",
    accompaniments: [],
    hasPortions: false,
    defaultPrice: 7500,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "bebida-te-personal",
    name: "Té Personal",
    category: "bebidas",
    badge: "Refrescante",
    description: "Té frío en botella individual (Limón o Durazno).",
    accompaniments: [],
    hasPortions: false,
    defaultPrice: 3500,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "bebida-cerveza-corona",
    name: "Cerveza Corona",
    category: "bebidas",
    badge: "Premium",
    description: "Botella de cerveza Corona helada con su respectivo limón.",
    accompaniments: ["Con rodaja de limón"],
    hasPortions: false,
    defaultPrice: 7500,
    portions: null,
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  },
  {
    id: "bebida-cerveza-nacional",
    name: "Cerveza Nacional",
    category: "bebidas",
    badge: "Bien Helada",
    description: "Cerveza colombiana helada a tu elección: Águila, Poker o Club Colombia.",
    accompaniments: ["Marca a elección"],
    hasPortions: false,
    defaultPrice: 4000,
    portions: null,
    options: [
      { name: "Marca de Cerveza", choices: ["Poker", "Águila", "Club Colombia Dorada"] }
    ],
    cardImage: null,
    fullFlyer: null,
    aspect: "square"
  }
];
