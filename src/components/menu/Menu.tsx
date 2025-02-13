import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@redux/store";
import { toggleMenu } from "@redux/features/menuSlice";
import styles from "./Menu.module.scss";

const Menu: React.FC = () => {
  const lang = useSelector((state: RootState) => state.language.value);
  const openMenu = useSelector((state: RootState) => state.menu.isOpen);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={`${styles.menu} ${openMenu ? styles.openMenu : ""}`}>
      <ul className={styles.menuList}>
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
