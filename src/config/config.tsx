// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { IoWaterSharp } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";
import { MdOutlineCellWifi } from "react-icons/md";
import { MdOutlineLocalHospital } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { DocumentData } from "firebase/firestore";


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

export const typeOfCards = ["credit", "debit"];

export const statusOfTransference = ["success", "failed", "pending"];

export const navItems = [
  { text: "dashboard", to: "/home" },
  { text: "transferences", to: "/transferences" },
  { text: "pay services", to: "/pay-services" },
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

export const optionsData = [
  { label: "name", value: "name,Maru Botano" },
  { label: "email", value: "marubotano666@gmail.com,email" },
  { label: "alias", value: "alias,MURO.GALLO.JUEGO" },
  { label: "cbu", value: "cbu,9261842271361614811447" },
];
//Esto para armar el options

export const publicServices = [
  { type: "water", Icon: IoWaterSharp,color:"hover:bg-cyan-500" },
  { type: "electricity", Icon: MdElectricBolt,color:"hover:bg-yellow-500" },
  { type: "internet", Icon: MdOutlineCellWifi, color:"hover:bg-blue-500" },
  { type: "hospital", Icon: MdOutlineLocalHospital, color:"hover:bg-red-500" },
  {type:"telephone",Icon:FaPhone, color:"hover:bg-green-500" }
];

export const tempUserData = (tempUser:DocumentData) => [
  { text: tempUser.name, label: "name" },
  { text: tempUser.email, label: "email" },
  { text: tempUser.alias, label: "alias" },
  { text: tempUser.cbu, label: "cbu" },
] 
