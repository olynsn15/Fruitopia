import { Toast, ToastContainer } from "react-bootstrap";

function AddToCartToast({ show, onClose, productName }) {
  return (
    <ToastContainer
      position="bottom-center"
      className="mb-4"
      style={{
        zIndex: 2000, // ensure it’s above everything
        position: "fixed", // keep it fixed on screen
        bottom: 0, // stick to bottom
        left: 0,
        right: 0,
      }}
    >
      <Toast show={show} onClose={onClose} delay={2500} autohide bg="success">
        <Toast.Header>
          <strong className="me-auto">Added to Cart</strong>
        </Toast.Header>
        <Toast.Body className="text-white">
          {productName
            ? `${productName} has been added to your cart.`
            : "Item added to cart!"}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default AddToCartToast;
