import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import Experience from './Components/Experience/Experience.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        < Projects />
        <Contact  />
        < Footer />
    </div>
  );
}

export default App;