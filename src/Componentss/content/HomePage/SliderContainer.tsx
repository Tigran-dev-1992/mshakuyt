import React from "react"
import { useDispatch } from "react-redux";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import { useClear } from "../../../Commons/Buildings/Building";
// import "slick-carousel/slick/slick-theme.css";
import a from "../../../images/sliderImg/slider1.jpg"
import b from "../../../images/sliderImg/slider2.jpeg"
import c from "../../../images/sliderImg/slider3.jpg"




const SliderContainer = () => {

    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const dispatch = useDispatch()
  useClear(dispatch)
    return (
        <>
            <Slider {...settings}>
                < div className="homePage__img"> <img src={a} alt="" /></div >
                <div className="homePage__img"><img src={b} alt="" /></div>
                <div className="homePage__img"><img src={c} alt="" /></div>
            </Slider>
        </>
    )
}

export default SliderContainer



