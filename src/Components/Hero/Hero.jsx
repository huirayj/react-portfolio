import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './hero.scss';

export const Hero = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Front-end', 'Back-end', 'Full Stack']
        });
    }, []);

    return (
        <div className='hero' id='hero'>
            <div className="left">
                <div className="imgContainer">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/avatar.svg`} alt="An avatar." />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello There, I'm</h2>
                    <h1>Justin Hui</h1>
                    <h3>
                        An Aspiring <span ref={textRef}></span> Developer.
                    </h3>
                </div>
            </div>
            <div className="bottom">
                <a href='#about'>
                    <ExpandMoreIcon className='icon' />
                </a>
            </div>
        </div>
    );
}

export default Hero;