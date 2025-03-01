import React, { memo } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaGitAlt,
  FaConfluence,
  FaJira,
  FaFigma,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiRedux,
  SiExpo,
  SiVite,
  SiNextdotjs,
  SiAdobephotoshop,
} from 'react-icons/si';
import styles from '../about/About.module.scss';
import { useAppContext } from '@/context/AppContext';
import { Language } from '@/typings/generalTypes';

const About: React.FC = memo(() => {
  const { language } = useAppContext();

  return (
    <div className={styles.about} id="about">
      {/* Left Section: About Me */}
      <div className={styles.left}>
        <div className={styles.title}>
          <h2>{language === Language.EN ? 'About Me' : 'Sobre Mim'}</h2>
        </div>
        <div className={styles.description}>
          <p>
            {language === Language.EN
              ? `Passionate about crafting seamless user experiences, I specialize in front-end development for web and mobile applications using mainly React, React Native, and TypeScript.`
              : `Apaixonado por criar experiências de usuário intuitivas, especializo-me no desenvolvimento front-end para aplicações web e móveis usando principalmente React, React Native e TypeScript.`}
          </p>
          <p>
            {language === Language.EN
              ? `Over the years, I’ve worked on projects that demand scalability, performance, and maintainability, focusing on:`
              : `Ao longo dos anos, trabalhei em projetos que exigem escalabilidade, desempenho e manutenção, focando em:`}
          </p>
          <ul className={styles.skillList}>
            <li>
              <span>High-performance UI development</span>
            </li>
            <li>
              <span>User-centered design</span>
            </li>
            <li>
              <span>Strong problem-solving skills</span>
            </li>
            <li>
              <span>Cross-platform mobile experiences</span>
            </li>
          </ul>
          <p>
            {language === Language.EN
              ? `I enjoy tackling challenging projects, writing clean and modular code, and collaborating with teams to build products that people love to use.`
              : `Gosto de enfrentar desafios, escrever código limpo e modular, e colaborar com equipes para desenvolver produtos que as pessoas amam usar.`}
          </p>
        </div>
      </div>

      {/* Right Section: Skills */}
      <div className={styles.right}>
        <div className={styles.title}>
          <h2>{language === Language.EN ? 'Skills' : 'Habilidades'}</h2>
        </div>
        <div className={styles.skills}>
          {/* Hard Skills - Tech Stack Circles */}
          <div className={styles.hardSkills}>
            <div className={styles.circle}>
              <h3>Languages</h3>
              <div className={styles.iconCircle}>
                <FaHtml5 />
                <FaCss3Alt />
                <SiTypescript />
              </div>
            </div>

            <div className={styles.circle}>
              <h3>Frameworks & Libraries</h3>
              <div className={styles.iconCircle}>
                <FaReact />
                <SiExpo />
                <SiRedux />
                <SiNextdotjs />
                <SiVite />
                <FaSass />
              </div>
            </div>

            <div className={styles.circle}>
              <h3>Tools</h3>
              <div className={styles.iconCircle}>
                <FaGitAlt />
                <FaConfluence />
                <FaJira />
                <FaFigma />
                <SiAdobephotoshop />
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className={styles.softSkills}>
            <h3>
              {language === Language.EN
                ? 'Soft Skills'
                : 'Habilidades Interpessoais'}
            </h3>
            <div className={styles.skillBadges}>
              <span>Creativity</span>
              <span>Collaboration</span>
              <span>Problem-Solving</span>
              <span>Critical Thinking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
