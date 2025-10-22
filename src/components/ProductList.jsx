import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

function ProductList({ items, onDetail, onAddToCart }) {
  const { addToCart } = useCart();

  if (!items || items.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="row">
      {items.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDetail={onDetail}
          addToCart={() => onAddToCart(product, addToCart)} // fix toast trigger
        />
      ))}
    </div>
  );
}

export default ProductList;
