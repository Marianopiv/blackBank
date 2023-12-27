// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const quickAccesses = ["send money", "receive money"];

export const cards = [
  { type: "credit", number: "4513 - 6666 - 7481", amount: 100000 },
  { type: "debit", number: "4564 - 5558 - 3278", amount: 0 },
  { type: "credit", number: "1234 - 5678 - 9012", amount: 50000 },
  { type: "debit", number: "9876 - 5432 - 1098", amount: 3000 },
];

export const transferenceTitles = {
  1: "id",
  2: "status",
  3: "payer",
  5: "receiver",
  6: "date",
  7: "amount",
};

export const exampleTransferences = [
  { id: "01", status: "success", payer: "Juan Castro", date: "05/06/2023", amount: 5000 },
  { id: "02", status: "pending", payer: "Maria Rodriguez", date: "05/06/2023", amount: 3000 },
  { id: "03", status: "failed", payer: "Carlos Gomez", date: "05/07/2023", amount: 7000 },
  { id: "04", status: "success", payer: "Ana Martinez", date: "05/08/2023", amount: 4500 },
  { id: "05", status: "pending", payer: "Luis Hernandez", date: "05/08/2023", amount: 2000 },
  { id: "06", status: "failed", payer: "Laura Perez", date: "05/09/2023", amount: 6000 },
  { id: "07", status: "success", payer: "Pedro Sanchez", date: "05/10/2023", amount: 8000 },
];

export const typeOfCards = ["credit", "debit"];

export const statusOfTransference = ["success", "failed", "pending"];

export const navItems = [
  { text: "dashboard", to: "/home" },
  { text: "transferences", to: "/transferences" },
];

// Crear un nuevo objeto Date, que contendrá la fecha y hora actuales
export const fechaActual = new Date();

// Obtener los componentes de la fecha
export const dia = fechaActual.getDate();
export const mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por lo que se suma 1
export const año = fechaActual.getFullYear();

// Formatear la fecha como desees (en este caso, formato dd/mm/yyyy)
export const fechaFormateada = dia + "/" + mes + "/" + año;

export const randomWords = [
  "Cerulean",
  "Quasar",
  "Sphinx",
  "Nebula",
  "Aurora",
  "Pegasus",
  "Galactic",
  "Luminescent",
  "Zephyr",
  "Mystique",
  "Quantum",
  "Infinity",
  "Stellar",
  "Vortex",
  "Eclipse",
  "Serenity",
  "Nimbus",
  "Solstice",
  "Phantom",
  "Astro",
  "Crimson",
  "Celestial",
  "Velvet",
  "Obsidian",
  "Aether",
  "Zenith",
  "Harmony",
  "Paradox",
  "Tranquil",
  "Astral",
  "Ephemeral",
  "Enigma",
  "Cascade",
  "Ethereal",
  "Labyrinth",
  "Oracle",
  "Quintessence",
  "Utopia",
  "Magnetic",
  "Equinox",
  "Spectre",
  "Pandora",
  "Majestic",
  "Chronicle",
  "Resonance",
  "Tempest",
  "Vivid",
  "Cynosure",
  "Elysium",
  "Radiance",
];
