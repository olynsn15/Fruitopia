import ProductCard from "./ProductCard";

function ProductList({ items, onDetail }) {
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
        />
      ))}
    </div>
  );
}

export default ProductList;
