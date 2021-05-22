import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import Slider1 from "../images/slider-badag.jpg";
import Slider2 from "../images/slider-badging.jpg";
import Slider3 from "../images/slider-scale.jpg";
import Slider4 from "../images/slider-scales.jpg";
export default function ImageSlider() {
  let settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src={Slider1} />
      </Wrap>
      <Wrap>
        <img src={Slider2} />
      </Wrap>
      <Wrap>
        <img src={Slider3} />
      </Wrap>
      <Wrap>
        <img src={Slider4} />
      </Wrap>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  margin-top: 20px;
  .slick-list {
    overflow: visible;
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    border: 4px solid transparent;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: 0.5s;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
