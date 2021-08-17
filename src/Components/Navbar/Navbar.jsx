import React from 'react'
import './navbar.scss';

export const Navbar = ({ menuState, setMenuState }) => {
    return (
        <div className={`navbar ${menuState && 'active'}`}>
            <div className="wrapper">
                <div className="left">
                    <a href="#hero" className='logo'>&lt;JH /&gt;</a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuState(!menuState)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;