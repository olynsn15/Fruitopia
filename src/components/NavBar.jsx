import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useCart } from "../context/CartContext";

function NavBar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar expand="lg" bg="white" data-bs-theme="light" className="sticky-top">
      <Container className="py-1 px-md-2">
        {/* LEFT SIDE - BRAND */}
        <div className="d-flex align-items-center">
          <Navbar.Brand
            as={Link}
            to="/"
            style={{
              letterSpacing: "2px",
              fontWeight: 800,
            }}
          >
            FRUITOPIA
          </Navbar.Brand>
        </div>

        {/* RIGHT SIDE (CART + TOGGLER) */}
        <div className="d-flex align-items-center">
          {/* CART ICON (small screens only) */}
          <div className="d-lg-none position-relative me-2">
            <Link to="/cart" className="text-dark position-relative">
              <BsCart size={22} />
              {itemCount > 0 && (
                <span
                  className="position-absolute badge rounded-pill bg-danger text-white"
                  style={{
                    top: "-8px",
                    right: "-10px",
                    fontSize: "0.6rem",
                    minWidth: "18px",
                    height: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* TOGGLER */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        {/* COLLAPSIBLE MENU */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-semibold align-items-lg-center">
            <Nav.Link as={Link} to="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop" className="mx-2">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/testimonials" className="mx-2">
              Testimonials
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2">
              Contact
            </Nav.Link>

            {/* CART ICON (large screens only) */}
            <Nav.Link
              as={Link}
              to="/cart"
              className="mx-2 position-relative d-none d-lg-block"
            >
              <div style={{ position: "relative", display: "inline-block" }}>
                <BsCart size={22} style={{ marginTop: "-3px" }} />
                {itemCount > 0 && (
                  <span
                    className="position-absolute badge rounded-pill bg-danger text-white"
                    style={{
                      top: "-8px",
                      right: "-10px",
                      fontSize: "0.6rem",
                      minWidth: "18px",
                      height: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {itemCount}
                  </span>
                )}
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
