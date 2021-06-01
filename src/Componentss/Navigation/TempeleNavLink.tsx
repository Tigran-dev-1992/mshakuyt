import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { hendlerClick } from "./Navigation";


const TempleNavLink = () => {
    return (
        <div>
            <NavLink to="/temple" activeClassName="activeLink">
                <div className="menu__arrow" onClick={(e) => hendlerClick(e)}></div>
                                Տաճարներ
                                <ul className="nav__item-items">
                    <li className="nav__item-item"><Link spy={true} activeClass="item-active" to="temple0" smooth={true} >
                        <span className="nav__item-item-name">
                            Գառնու
                                            </span>
                    </Link></li>
                    <li className="nav__item-item"><Link spy={true} activeClass="item-active" to="temple1" smooth={true}>
                        <span className="nav__item-item-name">
                            Զվարթնոցի
                                            </span>
                    </Link></li>
                    <li className="nav__item-item ">
                        <div className="menu__arrow" onClick={(e) => hendlerClick(e)}></div>
                        <Link spy={true} activeClass="item-active" to="temple2" smooth={true}>
                            <span className="nav__item-item-name">
                                Էջմիածնի
                                            </span>
                        </Link>
                        <ul className="nav__item-item-items">
                            <li className="nav__item-item-item"><a href="#">Էջմիածնի</a> </li>
                            <li className="nav__item-item-item"><a href="#">Էջմիածնի</a> </li>
                            <li className="nav__item-item-item"><a href="#">Էջմիածնի</a> </li>
                            <li className="nav__item-item-item"><a href="#">Էջմիածնի</a> </li>
                            <li className="nav__item-item-item"><a href="#">Էջմիածնի</a> </li>
                        </ul>
                    </li>
                </ul>
            </NavLink>
        </div>

    )
}


export default TempleNavLink