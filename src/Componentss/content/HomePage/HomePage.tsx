import React from "react"
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import SliderContainer from "./SliderContainer";


const HomePage = () => {
    const [t, i18n] = useTranslation()
    return (
        <div className="homePage text-center">
            <div className="homePage__slider">
                <SliderContainer />
            </div>
            <div className="homePage__info">
                <div className="homePage__title">
                    {t("Home.name")}
                </div>
                <div className="homePage__text">
                    {t("Home.content")}
                </div>
            </div>
        </div>
    )
}

export default HomePage



