import { Carousel } from "react-bootstrap";
import sliderImages from "../data/sliderImages";

function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section style={{ height: "calc(100vh - 56px)" }}>
        <Carousel className="h-100">
          {sliderImages.map((src, i) => (
            <Carousel.Item key={i} className="h-100">
              <img
                className="d-block w-100 object-fit-cover"
                style={{ height: "90vh" }}
                src={src}
                alt={`Slide ${i + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* BODY SECTION */}
      <section className="py-5 text-center bg-white">
        <div className="container">
          <h2
            className="mb-3"
            style={{
              fontFamily:
                "'SF Pro Display Bold', 'SF Pro Text', -apple-system, BlinkMacSystemFont",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            Fruit Shop
          </h2>
          <p
            className="text-muted mb-4"
            style={{
              fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont",
              fontSize: "1rem",
              lineHeight: "1.6",
            }}
          >
            Your daily dose of freshness starts at Fruitopia
          </p>
          <img
            src="../src/assets/shop-img.jpg"
            alt="Fruit Basket"
            className="img-fluid mx-auto d-block mb-4"
            style={{ maxWidth: "400px", height: "auto" }}
          />
          <a
            href="/shop"
            className="btn btn-dark px-5 py-3"
            style={{
              letterSpacing: "2px",
              fontFamily:
                "'SF Pro Display', 'SF Pro Text', -apple-system, BlinkMacSystemFont",
              fontWeight: 600,
              fontSize: 20,
              textDecoration: "none",
            }}
          >
            Buy Now
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-5 text-center bg-white">
        <div className="container">
          <h2
            className="mb-3"
            style={{
              fontFamily:
                "'SF Pro Display Bold', 'SF Pro Text', -apple-system, BlinkMacSystemFont",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            About Fruitopia
          </h2>
          <p
            className="text-muted mb-4 mx-auto"
            style={{
              fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont",
              fontSize: "1rem",
              lineHeight: "1.6",
            }}
          >
            Fruitopia started with a simple idea — to bring the joy of fresh
            fruit straight to your home. Every piece of fruit we offer is chosen
            with care, ensuring that you taste nature's best in every bite.
            We're passionate about freshness, sustainability, and helping you
            live a healthier lifestyle, one fruit at a time.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
