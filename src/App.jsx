import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Home from "./components/home/Home.jsx";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import "./app.scss";
import Menu from "./components/menu/Menu";

export default function App() {
  return (
    <>
      <div className="app">
        <Navbar/>
        <Menu/>
        <div className="sections">
          <Home/>
          <About/>
          {/* <Experience/> */}
          <Projects/>
          <Contact/>
        </div>
      </div>
    </>
  );
}
