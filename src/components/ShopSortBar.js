import React from "react";

const ShopSortBar = ({ sortOption, onSortChange, count, onReset }) => {
  return (
    <div className="shop-sortbar">
      <div className="product-count">
        <p>{count} Item(s) Found</p>
        {onReset && (
          <button type="button" className="reset-btn" onClick={onReset}>
            Reset
          </button>
        )}
      </div>

      <div className="sort-section">
        <label>Sort by: </label>
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="Recommendation">Recommendation</option>
          <option value="High to Low">High to Low</option>
          <option value="Low to High">Low to High</option>
          <option value="Newest">Newest</option>
        </select>
      </div>
    </div>
  );
};

export default ShopSortBar;
