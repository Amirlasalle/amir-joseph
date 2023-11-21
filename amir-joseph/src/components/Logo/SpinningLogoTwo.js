import { React } from 'react'
import '../../App.css'
import LOGO from '../assets/Icons/logoTwo.svg'
import { Image } from 'react-bootstrap'
function SpinningLogo() {
  return (
    <div className="logo-container">

    <Image src= {LOGO} className="App-logo" alt="logo" />

    </div>
  );
}

export default SpinningLogo;
