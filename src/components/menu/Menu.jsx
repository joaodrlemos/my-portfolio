import "../menu/menu.scss";

export default function Menu({lang,openMenu,setOpenMenu}) {
    return (
        <div className={"menu " + (openMenu && "open-menu")}>
            <ul className="menu-list">
                <li onClick={()=>setOpenMenu(!openMenu)}><a href="#home">{lang === 'en' ? 'home' : 'introdução'}</a></li>
                <li onClick={()=>setOpenMenu(!openMenu)}><a href="#about">{lang === 'en' ? 'about' : 'sobre'}</a></li>
                <li onClick={()=>setOpenMenu(!openMenu)}><a href="#experience">{lang === 'en' ? 'experience' : 'experiência'}</a></li>
                <li onClick={()=>setOpenMenu(!openMenu)}><a href="#projects">{lang === 'en' ? 'projects' : 'projectos'}</a></li>
                <li onClick={()=>setOpenMenu(!openMenu)}><a href="#contact">{lang === 'en' ? 'contact' : 'contacto'}</a></li>
            </ul>
        </div>
    );
}
