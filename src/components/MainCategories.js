import React from "react";
import { useNavigate } from "react-router-dom";

import Category1 from "../Images/DroneCategories/Category1.png";
import Category2 from "../Images/DroneCategories/Category2.png";
import Category3 from "../Images/DroneCategories/Category3.png";
import Category4 from "../Images/DroneCategories/Category4.png";
import Category5 from "../Images/DroneCategories/Category5.png";
import Category6 from "../Images/DroneCategories/Category6.png";
import Category7 from "../Images/DroneCategories/Category7.png";
import Category8 from "../Images/DroneCategories/Category8.png";
import Category9 from "../Images/DroneCategories/Category9.png";

const categories = [
  { img: Category1, label: "DJI Mavic",  series: "DJI Mavic" },
  { img: Category2, label: "DJI Air",    series: "DJI Air" },
  { img: Category3, label: "DJI Mini",   series: "DJI Mini" },
  { img: Category4, label: "DJI Flip",   series: "DJI Flip" },
  { img: Category5, label: "DJI Neo",    series: "DJI Neo" },
  { img: Category6, label: "DJI Avata",  series: "DJI Avata" },
  { img: Category7, label: "DJI Inspire",series: "DJI Inspire" },
  { img: Category8, label: "RC",         series: "DJI RC" },
  { img: Category9, label: "Accessories",series: "DJI Accessories" },
];

export default function MainCategories() {
  const navigate = useNavigate();

  const handleClick = (series) => {
    // ShopPage can read this from querystring and pre‑select the filter
    navigate(`/shop?series=${encodeURIComponent(series)}`);
  };

  return (
    <section className="categories fade-in">
      <div className="drone-container">
        {categories.map((c) => (
          <div
            className="drone-item"
            key={c.label}
            onClick={() => handleClick(c.series)}
            style={{ cursor: "pointer" }}
          >
            <img src={c.img} alt={c.label} />
            <p>{c.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
