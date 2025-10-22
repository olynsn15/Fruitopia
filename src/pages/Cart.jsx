import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import CheckoutModal from "../components/CheckoutModal";
import EmptyCartToast from "../components/EmptyCartToast";

function Cart() {
  const { cart, updateQuantity } = useCart();
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showEmptyToast, setShowEmptyToast] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (cart.length === 0) {
      setShowEmptyToast(true);
      return;
    }
    setShowCheckoutModal(true);
  };

  const handleCloseCheckout = () => {
    setShowCheckoutModal(false);
    // Clear cart after checkout success
    updateQuantity(null, 0); // this will trigger below fix in CartContext
  };

  return (
    <div className="container min-vh-100 d-flex justify-content-center py-5">
      <div className="row w-100">
        {/* CART ITEMS */}
        <div className="col-md-6 border-end d-flex flex-column pe-4">
          <h3 className="mb-4">Your Cart</h3>
          <div className="flex-grow-1 overflow-auto">
            {cart.length === 0 ? (
              <p>No items added.</p>
            ) : (
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateQuantity={updateQuantity}
                />
              ))
            )}
          </div>
        </div>

        {/* TOTAL PRICE */}
        <div className="col-md-6 d-flex flex-column ps-4">
          <h3>Summary</h3>
          <div className="border rounded p-4 bg-white shadow-sm">
            <p>
              <strong>Subtotal :</strong> {subtotal} IDR
            </p>
            <p>
              <strong>Tax :</strong> {tax} IDR
            </p>
            <hr />
            <h5>
              <strong>Total : {total} IDR</strong>
            </h5>
            <button
              className="btn btn-primary w-100 mt-3"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* MODALS */}
      <CheckoutModal show={showCheckoutModal} onClose={handleCloseCheckout} />
      <EmptyCartToast
        show={showEmptyToast}
        onClose={() => setShowEmptyToast(false)}
      />
    </div>
  );
}

export default Cart;
