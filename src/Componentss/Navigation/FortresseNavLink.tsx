import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { hendlerClick } from "./Navigation";


const FortresseNavLink = () => {
    return (
        <div>
            <NavLink to="/fortresse" activeClassName="activeLink">
                <div className="menu__arrow" onClick={(e) => hendlerClick(e)}></div>
                Բերդ-Ամրոցներ
            <ul className="nav__item-items">
                    <li className="nav__item-item"><Link spy={true} activeClass="item-active" to="fortresse0" smooth={true} >
                        <span className="nav__item-item-name">
                            Ամբերդ
                </span>
                    </Link></li>
                    <li className="nav__item-item"><Link spy={true} activeClass="item-active" to="fortresse1" smooth={true}>
                        <span className="nav__item-item-name">
                            Մարզպետունու
                </span>
                    </Link></li>
                    <li className="nav__item-item ">
                        <div className="menu__arrow" onClick={(e) => hendlerClick(e)}></div>
                        <Link spy={true} activeClass="item-active" to="fortresse2" smooth={true}>
                            <span className="nav__item-item-name">
                                Տիգրանակերտի
                </span>
                        </Link>
                        <ul className="nav__item-item-items">
                            <li className="nav__item-item-item"><a href="#">Տիգրանակերտի</a> </li>
                            <li className="nav__item-item-item"><a href="#">Տիգրանակերտի</a> </li>
                            <li className="nav__item-item-item"><a href="#">Տիգրանակերտի</a> </li>
                            <li className="nav__item-item-item"><a href="#">Տիգրանակերտի</a> </li>
                            <li className="nav__item-item-item"><a href="#">Տիգրանակերտի</a> </li>
                        </ul>
                    </li>
                </ul>
            </NavLink>
        </div>

    )
}


export default FortresseNavLink