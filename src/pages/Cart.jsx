import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, updateQuantity } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="container min-vh-100 d-flex justify-content-center py-5">
      <div className="row w-100">
        {/* Left - Cart List */}
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

        {/* Right - Summary */}
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
            <button className="btn btn-primary w-100 mt-3">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
