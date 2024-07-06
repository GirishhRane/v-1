import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Otherskills from "./components/Otherskills";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Otherskills></Otherskills>
        <Contact />
      </div>
    </>
  );
}

export default App;
