import { useState, useEffect} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Featured from './Components/Featured/Featured';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import { getCurrPage } from './utils';
import './app.scss';

const App = () => {
  const [menuState, setMenuState] = useState(false);
  const [currPage, setCurrPage] = useState('hero');

  useEffect(() => {
    setCurrPage(getCurrPage());
  }, []);

  return (
    <div className="app">
      <Navbar menuState={menuState} setMenuState={setMenuState} />
      <Menu menuState={menuState} setMenuState={setMenuState} currPage={currPage} setCurrPage={setCurrPage} />
      <div className="sections">
          <Hero />
          <About />
          <Featured />
          <Portfolio />
          <Resume />
          <Contact />
      </div>
    </div>
  );
}

export default App;
