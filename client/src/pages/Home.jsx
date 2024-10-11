/* eslint-disable react/jsx-props-no-spreading */
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../assets/images/banner-1.webp";
import banner2 from "../assets/images/banner-2.webp";
import banner3 from "../assets/images/banner-3.webp";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <header role="banner">
        <Slider {...settings} className="home-carousel">
          <img src={banner1} alt="banner 1" className="carousel-img" />
          <img src={banner2} alt="banner 2" className="carousel-img" />
          <img src={banner3} alt="banner 3" className="carousel-img" />
        </Slider>
      </header>
      <section>Featured</section>
      <section>Browse and compare</section>
    </div>
  );
}
