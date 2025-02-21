import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Menu from "./components/menu/Menu";
import "@/styles/Global.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Menu />
      <div className="sections">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
