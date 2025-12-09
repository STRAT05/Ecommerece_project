import React from "react";

const ShopSortBar = ({ sortOption, onSortChange, count }) => {
  return (
    <div className="shop-sortbar">
      <p className="product-count">{count} Item(s) Found</p>

      <div className="sort-section">
        <label>Sort by: </label>
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="recommendation">Recommendation</option>
          <option value="popularity">Popularity</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
};

export default ShopSortBar;
