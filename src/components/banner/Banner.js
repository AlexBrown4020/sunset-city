import './banner.css';

export const Banner = () => {
    return (
        <div id='banner-container'>
            {/* <img alt='a city skyline at sunset' id='banner-image' src='' /> */}
            <div id='text-container'>
                <h2 id='banner-title'>About</h2>
                <div id='about-paragraph-container'>
                    <p className='about-paragraph'>This is some placeholder text to tell you about the product and entice customers. Have some flavour text, descriptors and exciting accounts about the product</p>
                    <p className='about-paragraph'>Have some keywords and hooks that grab their attention and imagination. Closing sentence to drive it home.</p>
                </div>
            </div>
        </div>
    )
};

export default Banner;