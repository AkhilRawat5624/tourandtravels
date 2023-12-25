import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="images/slide1.jpg" alt="" style={{width:'100%', height:'70vh'}}/>
      </div>
      <div>
      <img src="images/slide2.jpg" alt="" style={{width:'100%', height:'70vh'}}/>
      </div>
      <div>
      <img src="images/slide3.jpg" alt="" style={{width:'100%', height:'70vh'}}/>
      </div>
    </Slider>
  );
};

export default Carousel;
