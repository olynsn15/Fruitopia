import { useCart } from "../context/CartContext";

function ProductModal({ product, onClose }) {
  const { addToCart } = useCart();

  if (!product) return null;

  const { name, price, description, image, unit_amount } = product;

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Fruit Detail</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body">
            <div className="row">
              <div className="col-md-5">
                {image ? (
                  <div
                    className="overflow-hidden rounded"
                    style={{ height: "250px" }}
                  >
                    <img
                      src={image}
                      alt={name}
                      className="img-fluid w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ) : (
                  <div
                    className="bg-secondary d-flex align-items-center justify-content-center text-white rounded"
                    style={{ height: "250px" }}
                  >
                    No Image Available
                  </div>
                )}
              </div>

              <div className="col-md-7">
                <h4>
                  <strong>{name}</strong>
                </h4>
                <div className="mb-4">
                  <p className="mb-0">
                    <strong>Price : {price} IDR</strong>
                  </p>
                  <p>
                    <strong>Amount : {unit_amount}</strong>
                  </p>
                </div>
                <p>{description}</p>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              className="btn btn-primary"
              onClick={() => {
                addToCart(product);
                onClose();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
