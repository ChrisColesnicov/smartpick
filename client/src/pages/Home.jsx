/* eslint-disable react/jsx-props-no-spreading */
import Slider from "react-slick";
import { useLoaderData } from "react-router-dom";

import random from "../services/utils";

import banner1 from "../assets/images/banner-1.webp";
import banner2 from "../assets/images/banner-2.webp";
import banner3 from "../assets/images/banner-3.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CompareCard from "../components/CompareCard";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const featuredSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };
  const phones = useLoaderData();
  const featuredPhones = [
    phones[random(0, phones.length - 1)],
    phones[random(0, phones.length - 1)],
    phones[random(0, phones.length - 1)],
  ];
  console.info(featuredPhones);

  return (
    <div>
      <header role="banner">
        <Slider {...settings} className="home-carousel">
          <img src={banner1} alt="banner 1" className="carousel-img" />
          <img src={banner2} alt="banner 2" className="carousel-img" />
          <img src={banner3} alt="banner 3" className="carousel-img" />
        </Slider>
      </header>
      <section>
        <h2 className="secondary-title">Featured phones</h2>
        <Slider {...featuredSettings} className="featured-carousel">
          {featuredPhones.map((phone) => (
            <CompareCard
              key={phone.phone_id}
              phone={phone}
              className="featured"
            />
          ))}
        </Slider>
      </section>
      <section>Browse and compare</section>
    </div>
  );
}
