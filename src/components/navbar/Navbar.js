import './navbar.css';
import React, { useState } from 'react';

const Navbar = () => {
    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');
    const [menu, setMenu] = useState('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass('burger-bar clicked');
            setMenu('menu visible');
        } else {
            setBurgerClass('burger-bar unclicked');
            setMenu('menu hidden');
        }
        setIsMenuClicked(!isMenuClicked);
    }
 
    return (
        <div id='navbar'>
            <div id='logo-title-container'>
                <img id='sunset-logo' src='https://iili.io/HEtcis2.jpg' alt='sunset city logo'/>
                <h1 id='title'>Sunset City</h1>
            </div>
            <nav>
                <div className='burger-menu' onClick={updateMenu}>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                </div>
            </nav>
            <div className={menu}>
                <ul>
                    <a href='#banner-container'>Top</a>
                </ul>
                <ul>
                    <a href='#product-container'>Products</a>
                </ul>
                <ul>
                    <a href='#order-info-container'>Order</a>
                </ul>
                <ul>
                    <a href='#news-container'>News</a>
                </ul>
                <ul>
                    <a href='#footer-container'>Bottom</a>
                </ul>
            </div>
        </div>
    )
}
 
export default Navbar;