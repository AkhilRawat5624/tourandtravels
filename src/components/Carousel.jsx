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
        <img src="https://savetoursandtravels.com/wp-content/uploads/2023/09/kerala1.jpg" alt="" style={{width:'100%', height:'70vh'}}/>
      </div>
      <div>
      <img src="https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2023/10/var.jpg" alt="" style={{width:'100%', height:'70vh'}}/>
      </div>
      <div>
      <img src="https://uttarakhandexperts.com/wp-content/uploads/2022/07/1587597395_10.jpg" alt="" style={{width:'100%', height:'70vh'}}/>
      </div>
    </Slider>
  );
};

export default Carousel;
