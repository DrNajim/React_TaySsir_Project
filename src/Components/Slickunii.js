import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux'
export default function SimpleSlider (){
const Universities = useSelector(state => state.ListUniversite.Universites)
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "5em",
  slidesToShow: 3,
  speed: 500,       
  slidesToScroll: 3, 
  autoplay: true,
  autoplaySpeed: 1000,
  cssEase: "linear",
  responsive: [
    {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
};
    return (
        <Slider {...settings}>
       {Universities.map(item=>( 
       <div className="imgslider" >
        <img src={item.image} style={{height:"18rem", width:"20rem"}} alt="Universite"/>        
        </div>))}
        </Slider>
      
    )
  }
