import './navbar.css';

export const Navbar = () => {
    return (
        <div id='navbar'>
            <div id='logo-title-container'>
                <img id='sunset-logo' src='https://iili.io/HEtcis2.jpg' alt='sunset city logo'/>
                <h1 id='title'>Sunset City</h1>
            </div>
            <nav id='nav-button-container'>
                <button className='nav-button products'>Products</button>
                <button className='nav-button order'>Order</button>
                <button className='nav-button news'>News</button>
                <button className='nav-button contact'>Contact</button>
            </nav>
        </div>
    )
}
 
export default Navbar;