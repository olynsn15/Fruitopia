import { useEffect, useState } from "react";
import { getFruits, getFruitByID, resolveImageLink } from "../api/fruit";
import ProductModal from "../components/ProductModal";
import ProductList from "../components/ProductList";
import LoadingSpinner from "../components/LoadingSpinner";

function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // FETCHING DATA FROM API + SAVING INTO ITEMS
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await getFruits();
        const list = data.products || data;

        const withDetails = await Promise.all(
          list.map(async (p) => {
            const id =
              p.id ||
              p.product_id ||
              (p._links?.self?.href?.split("/").pop() ?? null);

            if (!id) return p;

            try {
              const detail = await getFruitByID(id);
              return {
                ...p,
                ...detail,
                image_link: resolveImageLink(detail.image_link),
              };
            } catch (e) {
              console.warn("Failed to fetch product detail for id:", id, e);
              return p;
            }
          })
        );
        setItems(withDetails);
      } catch (e) {
        console.error(e);
        setItems([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // OPEN DETAIL MODAL
  async function openDetail(id) {
    try {
      const data = await getFruitByID(id);
      setSelected({
        ...data,
        image_link: resolveImageLink(data.image_link),
      });
      setShowModal(true);
    } catch (e) {
      console.error(e);
      alert("Failed to load product details");
    }
  }

  // DISPLAYING PRODUCTS
  return (
    <div className="container py-5 mb-4 min-vh-100 d-flex flex-column justify-content-center">
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

export default Shop
