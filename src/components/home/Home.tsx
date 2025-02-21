import React, { useState, useEffect } from "react";
import { TiArrowDownThick } from "react-icons/ti";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import styles from "./Home.module.scss";
import homeImage from "@/assets/pictures/foto_bw.png";

const Home: React.FC = () => {
  const lang = useSelector((state: RootState) => state.language.value);
  const [onLoad, setOnLoad] = useState<boolean>(false);

  useEffect(() => {
    setOnLoad(false);
    setTimeout(() => setOnLoad(true), 500);
  }, [lang]);

  return (
    <div className={styles.home} id="home">
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={homeImage} alt="João Lemos" />
        </div>
        <div className={styles.greeting}>
          <div
            className={
              onLoad
                ? `${styles.wrapper} ${styles.show}`
                : `${styles.wrapper} ${styles.hide}`
            }
          >
            <h2>{onLoad && (lang === "en" ? "Hi there!" : "Olá! Eu sou o")}</h2>
            <h1>
              {onLoad && (lang === "en" ? "I'm " : "")}
              <span>João Lemos</span>
              {onLoad && (lang === "pt" ? " sou" : "")}
            </h1>
            <h3>
              <span>
                {onLoad &&
                  (lang === "pt"
                    ? "Desenvolvedor Front-end"
                    : "Front-end Developer")}
              </span>
            </h3>
          </div>
        </div>
      </div>
      <a className={styles.scrollArrow} href="#about">
        <TiArrowDownThick />
      </a>
    </div>
  );
};

export default Home;
