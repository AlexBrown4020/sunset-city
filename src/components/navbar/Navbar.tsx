import './navbar.css';
import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
    const ref = useRef(null);
    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');
    const [menu, setMenu] = useState('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState('');
    

    useEffect(() => {
        setAuth(localStorage.getItem('user'));
        if (auth) {
            setAuth(auth);
        }
    }, [auth]);

    

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

    const submitData = async () => {
        let result = await fetch('https://sunset-city-api.herokuapp.com/auth/login', {
            method: 'post',
            body: JSON.stringify({
                username, password
            }),
            headers: {
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if (result.username) {
            localStorage.setItem('user', JSON.stringify(result));
            setAuth(result)
            alert('Successfully logged in as admin')
        } else {
            alert('Please enter correct details');
        }
    };

    const logout = () => {
        localStorage.setItem('user', '');
        setAuth('');
    };
 
    return (
        <div id='navbar'>
            <div id='logo-title-container'>
                <img id='sunset-logo' src='https://iili.io/HEtcis2.jpg' alt='sunset city logo'/>
                <h1 id='title'>Welcome to Sunset City</h1>
            </div>
            {
                isShown ?
                    <div id='authenticate-admin-container'>
                        <div id='authenticate-top'>
                            <h5 id='admin-title'>Admin Login</h5>
                            <div id='auth-exit' onClick={() => {
                                setIsShown(false);
                            }}>
                                X
                            </div>
                        </div>
                        <input className='submissionInput' type='text' placeholder='Enter Username' onChange={(e) => {
                            setUsername(e.target.value)}} value={username}></input>
                        <input className='submissionInput' type='text' placeholder='Enter Password' onChange={(e) => {
                            setPassword(e.target.value)}} value={password}></input>
                        <button id='login-submit-button' onClick={submitData}>Login</button>
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
                {
                    auth ? 
                    <ul onClick={logout} to={'/'}>
                        <p className='nav-link'>Logout</p>
                    </ul>
                    :
                    <ul onClick={() => {
                        setIsShown(!isShown)
                    }} to={'/'}>
                        <p ref={ref} className='nav-link login'>Login</p>
                    </ul>
                }

            </div>
        </div>
    )
}
 
export default Navbar;