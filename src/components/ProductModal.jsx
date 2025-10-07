import { resolveImageLink } from "../api/fruit";

function ProductModal({ product, onClose }) {
  const name = product.name || product.title || `Product ${product.id || ""}`;
  const price =
    product.price ||
    (product.prices && product.prices[0] && product.prices[0].price) ||
    "N/A";
  const vendors = product.vendors || [];
  const img =
    resolveImageLink(product.image_link) ||
    product.image ||
    (product._links &&
      product._links.image &&
      resolveImageLink(product._links.image.href));
  const modified =
    product.modified_at || product.modified || product.updated_at || "";

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{name}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-5">
                {img ? (
                  <img src={img} alt={name} className="img-fluid rounded" />
                ) : (
                  <div className="bg-secondary" style={{ height: 250 }} />
                )}
              </div>
              <div className="col-md-7">
                <h4>{name}</h4>
                <p>
                  <strong>Price:</strong> {price}
                </p>
                {vendors.length > 0 && (
                  <p>
                    <strong>Vendors:</strong>{" "}
                    {vendors.map((v) => v.name).join(", ")}
                  </p>
                )}
                {modified && (
                  <p>
                    <small className="text-muted">
                      Last modified: {new Date(modified).toLocaleString()}
                    </small>
                  </p>
                )}
                <hr />
                <p>{product.description || product.long_description || ""}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button className="btn btn-primary" disabled>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
