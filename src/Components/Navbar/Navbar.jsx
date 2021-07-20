import React from 'react'
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './navbar.scss';

export const Navbar = ({ menuState, setMenuState }) => {
    return (
        <div className={`navbar ${menuState && 'active'}`}>
            <div className="wrapper">
                <div className="left">
                    <a href="#hero" className='logo'>&lt;JH /&gt;</a>
                </div>
                <div className="itemContainer">
                    <a href="https://github.com/huirayj" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className='icon' />
                    </a>
                    <a href="mailto:huirayj@gmail.com" target="_blank" rel="noopener noreferrer">
                        <MailOutlineIcon className='icon' />
                    </a>
                    <a href="https://linkedin.com/in/justin-hui-424bab99" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className='icon' />
                    </a>
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