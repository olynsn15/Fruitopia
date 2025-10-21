import { useState } from "react";
import { Card, Button } from "react-bootstrap";

function ProductCard({ product, onDetail, addToCart }) {
  const [hovered, setHovered] = useState(false);

  const id = product.id;
  const name = product.name;
  const img = product.image;

  return (
    <div className="col-md-3 mb-3">
      <Card
        className="border-0 position-relative"
        style={{
          width: "100%",
          height: "260px",
          overflow: "hidden",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Product Image */}
        {img ? (
          <Card.Img
            src={img}
            alt={name}
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        ) : (
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-secondary text-white d-flex align-items-center justify-content-center">
            No Image
          </div>
        )}

        {/* Overlay */}
        <div
          className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center"
          style={{
            left: 0,
            bottom: hovered ? "0" : "-100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            transition: "bottom 0.4s ease",
          }}
        >
          <h5 className="text-white text-center mb-3">{name}</h5>
          <div>
            <Button
              variant="light"
              className="me-2"
              onClick={() => onDetail(id)}
            >
              Details
            </Button>
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductCard;
