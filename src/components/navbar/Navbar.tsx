import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@redux/store";
import { setLanguage } from "@redux/features/languageSlice";
import styles from "./Navbar.module.scss";
import logo from "@assets/logos/J-cor-08.png";

const Navbar: React.FC = () => {
  const lang = useSelector((state: RootState) => state.language.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <a href="#home">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className={styles.middle}>
          <ul>
            <li><a href="#home">{lang === "en" ? "home" : "introdução"}</a></li>
            <li><a href="#about">{lang === "en" ? "about" : "sobre"}</a></li>
            <li><a href="#projects">{lang === "en" ? "projects" : "projectos"}</a></li>
            <li><a href="#contact">{lang === "en" ? "contact" : "contacto"}</a></li>
          </ul>
        </div>
        <div className={styles.right}>
          <ul>
            <li
              className={lang === "en" ? styles.active : ""}
              onClick={() => dispatch(setLanguage("en"))}
            >
              EN
            </li>
            <li
              className={lang === "pt" ? styles.active : ""}
              onClick={() => dispatch(setLanguage("pt"))}
            >
              PT
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
