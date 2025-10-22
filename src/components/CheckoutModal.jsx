// src/components/CheckoutModal.jsx
import { Modal, Button } from "react-bootstrap";

function CheckoutModal({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Checkout Successful!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Your order has been placed successfully. Thank you for shopping with
          us!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CheckoutModal;
