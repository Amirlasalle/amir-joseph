// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header/Header';

// function App() {
//   return (
//     <div className="App">

//         <Header />
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//     </div>
//   );
// }

// export default App;
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home/HomePage';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Resume from './pages/Resume'
import Experiences from './pages/Experiences'


function App() {
  return (
    <HashRouter >

      <div id='root' className="flex-column justify-flex-start min-100-vh">
        <Navbar />
        <Routes>

          <Route path="/" element={<HomePage />}
          />

          <Route path="/aboutme" element={<AboutMe />}
          />

          <Route path="/contact" element={<Contact />}
          />

          <Route path="/portfolio" element={<Portfolio />}
          />

          <Route path="/services" element={<Services />}
          />

          <Route path="/testimonials" element={<Testimonials />}
          />

          <Route path="/resume" element={<Resume />}
          />

          <Route path="/experiences" element={<Experiences />}
          />


        </Routes>
      </div>

    </HashRouter>
  );
}

export default App;