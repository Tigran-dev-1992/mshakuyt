import React from "react";
import { NavLink} from "react-router-dom";
import { Link } from "react-scroll";
import { hendlerClick } from "./Navigation";


const ChurchNavLink = () => {
    return (
        <div>
            <NavLink to="/church" activeClassName="activeLink">
                <div className="menu__arrow" onClick={(e) => hendlerClick(e)}></div>
    Եկեղեցիներ
            <ul className="nav__item-items">
                    <li className="nav__item-item"><Link spy={true} activeClass="item-active" to="church0" smooth={true} >
                        <span className="nav__item-item-name">
                            Օձունի
                </span>
                    </Link></li>
                    <li className="nav__item-item"><Link spy={true} activeClass="item-active" to="church1" smooth={true}>
                        <span className="nav__item-item-name">
                            Բջնու
                </span>
                    </Link></li>
                    <li className="nav__item-item ">
                        <div className="menu__arrow" onClick={(e) => hendlerClick(e)}></div>
                        <Link spy={true} activeClass="item-active" to="church2" smooth={true}>
                            <span className="nav__item-item-name">
                                Ս.Աստվածածին
                </span>
                        </Link>
                        <ul className="nav__item-item-items">
                            <li className="nav__item-item-item"><a href="#">Ս.Աստվածածին</a> </li>
                            <li className="nav__item-item-item"><a href="#">Ս.Աստվածածին</a> </li>
                            <li className="nav__item-item-item"><a href="#">Ս.Աստվածածին</a> </li>
                            <li className="nav__item-item-item"><a href="#">Ս.Աստվածածին</a> </li>
                            <li className="nav__item-item-item"><a href="#">Ս.Աստվածածին</a> </li>
                        </ul>
                    </li>
                </ul>
            </NavLink>
        </div>

    )
}


export default ChurchNavLink
