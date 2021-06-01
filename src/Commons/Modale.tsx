import Raect, { useEffect, useState } from "react"
import AOS from 'aos';
import { useDispatch, useSelector } from "react-redux"
import { modaleActions } from "../store/reducers/modale-reducer"
import { currentIndexSelector, currentPhotoSelector, modalePhotosSelector } from "../store/selectors/modaleSelector"
import Slider from "react-slick";


const Modale = () => {
    const photos = useSelector(modalePhotosSelector)
    const currentIndex = useSelector(currentIndexSelector)
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    });

    const dispatch = useDispatch()
    let nextIndex = currentIndex + 1
    if (nextIndex === photos.length) {
        nextIndex = 0
    }
    let settings = {
        initialSlide: currentIndex,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover:false,
        pauseOnFocus:false
    }
    const hendlerClick = () => {
        dispatch(modaleActions.setModalVizible(false))
    }

    return (
        <div className="modale" data-aos="fade-right"  >
            <span className="modale__icon" onClick={hendlerClick}>&times;</span>
            <Slider {...settings}>
                {photos.map(ph => {
                    return <div><img src={ph} alt="" /></div>
                })}
            </Slider>

        </div>
    )
}

export default Modale