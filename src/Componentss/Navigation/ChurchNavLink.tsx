import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { hendlerClick } from "./Navigation";


const ChurchNavLink = () => {
    const [t, i18n] = useTranslation()
    return (
        <div>
            <NavLink to="/church" activeClassName="activeLink">
                <div className="menu__arrow" onClick={(e) => hendlerClick(e)}></div>
    {t("Churches.1")}
            <ul className="nav__item-items">
                    <li className="nav__item-item">
                        <Link activeClass="item-active" to="church0" smooth={true} >
                            <span className="nav__item-item-name">
                                {t("Churches.items.1")}
                            </span>
                        </Link>
                    </li>
                    <li className="nav__item-item"><Link activeClass="item-active" to="church1" smooth={true}>
                        <span className="nav__item-item-name">
                        {t("Churches.items.2")}
                </span>
                    </Link></li>
                    <li className="nav__item-item ">
                        <div className="menu__arrow" onClick={(e) => hendlerClick(e)}></div>
                        <Link spy={true} activeClass="item-active" to="church2" smooth={true} >
                            <span className="nav__item-item-name">
                            {t("Churches.items.3")}
                </span>
                        </Link>
                        <ul className="nav__item-item-items">
                            <li className="nav__item-item-item"><a href="#">{t("Churches.items.item.1")}</a> </li>
                            <li className="nav__item-item-item"><a href="#">{t("Churches.items.item.1")}</a> </li>
                            <li className="nav__item-item-item"><a href="#">{t("Churches.items.item.1")}</a> </li>
                            <li className="nav__item-item-item"><a href="#">{t("Churches.items.item.1")}</a> </li>
                            <li className="nav__item-item-item"><a href="#">{t("Churches.items.item.1")}</a> </li>
                        </ul>
                    </li>
                </ul>
            </NavLink>
        </div>

    )
}


export default ChurchNavLink
