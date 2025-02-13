import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@redux/store";
import { setLanguage } from "@redux/features/languageSlice";
import { toggleMenu } from "@redux/features/menuSlice";
import styles from "./Navbar.module.scss";
import logo from "@/assets/logos/J-cor-08.png";

const Navbar: React.FC = () => {
  const lang = useSelector((state: RootState) => state.language.value);
  const openMenu = useSelector((state: RootState) => state.menu.isOpen);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={`${styles.navbar} ${openMenu ? styles.openMenu : ""}`}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <a href="#home">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className={styles.middle}>
          <ul>
            <li>
              <a href="#home">{lang === "en" ? "home" : "introdução"}</a>
            </li>
            <li>
              <a href="#about">{lang === "en" ? "about" : "sobre"}</a>
            </li>
            <li>
              <a href="#projects">{lang === "en" ? "projects" : "projectos"}</a>
            </li>
            <li>
              <a href="#contact">{lang === "en" ? "contact" : "contacto"}</a>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <ul>
            <li
              className={
                lang === "en" ? `${styles.en} ${styles.active}` : styles.en
              }
              onClick={() => dispatch(setLanguage("en"))}
            >
              EN
            </li>
            <li
              className={
                lang === "pt" ? `${styles.pt} ${styles.active}` : styles.pt
              }
              onClick={() => dispatch(setLanguage("pt"))}
            >
              PT
            </li>
          </ul>
        </div>
        <div
          className={styles.hamburguer}
          onClick={() => dispatch(toggleMenu())}
        >
          <span className={styles.line1} />
          <span className={styles.line2} />
          <span className={styles.line3} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
