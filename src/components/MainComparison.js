import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Mavic4Pro from "../Images/DroneCategories/Category1.png";
import Air3S from "../Images/DroneCategories/Category2.png";
import Mini5Pro from "../Images/DroneCategories/Category1.png";
import Flip from "../Images/DroneCategories/Category4.png";
import Avata2 from "../Images/DroneCategories/Category4.png";
import Avata from "../Images/DroneCategories/Category2.png";
import FPV from "../Images/DroneCategories/Category1.png";

const aerialDrones = [
  {
    img: Mavic4Pro,
    name: "DJI Mavic 4 Pro",
    series: "DJI Mavic",
    specs: [
      "< 1063 g Takeoff Weight",
      "51-min Max Flight Time",
      "4/3 CMOS Hasselblad Main + Tele + Medium Camera",
      "6K/60fps HDR Max Video",
      "100 MP Max Photo",
      "Omnidirectional Obstacle Sensing",
      "DJI O4+ Up to 20 km",
    ],
  },
  {
    img: Air3S,
    name: "DJI Air 3S",
    series: "DJI Air",
    specs: [
      "< 724 g Takeoff Weight",
      "45-min Max Flight Time",
      "1-inch CMOS Wide + Ultra Medium Camera",
      "4K/60fps HDR Max Video",
      "50 MP Max Photo",
      "Omnidirectional Obstacle Sensing",
      "DJI O4+ Up to 20 km",
    ],
  },
  {
    img: Mini5Pro,
    name: "DJI Mini 5 Pro",
    series: "DJI Mini",
    specs: [
      "< 249.9 g Takeoff Weight",
      "37/52-min Max Flight Time Dual Battery 36",
      "1-inch CMOS Camera",
      "4K/60fps HDR Max Video",
      "50 MP Max Photo",
      "Omnidirectional Obstacle Sensing",
      "DJI O4+ Up to 12 km",
    ],
  },
  {
    img: Flip,
    name: "DJI Flip",
    series: "DJI Flip",
    specs: [
      "< 249 g Takeoff Weight",
      "31-min Max Flight Time Single Powered Battery",
      "1/1.3 CMOS Camera",
      "4K/60fps HDR Max Video",
      "48 MP Max Photo",
      "Forward & Downward Sensing",
      "DJI O4 Up to 10 km",
    ],
  },
];

const immersiveDrones = [
  {
    img: Avata2,
    name: "DJI Avata 2",
    series: "DJI Avata",
    outOfStock: true,
    specs: [
      "377 g Takeoff Weight",
      "Built-in Propeller Guard",
      "23-min Max Flight Time",
      "O4 HD Video Transmission (13km)",
      "1/1.3-inch CMOS",
      "155° Ultra-Wide FOV",
      "RockSteady & HorizonSteady",
    ],
  },
  {
    img: Avata,
    name: "DJI Avata",
    series: "DJI Avata",
    outOfStock: true,
    specs: [
      "410 g Takeoff Weight",
      "Built-in Propeller Guard",
      "18-min Max Flight Time",
      "O3+ Video Transmission (10km)",
      "1/1.7-inch CMOS",
      "155° Ultra-Wide FOV",
      "RockSteady & HorizonSteady",
    ],
  },
  {
    img: FPV,
    name: "DJI FPV",
    series: "DJI Avata",
    outOfStock: true,
    specs: [
      "795 g Takeoff Weight",
      "Built-in Propeller Guard",
      "16-min Max Flight Time",
      "O3 Video Transmission (10km)",
      "1/2.3-inch CMOS",
      "150° Ultra-Wide FOV",
      "RockSteady Stabilization",
    ],
  },
];

export default function MainComparison() {
  const [tab, setTab] = useState("aerial");
  const navigate = useNavigate();

  const drones = tab === "aerial" ? aerialDrones : immersiveDrones;

  const handleLearnMore = (series) => {
    navigate(`/shop?series=${encodeURIComponent(series)}`);
  };

  return (
    <section className="drone-comparison">
      <h2 className="comparison-title">Which camera drone is right for you?</h2>

      <div className="comparison-tabs">
        <span
          className={`tab ${tab === "aerial" ? "active" : ""}`}
          onClick={() => setTab("aerial")}
        >
          Aerial Imaging
        </span>
        <span
          className={`tab ${tab === "immersive" ? "active" : ""}`}
          onClick={() => setTab("immersive")}
        >
          Immersive Flight
        </span>
      </div>

      <div className="drone-grid fade-in">
        {drones.map((drone, index) => (
          <div className="drone-card" key={index}>
            <img src={drone.img} alt={drone.name} />
            <h3>{drone.name}</h3>
            {drone.outOfStock && (
              <div className="out-of-stock">Not in stock</div>
            )}
            <button
              type="button"
              className="learn-link"
              onClick={() => handleLearnMore(drone.series)}
            >
              Learn More →
            </button>
            <ul className="drone-specs">
              {drone.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
