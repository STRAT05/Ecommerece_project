// === shopData.js ===
// Import only the available images
import Drone1 from "../Images/FirstDroneSection/CameraDrone-Item-No.1.png";
import Drone2 from "../Images/FirstDroneSection/CameraDrone-Item-No.2.png";
import Drone3 from "../Images/FirstDroneSection/CameraDrone-Item-No.3.png";

// Example product data
const products = [
  // === ORIGINAL 1–3 ===
  {
    id: 1,
    name: "DJI Inspire 3",
    price: 15000,
    image: Drone1,
    category: "Camera Drones",
    series: "DJI Inspire"
  },
  {
    id: 2,
    name: "DJI Avata Pro",
    price: 1400,
    image: Drone2,
    category: "Camera Drones",
    series: "DJI Avata"
  },
  {
    id: 3,
    name: "DJI Mavic 3 Pro",
    price: 2200,
    image: Drone3,
    category: "Camera Drones",
    series: "DJI Mavic"
  },

  // === NEW ITEMS 4–9 (same images, new details) ===
  {
    id: 4,
    name: "DJI Air 3",
    price: 1200,
    image: Drone1,
    category: "Compact Drones",
    series: "DJI Air"
  },
  {
    id: 5,
    name: "DJI Mini 4 Pro",
    price: 950,
    image: Drone2,
    category: "Mini Drones",
    series: "DJI Mini"
  },
  {
    id: 6,
    name: "DJI Phantom 4 RTK",
    price: 6200,
    image: Drone3,
    category: "Professional Drones",
    series: "DJI Phantom"
  },
  {
    id: 7,
    name: "DJI FPV Explorer",
    price: 1800,
    image: Drone1,
    category: "FPV Drones",
    series: "DJI FPV"
  },
  {
    id: 8,
    name: "DJI Agras T40",
    price: 16500,
    image: Drone2,
    category: "Agricultural Drones",
    series: "DJI Agras"
  },
  {
    id: 9,
    name: "DJI Matrice 350 RTK",
    price: 18500,
    image: Drone3,
    category: "Industrial Drones",
    series: "DJI Matrice"
  }
];

export default products;
