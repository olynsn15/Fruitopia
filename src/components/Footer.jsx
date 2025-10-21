import { Col, Container, Row } from "react-bootstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPenAlt, FaPencilAlt, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <h2 className="fw-bold text-center mb-5"
          style={{
            letterSpacing: "2px" ,
            fontFamily: "'SF Pro Display', 'SF Pro Text', -apple-system, BlinkMacSystemFont", 
            fontWeight: 700
          }}
        >
          FRUITOPIA
        </h2>

        {/* CONTACT */}
        <Row className="text-center gy-3 mb-5"
          style={{
            fontFamily: "'SF Pro Display', 'SF Pro Text', -apple-system, BlinkMacSystemFont", 
            fontWeight: 600
          }}
        >
          <Col md>
            <FaMapMarkerAlt className="me-2" size={25} />
            BINUS @Anggrek
          </Col>
          <Col md>
            <FaPencilAlt className="me-2" size={25} />
            By : Earlyne, Carolyn, Irene
          </Col>
          <Col md>
            <FaEnvelope className="me-2" size={25} />
            fruitopia@gmail.com
          </Col>
        </Row>

        {/* FOOTER TEXT */}
        <p className="text-center pt-2"
          style={{
            fontFamily: "'SF Pro Display', 'SF Pro Text', -apple-system, BlinkMacSystemFont", 
            fontWeight: 500
          }}
        >
          © 2025 All rights reserve. Designed by FRUITOPIA
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
