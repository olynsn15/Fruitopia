import { useEffect, useState } from "react";
import { getFruits, getFruitByID } from "../api/fruit";
import ProductModal from "../components/ProductModal";
import ProductList from "../components/ProductList";
import LoadingSpinner from "../components/LoadingSpinner";

function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // FETCH FROM API
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await getFruits();
        setItems(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to load fruits:", error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  // OPEN PRODUCT DETAIL MODAL
  async function openDetail(id) {
    try {
      const fruit = await getFruitByID(id);
      setSelected(fruit);
      setShowModal(true);
    } catch (error) {
      console.error("Failed to load product detail:", error);
      alert("Failed to load product detail.");
    }
  }

  return (
    <div className="container py-5 mb-4 min-vh-100 d-flex flex-column justify-content-start">
      <h2 className="mb-4">Products</h2>

      {loading ? (
        <LoadingSpinner text="Loading products..." />
      ) : (
        <ProductList items={items} onDetail={openDetail} />
      )}

      {showModal && selected && (
        <ProductModal product={selected} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default Shop;
