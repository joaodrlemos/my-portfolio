import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { toggleMenu } from "@/redux/features/menuSlice";
import "../menu/menu.scss";

const Menu: React.FC = () => {
  const lang = useSelector((state: RootState) => state.language.value);
  const openMenu = useSelector((state: RootState) => state.menu.isOpen);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={"menu " + (openMenu && "open-menu")}>
      <ul className="menu-list">
        <li onClick={() => dispatch(toggleMenu())}>
          <a href="#home">{lang === "en" ? "home" : "introdução"}</a>
        </li>
        <li onClick={() => dispatch(toggleMenu())}>
          <a href="#about">{lang === "en" ? "about" : "sobre"}</a>
        </li>
        <li onClick={() => dispatch(toggleMenu())}>
          <a href="#projects">{lang === "en" ? "projects" : "projectos"}</a>
        </li>
        <li onClick={() => dispatch(toggleMenu())}>
          <a href="#contact">{lang === "en" ? "contact" : "contacto"}</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
