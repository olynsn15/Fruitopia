import { useEffect, useState } from "react";
import { getFruits, getFruitByID } from "../api/fruit";
import ProductModal from "../components/ProductModal";
import ProductList from "../components/ProductList";
import LoadingSpinner from "../components/LoadingSpinner";
import AddToCartToast from "../components/AddToCartToast";

function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [toastProduct, setToastProduct] = useState(null); // track which product added
  const [showToast, setShowToast] = useState(false); // toast visibility

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

  // HANDLE ADD TO CART + SHOW TOAST
  function handleAddToCart(product, addToCart) {
    addToCart(product);
    setToastProduct(product);
    setShowToast(true);
  }

  return (
    <div className="container py-5 mb-4 min-vh-100 d-flex flex-column justify-content-start">
      <h2 className="mb-4">Products</h2>

      {loading ? (
        <LoadingSpinner text="Loading products..." />
      ) : (
        <ProductList
          items={items}
          onDetail={openDetail}
          onAddToCart={handleAddToCart} // new prop
        />
      )}

      {showModal && selected && (
        <ProductModal
          product={selected}
          onClose={() => setShowModal(false)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Toast for "Added to Cart" */}
      <AddToCartToast
        show={showToast}
        onClose={() => setShowToast(false)}
        productName={toastProduct?.name}
      />
    </div>
  );
}

export default Shop;
