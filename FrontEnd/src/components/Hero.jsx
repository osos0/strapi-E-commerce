import shoes from "../images/banner-17.jpg";
import computer from "../images/banner-16.jpg";
import man from "../images/banner-15.jpg";
import girl from "../images/banner-25.jpg";

const Hero = () => {
  return (
    <div className="fatherHero">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 heroChildOne">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={man} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={girl} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 heroChildTwo">
            <div className="heroChildTwoCon">
              <div className="heroChildTwoConImg imgCon">
                <img src={shoes} alt="banner17" />
              </div>
              <div className="TextFlow">
                <div>NEW ARRIVALS</div>
                <h4>SUMMER</h4>
                <h4>SALES 20% OFF</h4>
              </div>
            </div>
            <div className="heroChildTwoCon">
              <div className="heroChildTwoConImg imgCon">
                <img src={computer} alt="banner16" />
              </div>
              <div className="TextFlow">
                <div>NEW ARRIVALS</div>
                <h4>SUMMER</h4>
                <h4>SALES 20% OFF</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
