import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Home from "./components/home/Home.jsx";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

export default function App() {
  const [lang, setLang] = useState("en");
  const [openMenu,setOpenMenu] = useState(false);

  return (
    <>
      <div className="app">
        <Navbar lang={lang} setLang={setLang} openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Menu lang={lang} openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="sections">
          <Home lang={lang}/>
          <About lang={lang}/>
          <Experience lang={lang}/>
          <Projects lang={lang}/>
          <Contact lang={lang}/>
        </div>
      </div>
    </>
  );
}
