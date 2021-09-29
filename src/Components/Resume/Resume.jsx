import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import './resume.scss';

export const Resume = () => {
    const filepath = `${process.env.PUBLIC_URL}/assets/images/icons/`;
    
    return (
        <div className='resume' id='resume'>
            <div className="left">
                <h1>Familiar Technologies</h1>
                <h2>Front-end</h2>
                <div className="iconContainer">
                <img className='icon' src={`${filepath}/html5.svg`} alt='HTML5 icon' />
                    <img className='icon' src={`${filepath}/css3.svg`} alt='CSS3 icon' />
                    <img className='icon' src={`${filepath}/javascript.svg`} alt='JavaScript icon' />
                    <img className='icon' src={`${filepath}/jquery.svg`} alt='Typecript icon' />
                    <img className='icon' src={`${filepath}/bootstrap.svg`} alt='Bootstrap icon' />
                    <img className='icon' src={`${filepath}/react-native.svg`} alt='React Native icon' />
                </div>
                <h2>Back-end</h2>
                <div className="iconContainer">
                    <img className='icon' src={`${filepath}/nodejs.svg`} alt='NodeJS icon' />
                    <img className='icon' src={`${filepath}/mysql.svg`} alt='MySQL icon' />
                    <img className='icon' src={`${filepath}/mongodb.svg`} alt='MongoDB icon' />
                    <img className='icon' src={`${filepath}/apollo.svg`} alt='Apollo icon' />
                    <img className='icon' src={`${filepath}/graphql.svg`} alt='GraphQL icon' />
                </div>
                <h2>Other</h2>
                <div className="iconContainer">
                    <img className='icon' src={`${filepath}/git.svg`} alt='Git icon' />
                    <img className='icon' src={`${filepath}/typescript.svg`} alt='TypeScript icon' />
                </div>
            </div>
            <div className="right">
                <h1>Current Interests</h1>
                <div className="iconContainer">
                    <img className='icon' src={`${filepath}/vue-js.svg`} alt='Vue JS icon' />
                    <img className='icon' src={`${filepath}/bulma-css.svg`} alt='Bulma CSS icon' />
                    <img className='icon' src={`${filepath}/react-native.svg`} alt='React Native icon' />
                    <img className='icon' src={`${filepath}/python.svg`} alt='Python icon' />
                </div>

            </div>
            <div className="bottom">
                <h2>Download Resume</h2>
                <div className="resumeContainer">
                    <a href="https://drive.google.com/file/d/13Ce_u46vb2KhxeWM2T4IVf5abq-112-7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <GetAppIcon className='icon' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Resume;