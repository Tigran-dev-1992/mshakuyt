import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../../images/logo.png"
import am from "../../images/lng/am.png"
import ru from "../../images/lng/ru.png"
import en from "../../images/lng/en.png"
import {reactLocalStorage} from 'reactjs-localstorage';
import ChurchNavLink from "./ChurchNavLink"
import TempleNavLink from "./TempeleNavLink"
import FortresseNavLink from "./FortresseNavLink"
import {LanguageType } from "../../store/reducers/church-reducer"
import { useDispatch, useSelector } from "react-redux"
import { getInitialazed } from "../../store/reducers/app-reducer"
import { langugeSelector } from "../../store/selectors/appSelector"
import { useTranslation } from "react-i18next"



export const hendlerClick = (e: React.MouseEvent<HTMLDivElement | HTMLLIElement, MouseEvent>) => {
    e.currentTarget.classList.toggle("active")
    e.currentTarget.parentElement?.classList.toggle("active")
}

const Navigation = () => {
    const [active, setActive] = useState(false)
    let items = document.querySelectorAll(".nav__item-item-name")
    items.forEach((item) => {
        item.addEventListener("click", function (e) {
            setActive(false)
        })
    })

    let y = 0
    const navVizibility = () => {
        let nav = document.querySelector(".navigation")
        if (window.scrollY > y) {
            nav?.classList.add("hidden")
            y = window.scrollY
        } else {
            nav?.classList.remove("hidden")
            y = window.scrollY
        }

    }

    document.addEventListener("scroll", navVizibility)
    const dispatch = useDispatch()

    const [t, i18n] = useTranslation()

    const changeLng = (lng: LanguageType) => {
        reactLocalStorage.set('lng', lng)
        i18n.changeLanguage(lng)
        dispatch(getInitialazed(lng))
    }

    
    
    const language = useSelector(langugeSelector)

    return (
        <div className="navigation">
            <div className={`nav__menuBg ${active ? "active" : ""} `}></div>
            <div className="nav__content d-flex justify-content-between align-items-center">
                <div className="nav__logo  d-flex align-items-center justify-content-center">
                    <img src={logo} alt="" />
                    {language !== "arm" && <img src={am} alt="" className="lng" onClick={() => changeLng("arm")} />}
                    {language !== "ru" && <img src={ru} alt="" className="lng" onClick={() => changeLng("ru")} />}
                    {language !== "en" && <img src={en} alt="" className="lng" onClick={() => changeLng("en")} />}
                </div>
                <div className={`nav__burger ${active ? "active" : ""}`} onClick={() => setActive(!active)}><span></span></div>
                <div className={`nav__menu ${active ? "active" : ""}`}>
                    <ul className="nav__items d-flex ">
                        <li className="nav__item"><NavLink to="/home" activeClassName="activeLink" >{t("Home.1")}</NavLink></li>
                        <li className="nav__item activeLink ">
                            <ChurchNavLink />
                        </li>
                        <li className="nav__item">
                            <TempleNavLink />
                        </li>
                        <li className="nav__item">
                            <FortresseNavLink />
                        </li>
                        <li className="nav__item"><NavLink to="/other" activeClassName="activeLink">{t("Other.1")}</NavLink></li>
                    </ul>
                </div>
            </div>
        </div >

    )
}

export default Navigation

