import { Toast, ToastContainer } from "react-bootstrap";

function EmptyCartToast({ show, onClose }) {
  return (
    <ToastContainer position="bottom-center" className="mb-4">
      <Toast show={show} onClose={onClose} delay={3000} autohide bg="warning">
        <Toast.Header>
          <strong className="me-auto">Notice</strong>
        </Toast.Header>
        <Toast.Body>
          Your cart is empty! Please add items before checkout.
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default EmptyCartToast;
