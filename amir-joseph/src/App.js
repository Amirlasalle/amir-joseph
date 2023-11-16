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
import Hobbies from './pages/Hobbies'
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
import "react-bootstrap/dist/react-bootstrap.min.js";


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


          <Route path="/hobbies" element={<Hobbies />}
          />

        </Routes>
      </div>

    </HashRouter>
  );
}

export default App;