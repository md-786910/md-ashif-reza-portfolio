import React from 'react'
import Features from './components/feature/Features';
import Layouts from './components/Layouts'
import Service from "./components/services/Service"
import About from './components/about/About';
import Experience from "./components/experience/Experience"
import Contact from "./components/contact/Contact"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"
function App() {
  return (
    <>
      <Layouts>
        <Features />
        <About />
        <Service />
        <Experience />
        <Contact />

      </Layouts>
    </>
  );
}

export default App;
