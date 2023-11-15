import "../menu/menu.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../actions";

export default function Menu() {
    const {lang,openMenu} = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div className={"menu " + (openMenu && "open-menu")}>
            <ul className="menu-list">
                <li onClick={()=>dispatch(toggleMenu())}><a href="#home">{lang === 'en' ? 'home' : 'introdução'}</a></li>
                <li onClick={()=>dispatch(toggleMenu())}><a href="#about">{lang === 'en' ? 'about' : 'sobre'}</a></li>
                {/* <li onClick={()=>dispatch(toggleMenu())}><a href="#experience">{lang === 'en' ? 'experience' : 'experiência'}</a></li> */}
                <li onClick={()=>dispatch(toggleMenu())}><a href="#projects">{lang === 'en' ? 'projects' : 'projectos'}</a></li>
                <li onClick={()=>dispatch(toggleMenu())}><a href="#contact">{lang === 'en' ? 'contact' : 'contacto'}</a></li>
            </ul>
        </div>
    );
}
