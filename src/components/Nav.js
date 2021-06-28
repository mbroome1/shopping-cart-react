import React from 'react'
import { Link } from "react-router-dom";
import "./../styles/nav.css";

export default function Nav(props) {
    return (

        <nav className="nav">
            <div className="nav__container">
                <div className="nav__logo">LOGO</div>
                <div className="nav__right">
                    <div className="nav__cart">Cart {props.cartCount}</div>
                    <ul clasname="nav__list">
                        <li className="nav__list__item"><Link className="nav__list__item--link" to="/">Home</Link></li>
                        <li className="nav__list__item"><Link className="nav__list__item--link" to="/About">About</Link></li>
                        <li className="nav__list__item"><Link className="nav__list__item--link" to="/Catalogue">Catalogue</Link></li>
                        <li className="nav__list__item"><Link className="nav__list__item--link" to="/Checkout">Checkout</Link></li>
                    </ul>
                </div>
                
            </div>

        </nav>
    )
}
