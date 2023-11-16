import { React } from 'react'
import '../../App.css'
import LOGO from '../assets/Icons/logo.svg'
import { Image } from 'react-bootstrap'
function SpinningLogo() {
  return (
    <div className="App">

    <Image src= {LOGO} className="App-logo" alt="logo" />

    </div>
  );
}

export default SpinningLogo;
