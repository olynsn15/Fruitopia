function ProductCard({ product, onDetail }) {
  const id =
    product.id ||
    product.product_id ||
    (product._links?.self?.href?.split("/").pop() ?? "");

  const name = product.name || product.title || `Product ${id}`;
  const img = product.image_link;
  const desc = product.description || product.short_description || "";

  return (
    <div className="col-md-3 mb-3">
      <div className="card h-100">
        {img ? (
          <img
            src={img}
            className="card-img-top"
            alt={name}
            style={{ objectFit: "cover", height: 200 }}
          />
        ) : (
          <div
            className="bg-secondary text-white d-flex align-items-center justify-content-center"
            style={{ height: 200 }}
          >
            No image
          </div>
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-truncate">{desc}</p>
          <div className="mt-auto">
            <button
              className="btn btn-primary me-2"
              onClick={() => onDetail(id)}
            >
              Details
            </button>
            <button className="btn btn-outline-secondary" disabled>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
