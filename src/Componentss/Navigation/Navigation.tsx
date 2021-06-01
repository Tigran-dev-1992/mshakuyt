import React, {  useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../../images/logo.png"

import ChurchNavLink from "./ChurchNavLink"
import TempleNavLink from "./TempeleNavLink"
import FortresseNavLink from "./FortresseNavLink"



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
    return (
        <div className="navigation">
            <div className={`nav__menuBg ${active ? "active" : ""} `}></div>
            <div className="nav__content d-flex justify-content-between align-items-center">
                <div className="nav__logo">
                    <img src={logo} alt="" />
                </div>
                <div className={`nav__burger ${active ? "active" : ""}`} onClick={() => setActive(!active)}><span></span></div>
                <div className={`nav__menu ${active ? "active" : ""}`}>
                    <ul className="nav__items d-flex ">
                        <li className="nav__item"><NavLink to="/home" activeClassName="activeLink" >Գլխավոր</NavLink></li>
                        <li className="nav__item activeLink ">
                            <ChurchNavLink />
                        </li>
                        <li className="nav__item">
                            <TempleNavLink />
                        </li>
                        <li className="nav__item">
                            <FortresseNavLink />
                        </li>
                        <li className="nav__item"><NavLink to="/other" activeClassName="activeLink">Այլ վայրեր</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Navigation

