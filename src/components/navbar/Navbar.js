import './navbar.css';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const ref = useRef(null);
    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');
    const [menu, setMenu] = useState('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [isShown, setIsShown] = useState(false);

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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref.current.contains(event.target)) {
                setIsShown(false);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        };
    }, []);
 
    return (
        <div id='navbar'>
            <div id='logo-title-container'>
                <img id='sunset-logo' src='https://iili.io/HEtcis2.jpg' alt='sunset city logo'/>
                <h1 id='title'>Welcome to Sunset City</h1>
            </div>
            {
                isShown ?
                    <div id='authenticate-admin-container'>
                        <h5 id='admin-title'>Admin Login</h5>
                        <input></input>
                        <input></input>
                        <button>Login</button>
                    </div>
                : <></>
            }
            <nav>
                <div className='burger-menu' onClick={updateMenu}>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                </div>
            </nav>
            <div className={menu}>
                <ul>
                    <a className='nav-link' href='#banner-container'>Top</a>
                </ul>
                <ul>
                    <a className='nav-link' href='#banner-title'>Products</a>
                </ul>
                <ul>
                    <a className='nav-link' href='#order-info-container'>Order</a>
                </ul>
                <ul>
                    <a className='nav-link' href='#news-container'>News</a>
                </ul>
                <ul>
                    <a className='nav-link' href='#footer-container'>Bottom</a>
                </ul>
                <ul>
                    <p ref={ref} className='nav-link login' onClick={() => {
                        setIsShown(!isShown);
                    }}>Login</p>
                </ul>
            </div>
        </div>
    )
}
 
export default Navbar;