import "../navbar/navbar.scss";
import logo from "../../assets/logos/J-cor-08.png";
import { useSelector, useDispatch } from "react-redux";
import { changeLang, toggleMenu } from "../../actions";

export default function Navbar() {
    const {lang,openMenu} = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div className={"navbar " + (openMenu && "open-menu")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#home">
                        <img src={logo} alt="" />
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
                        <li className={lang === 'en' ? "en active" : "en"} onClick={() => dispatch(changeLang('pt'))}>
                            EN
                        </li>
                        <li className={lang === 'pt' ? "pt active" : "pt"} onClick={() => dispatch(changeLang('en'))}>
                            PT
                        </li>
                    </ul>
                </div>
                <div className="hamburguer" onClick={() => dispatch(toggleMenu())}>
                    <span className="line1" />
                    <span className="line2" />
                    <span className="line3" />
                </div>
            </div>
        </div>
    );
}
