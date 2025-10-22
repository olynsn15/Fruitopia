import { useState } from "react";
import RemoveConfirmModal from "./RemoveConfirmModal";

function CartItem({ item, updateQuantity }) {
  const [showModal, setShowModal] = useState(false);

  const handleDecrease = () => {
    if (item.quantity - 1 <= 0) {
      setShowModal(true);
    } else {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleConfirmRemove = () => {
    updateQuantity(item.id, 0);
    setShowModal(false);
  };

  return (
    <>
      <div className="d-flex align-items-center mb-3 p-2 border rounded">
        <img
          src={item.image || "https://via.placeholder.com/80?text=Fruit"}
          alt={item.name}
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
          className="rounded me-3"
        />
        <div className="flex-grow-1">
          <h6 className="mb-1">{item.name}</h6>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="px-3">
          <strong>{item.price * item.quantity} IDR</strong>
        </div>
      </div>

      {/* 🧩 Reusable Remove Confirmation Modal */}
      <RemoveConfirmModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={handleConfirmRemove}
        itemName={item.name}
      />
    </>
  );
}

export default CartItem;
