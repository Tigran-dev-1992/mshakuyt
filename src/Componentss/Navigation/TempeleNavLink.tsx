import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { hendlerClick } from "./Navigation";


const TempleNavLink = () => {

    const [t, i18n] = useTranslation()
    return (
        <div>
            <NavLink to="/temple" activeClassName="activeLink">
                <div className="menu__arrow" onClick={(e) => hendlerClick(e)}></div>
                                {t("Temples.1")}
                                <ul className="nav__item-items">
                    <li className="nav__item-item"><Link spy={true} activeClass="item-active" to="temple0" smooth={true} >
                        <span className="nav__item-item-name">
                            {t("Temples.items.1")}
                                            </span>
                    </Link></li>
                    <li className="nav__item-item"><Link spy={true} activeClass="item-active" to="temple1" smooth={true}>
                        <span className="nav__item-item-name">
                        {t("Temples.items.2")}
                                            </span>
                    </Link></li>
                    <li className="nav__item-item ">
                        <div className="menu__arrow" onClick={(e) => hendlerClick(e)}></div>
                        <Link spy={true} activeClass="item-active" to="temple2" smooth={true}>
                            <span className="nav__item-item-name">
                            {t("Temples.items.3")}
                                            </span>
                        </Link>
                        <ul className="nav__item-item-items">
                            <li className="nav__item-item-item"><a href="#">{t("Temples.items.item.1")}</a> </li>
                            <li className="nav__item-item-item"><a href="#">{t("Temples.items.item.1")}</a> </li>
                            <li className="nav__item-item-item"><a href="#">{t("Temples.items.item.1")}</a> </li>
                            <li className="nav__item-item-item"><a href="#">{t("Temples.items.item.1")}</a> </li>
                            <li className="nav__item-item-item"><a href="#">{t("Temples.items.item.1")}</a> </li>
                        </ul>
                    </li>
                </ul>
            </NavLink>
        </div>

    )
}


export default TempleNavLink