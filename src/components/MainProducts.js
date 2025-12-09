import React, { useEffect, useState } from "react";
import api from "../api/client";
import "../main.css";

export default function MainProducts({ variant }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get("/products");
        const list = res.data || [];

        // Example: pick top by purchases or just first 8
        const sorted = [...list].sort(
          (a, b) => (b.purchases || 0) - (a.purchases || 0)
        );
        setProducts(sorted.slice(0, 8));
      } catch (err) {
        console.error(err);
        const msg =
          err.response?.data?.message || "Failed to load products";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [variant]);

  if (loading) return <section className="text-section">Loading...</section>;
  if (error)
    return (
      <section className="text-section">
        <p style={{ color: "red" }}>{error}</p>
      </section>
    );

  return (
    <section className="text-section">
      <h1>Our Top Drones</h1>
      <h2>
        Discover our most popular drones, loved by our customers for their
        performance
      </h2>

      <div className="product-grid fade-in">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            {p.image && (
              <img
                src={
                  p.image.startsWith("http")
                    ? p.image
                    : `/storage/${p.image}`
                }
                alt={p.name}
              />
            )}
            <div className="product-info">
              <p className="tag">
                <span>New</span> • Lightweight Stabilizer
              </p>
              <h3>{p.name}</h3>
              <p className="desc">{p.description}</p>
              <p className="price">₱{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
