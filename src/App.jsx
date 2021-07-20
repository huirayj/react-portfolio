import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Hero from './Components/Hero/Hero';
import Portfolio from './Components/Portfolio/Portfolio';
import Carousel from './Components/Carousel/Carousel';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import { getCurrPage } from './utils';
import './app.scss';

const App = () => {
  const [menuState, setMenuState] = useState(false);
  const [currPage, setCurrPage] = useState('hero');
  // const target = document.querySelector(".sections");
  // const rootRef = useRef(null);

  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1.0
  // };

  // const myFirstObserver = new IntersectionObserver((elements) => {
  //   elements.forEach((element) => console.log("element", element));
  // }, options);

  // myFirstObserver.observe(target);
  // const { ref, inView, entry } = useInView(options);

  useEffect(() => {
    setCurrPage(getCurrPage());
  }, []);

  return (
    <div className="app">
      <Navbar menuState={menuState} setMenuState={setMenuState} />
      <Menu menuState={menuState} setMenuState={setMenuState} currPage={currPage} setCurrPage={setCurrPage} />
      <div className="sections">
        <Hero />
        <Portfolio />
        <Carousel />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
