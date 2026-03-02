const cart = [];
let domicilioActual = 0;

/* ================= DOM ================= */

const barrioSelect = document.getElementById("barrio");
const costoDomicilioSpan = document.getElementById("costo-domicilio");
const totalElement = document.getElementById("total");

/* ================= TARIFAS ================= */

const tarifasDomicilio = {
  Fonaviemcali: 2000,
  "Los alcazares": 2000,
  "San luis 2": 2000,
  "San luis 2 - Ciudad de cali": 3000,
  "Sa Luis 1": 3000,
  "Metropolitano del norte": 3000,
  "Villa del sol": 3000,
  "Paso del comercio": 3000,
  "Oasis de comfandi": 3000,
  Comfenalco: 3000,
  "Plazas verde": 3000,
  "Los andes": 4000,
  Guaduales: 4000,
  Calimio: 4000,
  "Flora industrial": 4000,
  Floralia: 4000,
  Chiminangos: 4000,
  "La rivera": 4000,
  "Los alamos": 4000,
  Guayacanes: 4000,
  "Brisa de los alamos": 5000,
  Barranquilla: 5000,
  "Torres de comfandi": 4000,
  "Brisas del guavito": 5000,
  "Quintas de salomia": 5000,
  "Tejares de salomia": 5000,
  Petecuy: 5000,
  "El saman": 5000,
  Salomia: 5000,
  "La mercerd": 5000,
  "Los almendros": 5000,
  "Villa de veracruz": 5000,
  "La flora": 5000,
  Vipasa: 5000,
  "Prados del norte": 5000,
  "Villa del prado": 5000,
  "Santa barbara": 5000,
  "La dolores": 5000,
  "Cauca seco": 5000,
  "Cali bella": 6000,
  "Alfonso lopez": 7000,
  Versalles: 7000,
  Menga: 7000,
  "Altos de menga": 7000,
};
const productsData = {
  /*SALCHIPAPAS*/
  Maxichichos: {
    name: "Maxichichos",
    price: 50000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Pollo desmechado", price: 5000 },
      { name: "Chorizo", price: 5000 },
      { name: "Carne de hamburguesa", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Maicitos", price: 4000 },
      { name: "Maduro", price: 4000 },
    ],
  },
  Megafamiliar: {
    name: "Mega familiar",
    price: 30000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Pollo desmechado", price: 5000 },
      { name: "Chorizo", price: 5000 },
      { name: "Carne de hamburguesa", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Maicitos", price: 4000 },
      { name: "Maduro", price: 4000 },
    ],
  },
  Mega: {
    name: "Mega",
    price: 25000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Pollo desmechado", price: 5000 },
      { name: "Chorizo", price: 5000 },
      { name: "Carne de hamburguesa", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Maicitos", price: 4000 },
      { name: "Maduro", price: 4000 },
    ],
  },
  Madura: {
    name: "Madura",
    price: 22000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Pollo desmechado", price: 5000 },
      { name: "Chorizo", price: 5000 },
      { name: "Carne de hamburguesa", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Maicitos", price: 4000 },
      { name: "Maduro", price: 4000 },
    ],
  },
  Mixta: {
    name: "Mixta",
    price: 22000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Pollo desmechado", price: 5000 },
      { name: "Chorizo", price: 5000 },
      { name: "Carne de hamburguesa", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Maicitos", price: 4000 },
      { name: "Maduro", price: 4000 },
    ],
  },
  SalchiBurguer: {
    name: "Salchi-Burguer",
    price: 15000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Pollo desmechado", price: 5000 },
      { name: "Chorizo", price: 5000 },
      { name: "Carne de hamburguesa", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Maicitos", price: 4000 },
      { name: "Maduro", price: 4000 },
    ],
  },
  SalchiEspecial: {
    name: "Salchi-Especial",
    price: 15000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Pollo desmechado", price: 5000 },
      { name: "Chorizo", price: 5000 },
      { name: "Carne de hamburguesa", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Maicitos", price: 4000 },
      { name: "Maduro", price: 4000 },
    ],
  },
  Gratinada: {
    name: "Gratinada",
    price: 12000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Pollo desmechado", price: 5000 },
      { name: "Chorizo", price: 5000 },
      { name: "Carne de hamburguesa", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Maicitos", price: 4000 },
      { name: "Maduro", price: 4000 },
    ],
  },
  SalchiSencilla: {
    name: "Salchi-Sencilla",
    price: 9000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Pollo desmechado", price: 5000 },
      { name: "Chorizo", price: 5000 },
      { name: "Carne de hamburguesa", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Maicitos", price: 4000 },
      { name: "Maduro", price: 4000 },
    ],
  },
  SalchiCriolla: {
    name: "Salchi-Criolla",
    price: 9000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Pollo desmechado", price: 5000 },
      { name: "Chorizo", price: 5000 },
      { name: "Carne de hamburguesa", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Maicitos", price: 4000 },
      { name: "Maduro", price: 4000 },
    ],
  },
  /*HAMBURGUESAS*/
  Patrona: {
    name: "Patrona",
    price: 26000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Carne de hamburuguesa", price: 5000 },
    ],
  },
  Angust: {
    name: "Angust",
    price: 20000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Carne de hamburuguesa", price: 5000 },
    ],
  },
  Depollo: {
    name: "Hamburguesa de pollo",
    price: 17000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Carne de hamburuguesa", price: 5000 },
    ],
  },
  HambEspecial: {
    name: "Hamburguesa especial",
    price: 20000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Carne de hamburuguesa", price: 5000 },
    ],
  },
  HambuSuper: {
    name: "Hamburguesa super",
    price: 14000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Carne de hamburuguesa", price: 5000 },
    ],
  },
  HambuJunior: {
    name: "Hamburguesa junior",
    price: 10000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Carne de hamburuguesa", price: 5000 },
    ],
  },
  PicadaBarrilFamiliar: {
    name: "Picada al barril familiar",
    price: 60000,
    diasPermitidos: [4, 5, 6, 0],
    extras: [{ name: "Coca cola 1.5 Litros", price: 7000 }],
  },
  PicadaBarrilDos: {
    name: "Picada al barril para 2",
    price: 45000,
    diasPermitidos: [4, 5, 6, 0],
    extras: [{ name: "Coca cola 1 Litro", price: 5000 }],
  },
  PicadaBarrilPersonal: {
    name: "Picada al barril personal",
    price: 32000,
    diasPermitidos: [4, 5, 6, 0],
    extras: [{ name: "Coca cola personal 400ml", price: 3500 }],
  },
  PicadaTradicionalFamiliar: {
    name: "Picada tradicional familiar",
    price: 48000,
    extras: [{ name: "Coca cola 1.5 Litros", price: 7000 }],
  },
  PicadaTradicionalDos: {
    name: "Picada tradicional para 2",
    price: 32000,
    extras: [{ name: "Coca cola 1 Litro", price: 5000 }],
  },
  MaduroGratinadoBarril: {
    name: "Maduro gratinado al barril",
    price: 12000,
    diasPermitidos: [4, 5, 6, 0],
    extras: [{ name: "Coca cola personal 400ml", price: 3500 }],
  },
  CostillaSanLuis: {
    name: "Costilla san luis",
    price: 30000,
    diasPermitidos: [4, 5, 6, 0],
    extras: [{ name: "Coca cola personal 400ml", price: 3500 }],
  },
  FileteCerdo: {
    name: "Filete de cerdo",
    price: 22000,
    extras: [
      { name: "Coca cola personal", price: 3500 },
      { name: "Botella de agua", price: 2500 },
    ],
  },
  FiletePollo: {
    name: "Filete de pollo",
    price: 22000,
    extras: [
      { name: "Coca cola personal", price: 3500 },
      { name: "Botella de agua", price: 2500 },
    ],
  },
  CarneAsada: {
    name: "Carne asada",
    price: 22000,
    extras: [
      { name: "Coca cola personal", price: 3500 },
      { name: "Botella de agua", price: 2500 },
    ],
  },
  Chorizo: {
    name: "Chorizo",
    price: 7000,
    extras: [
      { name: "Coca cola personal", price: 3500 },
      { name: "Botella de agua", price: 2500 },
    ],
  },
  LaDoble: {
    name: "2x1 Doble",
    price: 26000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Carne de hamburuguesa", price: 5000 },
      { name: "Porcion de papas a la francesa", price: 7000 },
      { name: "Coca cola 1 Litro", price: 5000 },
    ],
  },
  LaCallejera: {
    name: "2x1 Callejeras",
    price: 22000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Carne de hamburuguesa", price: 5000 },
      { name: "Porcion de papas a la francesa", price: 7000 },
      { name: "Coca cola 1 Litro", price: 5000 },
    ],
  },
  LaClasica: {
    name: "2x1 Clasicas",
    price: 18000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Carne de hamburuguesa", price: 5000 },
      { name: "Porcion de papas a la francesa", price: 7000 },
      { name: "Coca cola 1 Litro", price: 5000 },
    ],
  },
  Dosx1PerroEspecial: {
    name: "2x1 Perro especial",
    price: 20000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Porcion de papas a la francesa", price: 7000 },
      { name: "Coca cola 1 Litro", price: 5000 },
    ],
  },
  Dosx1SuperPerro: {
    name: "2x1 Super perro",
    price: 16000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Porcion de papas a la francesa", price: 7000 },
      { name: "Coca cola 1 Litro", price: 5000 },
    ],
  },
  Dosx1PerroSencillo: {
    name: "2x1 Perro sencillo",
    price: 15000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Porcion de papas a la francesa", price: 7000 },
      { name: "Coca cola 1 Litro", price: 5000 },
    ],
  },
  ComboDos: {
    name: "Combo 2",
    price: 30000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Carne de hamburuguesa", price: 5000 },
    ],
  },
  Combo3: {
    name: "Combo 3",
    price: 24000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Carne de hamburuguesa", price: 5000 },
    ],
  },
  Combo1: {
    name: "Combo 1",
    price: 18000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Carne de hamburuguesa", price: 5000 },
    ],
  },
  PerroEspecial: {
    name: "Perro especial",
    price: 15000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
    ],
  },
  SuperPerro: {
    name: "Super perro",
    price: 14000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
    ],
  },
  PerroSencillo: {
    name: "Perro sencillo",
    price: 12000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
    ],
  },
  PapasFrancesa: {
    name: "Porcion de papas a la francesa",
    price: 10000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Pollo desmechado", price: 5000 },
      { name: "Chorizo", price: 5000 },
      { name: "Carne de hamburguesa", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Maicitos", price: 4000 },
      { name: "Maduro", price: 4000 },
    ],
  },
  PapasCriolla: {
    name: "Porcion de papas amarilla",
    price: 10000,
    extras: [
      { name: "Queso blanco", price: 4000 },
      { name: "Tocineta", price: 5000 },
      { name: "Pollo desmechado", price: 5000 },
      { name: "Chorizo", price: 5000 },
      { name: "Carne de hamburguesa", price: 5000 },
      { name: "Cebolla caramelizada", price: 4000 },
      { name: "Maicitos", price: 4000 },
      { name: "Maduro", price: 4000 },
    ],
  },
  JugosNaturales: {
    name: "Jugos Frappé",
    price: 8000,
    sabores: [
      { name: "Mango", price: 0 },
      { name: "Mora", price: 0 },
      { name: "Lulo", price: 0 },
      { name: "Fresa", price: 0 },
      { name: "Maracuya", price: 0 },
    ],
  },
  JugosLeche: {
    name: "Jugos en leche",
    price: 9000,
    sabores: [
      { name: "Mango", price: 0 },
      { name: "Mora", price: 0 },
      { name: "Lulo", price: 0 },
      { name: "Fresa", price: 0 },
      { name: "Maracuya", price: 0 },
    ],
  },
  Limonadas: {
    name: "Limonadas",
    price: 0,
    sabores: [
      { name: "Natural", price: 7000 },
      { name: "Cerezada", price: 7000 },
      { name: "Fresa", price: 7000 },
      { name: "De coco", price: 9000 },
      { name: "Hierba buena", price: 9000 },
    ],
  },
  CocaPersonal: {
    name: "Coca cola personal",
    price: 3500,
  },
  QuatroPersonal: {
    name: "Quatro personal",
    price: 3500,
  },
  CocaCola1L: {
    name: "Coca cola 1 Litro",
    price: 5000,
  },
  CocaCola15L: {
    name: "Coca cola 1.5 Litro",
    price: 7000,
  },
  Quatro15L: {
    name: "Quatro 1.5 Litro",
    price: 7000,
  },
  EconolitroPostobon: {
    name: "Econolitro postobon",
    price: 5000,
    sabores: [
      { name: "Manzana", price: 0 },
      { name: "Uva", price: 0 },
      { name: "Pepsi", price: 0 },
      { name: "Colombia", price: 0 },
    ],
  },
  HitPersonal: {
    name: "Hit personal",
    price: 3500,
    sabores: [
      { name: "Mango", price: 0 },
      { name: "Mora", price: 0 },
      { name: "Tropical", price: 0 },
    ],
  },
  BotellaAgua: {
    name: "Botella de agua",
    price: 2500,
  },
  Cerveza: {
    name: "cerveza en lata",
    price: 4000,
    sabores: [
      { name: "Aguila light", price: 0 },
      { name: "Club dorada", price: 0 },
      { name: "Poker", price: 0 },
    ],
  },
};

//horario de apertura
// ===============================
// CONFIGURACIÓN
// ===============================
const CONFIG = {
  timezone: "America/Bogota",
  diasPermitidos: [0, 1, 3, 4, 5, 6], // Dom, Lun, Mié, Jue, Vie, Sáb
  horaApertura: 17, // 5:00 PM
  minutoApertura: 0,
  horaCierre: 23,
  minutoCierre: 30,
};

// ===============================
// UTILIDADES
// ===============================
function obtenerFechaCali() {
  const ahora = new Date();
  return new Date(ahora.toLocaleString("en-US", { timeZone: CONFIG.timezone }));
}

function convertirAMinutos(fecha) {
  return fecha.getHours() * 60 + fecha.getMinutes();
}

// ===============================
// ESTADO DEL NEGOCIO
// ===============================
function obtenerEstadoNegocio() {
  const ahora = obtenerFechaCali();
  const dia = ahora.getDay();
  const minutosActuales = convertirAMinutos(ahora);

  const aperturaMin = CONFIG.horaApertura * 60 + CONFIG.minutoApertura;
  const cierreMin = CONFIG.horaCierre * 60 + CONFIG.minutoCierre;

  const abiertoHoy = CONFIG.diasPermitidos.includes(dia);
  const dentroHorario =
    minutosActuales >= aperturaMin && minutosActuales <= cierreMin;

  return {
    abierto: abiertoHoy && dentroHorario,
    ahora,
  };
}

function calcularTiempoRestante() {
  const ahora = obtenerFechaCali();
  const proximaApertura = new Date(ahora);

  proximaApertura.setHours(CONFIG.horaApertura, CONFIG.minutoApertura, 0, 0);

  if (ahora >= proximaApertura) {
    proximaApertura.setDate(proximaApertura.getDate() + 1);
  }

  const diferencia = proximaApertura - ahora;

  const horas = Math.floor(diferencia / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

  return `${horas}h ${minutos}m`;
}

// ===============================
// UI - ESTADO MINIMALISTA
// ===============================
function actualizarEstadoUI() {
  const estado = obtenerEstadoNegocio();
  const indicador = document.getElementById("estadoNegocio");
  const contador = document.getElementById("contadorApertura");
  const boton = document.getElementById("sendWhatsApp");

  if (estado.abierto) {
    indicador.textContent = "🟢 Abierto";
    indicador.classList.remove("cerrado");
    indicador.classList.add("abierto");

    contador.textContent = "";
    boton.disabled = false;
    boton.style.opacity = "1";
  } else {
    indicador.textContent = "🔴 Cerrado";
    indicador.classList.remove("abierto");
    indicador.classList.add("cerrado");

    contador.textContent = `Abrimos en ${calcularTiempoRestante()}`;
    boton.disabled = true;
    boton.style.opacity = "0.5";
  }
}

// ===============================
// FILTRO POR DÍA
// ===============================
function filtrarProductosPorDia() {
  const hoy = obtenerFechaCali().getDay();

  document.querySelectorAll(".product-card").forEach((card) => {
    const productId = card.dataset.id;
    const producto = productsData[productId];

    if (producto?.diasPermitidos && !producto.diasPermitidos.includes(hoy)) {
      card.style.display = "none";
    } else {
      card.style.display = "flex"; // importante si tu card usa flex
    }
  });
}

// ===============================
// INICIALIZACIÓN
// ===============================
function iniciarSistema() {
  actualizarEstadoUI();
  filtrarProductosPorDia();
  setInterval(actualizarEstadoUI, 60000);
}

document.addEventListener("DOMContentLoaded", iniciarSistema);
/* ================= CAMBIO DE BARRIO ================= */

barrioSelect.addEventListener("change", function () {
  const barrio = this.value;
  domicilioActual = tarifasDomicilio[barrio] || 0;

  costoDomicilioSpan.textContent = domicilioActual.toLocaleString();
  updateCartUI();
});

/* ================= MODAL ================= */
const modalImage = document.getElementById("modalImage");
const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const extrasContainer = document.getElementById("extrasContainer");
const productQty = document.getElementById("productQty");
const modalTotal = document.getElementById("modalTotal");

let currentProduct = null;
let quantity = 1;

/* ================= ABRIR MODAL ================= */

document.querySelectorAll(".add-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".product-card");
    const productId = card.dataset.id;

    currentProduct = productsData[productId];

    // 🔥 Reset precio dinámico
    currentProduct.precioSabor = null;

    modalTitle.textContent = currentProduct.name;

    const productImage = card.querySelector(".product-img").src;
    modalImage.src = productImage;
    modalImage.alt = currentProduct.name;

    extrasContainer.innerHTML = "";

    /* ================= EXTRAS ================= */

    if (currentProduct.extras && currentProduct.extras.length > 0) {
      currentProduct.extras.forEach((extra) => {
        extrasContainer.innerHTML += `
          <div class="extra-item">
            <div class="extra-info">
              <span>${extra.name}</span>
              <span>$${extra.price.toLocaleString()}</span>
            </div>

            <div class="extra-qty-controls">
              <button type="button" onclick="changeExtraQty(this, -1)">-</button>
              <span class="extra-qty">0</span>
              <button type="button" onclick="changeExtraQty(this, 1)">+</button>
            </div>

            <input type="hidden"
                   class="extra-data"
                   data-name="${extra.name}"
                   data-price="${extra.price}"
                   value="0">
          </div>
        `;
      });
    }

    /* ================= SABORES (BOTONES) ================= */

    if (currentProduct.sabores && currentProduct.sabores.length > 0) {
      extrasContainer.innerHTML += `
    <div class="extra-item">
      <div class="extra-info">
        <strong>Selecciona el sabor:</strong>
      </div>

      <div class="sabores-container">
        ${currentProduct.sabores
          .map(
            (s) => `
            <button 
              type="button"
              class="sabor-btn"
              data-name="${s.name}"
              data-price="${s.price}">
              ${s.name} ${
                s.price > 0 ? "($" + s.price.toLocaleString() + ")" : ""
              }
            </button>
          `,
          )
          .join("")}
      </div>
    </div>
  `;
    }

    /* ================= RESET CANTIDAD ================= */

    quantity = 1;
    productQty.textContent = quantity;

    /* ================= ACTUALIZAR TOTAL ================= */

    updateTotal();

    /* ================= MOSTRAR MODAL ================= */

    modal.classList.add("active");
  });
});
/* ================= SELECCIÓN DE SABOR ================= */

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("sabor-btn")) {
    // Quitar selección anterior
    document
      .querySelectorAll(".sabor-btn")
      .forEach((btn) => btn.classList.remove("active"));

    // Activar el seleccionado
    e.target.classList.add("active");

    // Guardar precio dinámico
    const precio = parseInt(e.target.dataset.price || 0);
    currentProduct.precioSabor = precio;

    updateTotal();
  }
});
function changeExtraQty(button, change) {
  const container = button.closest(".extra-item");
  const qtySpan = container.querySelector(".extra-qty");
  const hiddenInput = container.querySelector(".extra-data");

  let qty = parseInt(qtySpan.textContent);
  qty += change;

  // Límite mínimo y máximo
  if (qty < 0) qty = 0;
  if (qty > 5) qty = 5;

  qtySpan.textContent = qty;
  hiddenInput.value = qty;

  // Animación
  qtySpan.classList.add("qty-bounce");
  setTimeout(() => {
    qtySpan.classList.remove("qty-bounce");
  }, 200);

  updateTotal();
}

/* ================= CANTIDAD ================= */

document.getElementById("plusQty").onclick = () => {
  quantity++;
  productQty.textContent = quantity;
  updateTotal();
};

document.getElementById("minusQty").onclick = () => {
  if (quantity > 1) quantity--;
  productQty.textContent = quantity;
  updateTotal();
};

/* ================= TOTAL MODAL ================= */
function updateTotal() {
  let extrasTotal = 0;

  document.querySelectorAll(".extra-data").forEach((input) => {
    const qty = parseInt(input.value);
    const price = parseInt(input.dataset.price);
    extrasTotal += qty * price;
  });

  const ajusteSabor = currentProduct.precioSabor || 0;

  const total = (currentProduct.price + ajusteSabor + extrasTotal) * quantity;

  modalTotal.textContent = total.toLocaleString();
}

/* ================= CONFIRMAR PRODUCTO ================= */

document.getElementById("confirmAdd").onclick = () => {
  let extrasList = [];

  document.querySelectorAll(".extra-data").forEach((extra) => {
    const qty = parseInt(extra.value);

    if (qty > 0) {
      extrasList.push(`${qty}x ${extra.dataset.name}`);
    }
  });

  const notes = document.getElementById("productNotes").value;

  let saborElegido = "";

  if (currentProduct.sabores) {
    const saborActivo = document.querySelector(".sabor-btn.active");

    if (!saborActivo) {
      Swal.fire({
        icon: "warning",
        title: "Selecciona un sabor",
        confirmButtonColor: "#ff6600",
      });
      return;
    }

    saborElegido = saborActivo.dataset.name;
  }

  function calcularTotalNumerico() {
    let extrasTotal = 0;

    document.querySelectorAll(".extra-data").forEach((input) => {
      const qty = parseInt(input.value);
      const price = parseInt(input.dataset.price);
      extrasTotal += qty * price;
    });

    const ajusteSabor = currentProduct.precioSabor || 0;

    return (currentProduct.price + ajusteSabor + extrasTotal) * quantity;
  }

  const totalNumerico = calcularTotalNumerico();

  cart.push({
    name: currentProduct.name + (saborElegido ? ` (${saborElegido})` : ""),
    quantity,
    extras: extrasList,
    notes,
    price: totalNumerico,
  });
  updateCartUI();
  closeModal();
};

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
  document.getElementById("productNotes").value = "";
}

document.getElementById("closeModal").onclick = closeModal;

/* ================= CARRITO ================= */

const cartIcon = document.getElementById("cartIcon");
const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

cartIcon.onclick = () => {
  cartPanel.classList.toggle("active");
};

function updateCartUI() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <div style="margin-bottom:10px;border-bottom:1px solid #eee;padding-bottom:6px">
        <strong>${item.quantity}x ${item.name}</strong><br>
        ${item.extras.length ? "Extras: " + item.extras.join(", ") + "<br>" : ""}
        ${item.notes ? "Obs: " + item.notes + "<br>" : ""}
        $${item.price.toLocaleString()}<br>
        <button onclick="removeItem(${index})"
          style="background:#ff4d00;color:white;border:none;padding:4px 8px;border-radius:6px;margin-top:4px;cursor:pointer;">
          Eliminar
        </button>
      </div>
    `;
  });

  const totalFinal = total + domicilioActual;

  cartTotal.textContent = totalFinal.toLocaleString();
  cartCount.textContent = cart.length;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCartUI();
}

/* ================= FACTURACIÓN ================= */

const needInvoice = document.getElementById("needInvoice");
const invoiceDetails = document.getElementById("invoiceDetails");

needInvoice.addEventListener("change", function () {
  invoiceDetails.style.display = this.checked ? "block" : "none";
});

function animarRepartidor() {
  const runner = document.getElementById("runner");

  runner.classList.add("active");

  setTimeout(() => {
    runner.classList.remove("active");
  }, 4000);
}

/* ================= WHATSAPP FINAL ================= */

document.getElementById("sendWhatsApp").addEventListener("click", function () {
  if (cart.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Faltan datos",
      text: "El carrito esta vacio",
      confirmButtonColor: "#ff6600",
    });
    return;
  }

  const name = document.getElementById("clientName").value.trim();
  const lastName = document.getElementById("clientLastName").value.trim();
  const phone = document.getElementById("clientPhone").value.trim();
  const email = document.getElementById("clientEmail").value.trim();
  const address = document.getElementById("clientAddress").value.trim();
  const barrio = barrioSelect.value;
  const paymentMethodFinal =
    document.getElementById("paymentMethodFinal").value;
  const invoiceDetails = document.getElementById("invoiceDetails").value.trim();
  const privacyAccepted = document.getElementById("acceptPrivacy").checked;

  if (!privacyAccepted) {
    Swal.fire({
      icon: "error",
      title: "Politicas de privacidad",
      text: "Aceptas las politicas de privacidad para continuar",
      confirmButtonColor: "#ff6600",
    });
    return;
  }
  if (!name || !phone || !address || !barrio) {
    Swal.fire({
      icon: "error",
      title: "Faltan datos",
      text: "Completa nombre, teléfono, dirección y barrio",
      confirmButtonColor: "#ff6600",
    });
    return;
  }

  if (!paymentMethodFinal) {
    Swal.fire({
      icon: "error",
      title: "Faltan datos",
      text: "Selecciona un medio de pago",
      confirmButtonColor: "#ff6600",
    });
    return;
  }

  let message = `Hola, me gustaría hacer el siguiente pedido:\n\n`;

  let total = 0;

  cart.forEach((item) => {
    message += `${item.quantity}x ${item.name}\n`;

    if (item.extras.length) message += `Extras: ${item.extras.join(", ")}\n`;

    if (item.notes) message += `Obs: ${item.notes}\n`;

    message += `Subtotal: $${item.price.toLocaleString()}\n\n`;

    total += item.price;
  });

  const totalFinal = total + domicilioActual;

  message += `Barrio: ${barrio}\n`;
  message += `Domicilio: $${domicilioActual.toLocaleString()}\n`;
  message += `Método de pago: ${paymentMethodFinal}\n`;
  message += `TOTAL: $${totalFinal.toLocaleString()}\n\n`;

  message += `----- DATOS DEL CLIENTE -----\n`;
  message += `Nombre: ${name} ${lastName}\n`;
  message += `Teléfono: ${phone}\n`;
  message += `Correo: ${email}\n`;
  message += `Dirección: ${address}\n`;
  message += `Facturacion electronica: ${invoiceDetails}`;

  const businessPhone = "573187217532";

  const url = `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`;

  // Activar animación
  animarRepartidor();

  // Pequeño delay para que se vea arrancar el personaje
  setTimeout(() => {
    window.open(url, "_blank");
  }, 1000);

  // Recargar después de que termine la animación
  setTimeout(() => {
    location.reload();
  }, 4500);
});
