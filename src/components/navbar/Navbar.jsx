import "../navbar/navbar.scss";
import logo from "../../assets/logos/J-cor-08.png";

export default function Navbar({lang,setLang}) {

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#home">
                        <img src={logo} alt=""/>
                    </a>
                </div>
                <div className="middle">
                    <ul>
                        <li>
                            <a href="#home">{lang === 'en' ? 'home' : 'introdução'}</a>
                        </li>
                        <li>
                            <a href="#about">{lang === 'en' ? 'about' : 'sobre'}</a>
                        </li>
                        <li>
                            <a href="#experience">{lang === 'en' ? 'experience' : 'experiência'}</a>
                        </li>
                        <li>
                            <a href="#projects">{lang === 'en' ? 'projects' : 'projectos'}</a>
                        </li>
                        <li>
                            <a href="#contact">{lang === 'en' ? 'contact' : 'contacto'}</a>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li className={lang === 'en' ? "en active" : "en"} onClick={()=> setLang("en")}>
                            EN 
                        </li>
                        <li className={lang === 'pt' ? "pt active" : "pt"} onClick={()=> setLang("pt")}>
                            PT 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
