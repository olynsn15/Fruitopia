import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"
import { BsCart } from "react-icons/bs";

function NavBar() {
  return (
    <Navbar expand="lg" bg="white" data-bs-theme="light" className="sticky-top">
      <Container className="py-1">
        <Navbar.Brand
          href="#home"
          style={{
            letterSpacing: "2px",
            fontFamily: "'SF Pro Display Heavy', 'SF Pro Display', 'SF Pro Text', -apple-system, BlinkMacSystemFont", 
            fontWeight: 800
          }}
        >
          FRUITOPIA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"
            style={{
              fontFamily: "'SF Pro Display', 'SF Pro Text', -apple-system, BlinkMacSystemFont", 
              fontWeight: 600
            }}
          >
            <Nav.Link as={Link} to="/" className="mx-2">
              Home
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/about" className="mx-2">
              About
            </Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={Link} to="/shop" className="mx-2">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/testimonials" className="mx-2">
              Testimonials
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2">
              Contact
            </Nav.Link>          
            <Nav.Link as={Link} to="/cart" className="mx-2">
              <BsCart size={20} style={{ marginTop: "-3px" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
