import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import './resume.scss';

export const Resume = () => {
    return (
        <div className='resume' id='resume'>
            <div className="left">
                <h1>Familiar Technologies</h1>
                <div className="iconContainer">
                    <img className='icon'src='assets/images/icons/html5.svg' alt='HTML5 icon' />
                    <img className='icon'src='assets/images/icons/css3.svg' alt='CSS3 icon' />
                    <img className='icon'src='assets/images/icons/javascript.svg' alt='JavaScript icon' />
                    <img className='icon'src='assets/images/icons/bootstrap.svg' alt='Bootstrap icon' />
                    <img className='icon'src='assets/images/icons/react-native.svg' alt='React Native icon' />
                    <img className='icon'src='assets/images/icons/nodejs.svg' alt='NodeJS icon' />
                    <img className='icon'src='assets/images/icons/mysql.svg' alt='MySQL icon' />
                    <img className='icon'src='assets/images/icons/mongodb.svg' alt='MongoDB icon' />
                    <img className='icon'src='assets/images/icons/typescript.svg' alt='Typecript icon' />
                </div>

            </div>
            <div className="right">
                <h1>Current Interests</h1>
                <div className="iconContainer">
                    <img className='icon' src='assets/images/icons/vue-js.svg' alt='Vue JS icon' />
                    <img className='icon' src='assets/images/icons/bulma-css.svg' alt='Bulma CSS icon' />
                    <img className='icon' src='assets/images/icons/react-native.svg' alt='React Native icon' />
                    <img className='icon' src='assets/images/icons/python.svg' alt='Python icon' />
                </div>

            </div>
            <div className="bottom">
                <h2>Download Resume</h2>
                <div className="resumeContainer">
                    <a href="https://drive.google.com/file/d/1uQRjzE05aUhfg01iaakMOORl6Vl_-6Sp/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <GetAppIcon className='icon' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Resume;