import React from 'react';
import { useAppContext } from '@/context/AppContext';
import { Language } from '@/typings/generalTypes';
import { TechnologiesData } from '@/data/technologies-tools-data';
import styles from './About.module.scss';

const About: React.FC = () => {
  const { language } = useAppContext();

  return (
    <div className={styles.about} id="about">
      <div className={styles.container}>
        {/* Left Side - Description */}
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionText}>
            <p>
              I’m a <strong>front-end developer</strong> with a passion for
              crafting <strong>seamless</strong> and <strong>engaging</strong>{' '}
              user experiences. Whether it’s{' '}
              <strong>designing intuitive interfaces</strong>,{' '}
              <strong>optimizing performance</strong>, or{' '}
              <strong>building smooth cross-platform applications</strong>, I
              enjoy bringing ideas to life through <strong>clean</strong> and{' '}
              <strong>creative code</strong>.
            </p>

            {/* Highlighted Section */}
            <p className={styles.highlightedText}>
              With <strong>React</strong>, <strong>React Native</strong>, and{' '}
              <strong>TypeScript</strong>, I focus on{' '}
              <strong>user-centric development</strong>, solving UI challenges,
              and refining interactions to make technology feel{' '}
              <strong>effortless</strong>.
            </p>

            <p>
              To me, <strong>development</strong> is more than just writing
              code. It’s about shaping <strong>innovative ideas</strong> into
              reality and creating experiences that leave a{' '}
              <strong>lasting impact</strong> on users. Check out my{' '}
              <strong>projects</strong> or connect with me through my{' '}
              <strong>socials</strong>!
            </p>
          </div>
        </div>

        {/* Right Side - Skills */}
        <div className={styles.skillsContainer}>
          <h2 className={styles.skillsTitle}>
            {language === Language.EN ? 'Skills' : 'Habilidades'}
          </h2>
          <div className={styles.skillsGrid}>
            {Object.values(TechnologiesData).map((tech) => (
              <div key={tech.name} className={styles.skill}>
                <img src={tech.icon} alt={tech.name} />
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
