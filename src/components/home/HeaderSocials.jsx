import React from 'react';
import './home.scss';

const HeaderSocials = () => {
    return (
        <div className="home__socials" target="_blank">
            <a href="https://www.instagram.com/nhattan445/" className="home__socials-link">
                <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.facebook.com/nhattan.nguyen.988373/" className="home__socials-link">
                <i className="fa-brands fa-facebook"></i>
            </a>
            
            <a href="https://www.behance.net/" className="home__socials-link">
                <i className="fa-brands fa-behance"></i>
            </a>

            <a href="https://dribbble.com
" className="home__socials-link">
                <i className="fa-brands fa-dribbble"></i>
            </a>

            <a href="pinterest.com" className="home__socials-link">
                <i className="fa-brands fa-pinterest"></i>
            </a>
        </div>
    );
}

export default HeaderSocials