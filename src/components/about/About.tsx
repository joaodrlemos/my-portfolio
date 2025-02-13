import React from "react";
import {
  FaHtml5,
  FaConfluence,
  FaJira,
  FaFigma,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaSass,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import styles from "./About.module.scss";

const About: React.FC = () => {
  const lang = useSelector((state: RootState) => state.language.value);

  return (
    <div className={styles.about} id="about">
      <div className={styles.left}>
        <div className={styles.title}>
          <h2>{lang === "en" ? "about me" : "sobre mim"}</h2>
        </div>
        <div className={styles.description}>
          <p>
            {lang === "en"
              ? "Based in Lisbon, Portugal, I am a cheerful and versatile software engineer with a unique blend of creativity and technical acumen."
              : "Sou um engenheiro de software alegre e versátil de Lisboa, Portugal, com uma combinação única de criatividade e habilidades técnicas."}
          </p>
          <p>
            {lang === "en"
              ? "Starting my career in back-end development, I gained lots of experience in the field but recently discovered a passion for the visual aspects of the development process. This newfound interest led me to dedicate myself to mastering front-end development, where I've been able to create engaging and user-friendly interfaces. My work showcases the passion and ability I have to transform complex problems into intuitive solutions, reflecting my creativity, attention to detail, and commitment to quality."
              : "Tendo começado a minha carreira com desenvolvimento em back-end, ganhei muita experiência na área, mas recentemente descobri uma paixão pelos aspectos visuais de todo o processo de desenvolvimento. Este novo interesse levou-me a dedicar-me e a dominar o desenvolvimento em front-end, onde tenho sido capaz de criar interfaces envolventes e amigáveis ao utilizador. O meu trabalho demonstra a paixão e habilidade que tenho para transformar problemas complexos em soluções intuitivas, refletindo a minha criatividade, atenção ao detalhe e compromisso com a qualidade."}
          </p>
          <p>
            {lang === "en"
              ? "I developed this website to showcase my journey and the projects I've made. Sit back and scroll through, hope you enjoy (:"
              : "Desenvolvi este website para mostrar minha jornada e os projetos que realizei. Fica confortável e explora livremente, espero que gostes (:"}
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <h2>{lang === "en" ? "skills" : "habilidades"}</h2>
        </div>
        <div className={styles.skills}>
          <div className={styles.hardSkills}>
            <ul>
              <li className={styles.languages}>
                <div className={styles.title}>
                  {lang === "en" ? "languages" : "linguagens"}
                </div>
                <div className={styles.elem}>
                  <span title="HTML">
                    <FaHtml5 />
                  </span>
                  <span title="CSS">
                    <FaCss3Alt />
                  </span>
                  <span title="Typescript" className={styles.ts}>
                    <SiTypescript className={styles.siIcons} />
                  </span>
                </div>
              </li>

              <li className={styles.frameworksNLibraries}>
                <div className={styles.title}>
                  {lang === "en"
                    ? "frameworks/libraries"
                    : "frameworks/bibliotecas"}
                </div>
                <div className={styles.elem}>
                  <span title="React.js/React Native">
                    <FaReact />
                  </span>
                  <span title="Sass">
                    <FaSass />
                  </span>
                </div>
              </li>

              <li className={styles.tools}>
                <div className={styles.title}>
                  {lang === "en" ? "tools" : "ferramentas"}
                </div>
                <div className={styles.elem}>
                  <span title="Git">
                    <FaGitAlt />
                  </span>
                  <span title="Confluence">
                    <FaConfluence />
                  </span>
                  <span title="Jira">
                    <FaJira />
                  </span>
                  <span title="Figma">
                    <FaFigma />
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.softSkills}>
            <ul>
              <li>{lang === "en" ? "Creativity" : "Creatividade"}</li>
              <li>{lang === "en" ? "empathy" : "empatia"}</li>
              <li>{lang === "en" ? "communication" : "comunicação"}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
