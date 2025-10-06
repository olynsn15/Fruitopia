import { Carousel } from "react-bootstrap";
import sliderImages from "../data/sliderImages";

function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section>
        <Carousel>
          {sliderImages.map((src, i) => (
            <Carousel.Item key={i}>
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
    </div>
  );
}

export default Home;
