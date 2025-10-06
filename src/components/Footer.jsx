import { Col, Container, Row } from "react-bootstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <h2 className="fw-bold text-center mb-5">NINOM</h2>

        {/* CONTACT */}
        <Row className="text-center gy-3 mb-5">
          <Col md>
            <FaMapMarkerAlt className="me-2" size={25} />
            Passages of Lorem Ipsum Available
          </Col>
          <Col md>
            <FaPhoneAlt className="me-2" size={25} />
            Call : +012334567890
          </Col>
          <Col md>
            <FaEnvelope className="me-2" size={25} />
            demo@gmail.com
          </Col>
        </Row>

        {/* FOOTER TEXT */}
        <p className="text-center pt-2">
          © 2025 All rights reserve. Design by NINOM
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
