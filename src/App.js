import './App.css';
import { useState } from "react"
import Imgrender from './conponents/images';
import Inputs from './conponents/inputs';
import Iphone from './conponents/iphone';
import Mac from './conponents/mac';
import Nav from './conponents/nav';
import Pricing from './conponents/pricing';
import Skills from './conponents/skills';
import Statics from './conponents/statics';
import Team from './conponents/team';
import Map from './conponents/map';
import Footer from './conponents/footer';

function App() {
  let [open, setOpen] = useState(false)
  return (
    <div className="App">
      <Nav open={open} setOpen={setOpen} />
      {
        open &&
        <div className='popup-nav'>
          <button onClick={()=> setOpen(!open)} className='close-popup'>X</button>
          <div className='nav-back'>
          <li>
            Logo
          </li>

            <li>
              About
            </li>
            <li>
              Team
            </li>
            <li>
              Work
            </li>
            <li>
              Pricing
            </li>
            <li> Concact</li>
            </div>
        </div>
      }
      <Mac />
      <Iphone />
      <div className="teamsdiv">
        <Team num={4} />
      </div>
      <Statics />
      <h3 className='center'>OUR WORK</h3>
      <p className='center2'>What we've done for people</p>
      <Imgrender />
      <Skills />
      <Pricing />
      <Inputs />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
