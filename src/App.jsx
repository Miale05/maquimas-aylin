import { useState } from "react";
import mobileAutoBanner from "./assets/mobile-banner-autos.png";
import webAutoBanner from "./assets/web-banner-autos.png";
import mobileCasaBanner from "./assets/mobile-banner-casa.png";
import webCasaBanner from "./assets/web-banner-casa.png";
import "./App.css";
import Menu from "./components/Menu.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu />
        
        {/* CAROUSEL BANNERS */}
        <div
          id="carouselBannersAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="autos">
                <img src={mobileAutoBanner} className="d-block d-sm-none w-100" alt="Mobile Auto Banner" />
                <img src={webAutoBanner} className="d-none d-sm-block w-100" alt="Web Auto Banner" />
              </a>
            </div>
            <div className="carousel-item">
              <a href="inmuebles">
                <img src={mobileCasaBanner} className="d-block d-sm-none w-100" alt="Mobile Casa Banner" />
                <img src={webCasaBanner} className="d-none d-sm-block w-100" alt="Web Casa Banner" />
              </a>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselBannersAutoplaying"
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
            data-bs-target="#carouselBannersAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


    </>
  );
}

export default App;
