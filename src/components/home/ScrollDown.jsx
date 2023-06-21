import React from 'react'
import "./home.scss";


const ScrollDown = () => {
    return (
        <div className="scroll-down">
            <a className="mouse-wrapper">
                <span className="home__scroll-name">
                    Scroll Down
                </span>
                <span className="mouse">
                    <span className="wheel"></span>
                </span>
            </a>
        </div>
    )
}

export default ScrollDown