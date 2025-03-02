import React from 'react';
import { useAppContext } from '@/context/AppContext';
import { Language } from '@/typings/generalTypes';
import { TechnologiesData } from '@/data/technologies-data';
import styles from './About.module.scss';

const About: React.FC = () => {
  const { language } = useAppContext();

  return (
    <div className={styles.about} id="about">
      <div className={styles.container}>
        {/* Left Side - Description */}
        <div className={styles.descriptionContainer}>
          <h1>{language === Language.EN ? 'About' : 'Sobre'}</h1>
          <p>
            Passionate about crafting seamless user experiences, I specialize in
            front-end development for web and mobile applications using{' '}
            <strong>React, React Native, and TypeScript</strong>.
          </p>

          <p>Over the years, I’ve worked on projects that demand:</p>
          <ul>
            <li>
              ⚡ <strong>High-performance UI development</strong> – Optimizing
              front-end apps.
            </li>
            <li>
              🎨 <strong>User-centered design</strong> – Clean, intuitive, and
              accessible interfaces.
            </li>
            <li>
              🔧 <strong>Strong problem-solving skills</strong> – Debugging &
              performance optimization.
            </li>
            <li>
              📱 <strong>Cross-platform experiences</strong> – Using React
              Native for mobile apps.
            </li>
          </ul>

          <p>
            I love taking on challenging projects, writing{' '}
            <strong>clean, modular</strong> code, and collaborating with teams
            to build products people <strong>love</strong>. Check out my{' '}
            <strong>portfolio</strong> and <strong>GitHub</strong> to see my
            work!
          </p>
        </div>

        {/* Right Side - Skills */}
        <div className={styles.skillsContainer}>
          <h2 className={styles.skillsTitle}>
            {language === Language.EN ? 'Skills' : 'Habilidades'}
          </h2>
          <div className={styles.skillsGrid}>
            {TechnologiesData.map((tech) => (
              <div key={tech.name} className={styles.skill}>
                <img src={tech.image} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
