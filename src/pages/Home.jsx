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
                className="d-block w-100 h-100"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                src={src}
                alt={`Slide ${i + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </div>
  );
}

export default Home;
