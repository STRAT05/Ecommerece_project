import React, { useState, useEffect } from "react";
import productsData from "../data/shopData";
import ShopCard from "../components/ShopCard";
import ShopHeader from "../components/ShopHeader";
import CheckoutFooter from "../components/CheckoutFooter"; // ✅ Added
import "../shop.css";

import Category1 from "../Images/DroneCategories/Category1.png";
import Category2 from "../Images/DroneCategories/Category2.png";
import Category3 from "../Images/DroneCategories/Category3.png";
import Category4 from "../Images/DroneCategories/Category4.png";
import Category5 from "../Images/DroneCategories/Category5.png";
import Category6 from "../Images/DroneCategories/Category6.png";
import Category7 from "../Images/DroneCategories/Category7.png";
import Category8 from "../Images/DroneCategories/Category8.png";
import Category9 from "../Images/DroneCategories/Category9.png";

const droneSeries = [
  { name: "DJI Mavic", image: Category1 },
  { name: "DJI Air", image: Category2 },
  { name: "DJI Mini", image: Category3 },
  { name: "DJI Flip", image: Category4 },
  { name: "DJI Neo", image: Category5 },
  { name: "DJI Avata", image: Category6 },
  { name: "DJI Inspire", image: Category7 },
  { name: "DJI RC", image: Category8 },
  { name: "DJI Accessories", image: Category9 },
];

const ShopPage = () => {
  const [selectedSeries, setSelectedSeries] = useState([]);
  const [sortOption, setSortOption] = useState("Recommendation");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  useEffect(() => {
    let updated = [...productsData];

    if (selectedSeries.length > 0) {
      updated = updated.filter((p) => selectedSeries.includes(p.series));
    }

    if (sortOption === "High to Low") {
      updated.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Low to High") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Newest") {
      updated = updated.filter((p) => p.series === "DJI Mavic");
    } else if (sortOption === "Recommendation") {
      updated = updated.filter((p, i, self) => {
        return i === self.findIndex((s) => s.series === p.series);
      });
    }

    setFilteredProducts(updated);
  }, [selectedSeries, sortOption]);

  const handleCheckboxChange = (series) => {
    setSelectedSeries((prev) =>
      prev.includes(series)
        ? prev.filter((s) => s !== series)
        : [...prev, series]
    );
  };

  const handleReset = () => {
    setSelectedSeries([]);
    setSortOption("Recommendation");
    setFilteredProducts(productsData);
  };

  return (
    <div className="shop-container">
      <ShopHeader />

      {/* ===== DRONE SERIES BAR ===== */}
      <section className="drone-series-bar">
        {droneSeries.map((drone, index) => (
          <div key={index} className="drone-item">
            <img src={drone.image} alt={drone.name} />
            <p>{drone.name}</p>
          </div>
        ))}
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="shop-main">
        <aside className="filters-section">
          <h3>Product Series</h3>
          {droneSeries.slice(0, 8).map((d) => (
            <label key={d.name}>
              <input
                type="checkbox"
                checked={selectedSeries.includes(d.name)}
                onChange={() => handleCheckboxChange(d.name)}
              />{" "}
              {d.name}
            </label>
          ))}
        </aside>

        <section className="content-section">
          <div className="sort-bar">
           <div className="item-found">
            <p>{filteredProducts.length} Item(s) Found</p>
            <button className="reset-btn" onClick={handleReset}>
              Reset
            </button>
          </div>


            <div className="sort-right">
              <span>Sort by:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option>Recommendation</option>
                <option>High to Low</option>
                <option>Low to High</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          <h2 className="main-title">DJI Camera Drones</h2>

          <div
            className={`product-grid ${
              filteredProducts.length === 1 ? "single-item" : ""
            }`}
          >
            {filteredProducts.map((p) => (
              <ShopCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>

      {/* ===== FOOTER SECTION ===== */}
      <CheckoutFooter />
    </div>
  );
};

export default ShopPage;

