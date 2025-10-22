import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

function ProductList({ items, onDetail }) {
  const { addToCart } = useCart();

  if (!items || items.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="row">
      {items.map((product, idx) => (
        <ProductCard
          key={product.id || idx}
          product={product}
          onDetail={onDetail}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
