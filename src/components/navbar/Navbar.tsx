import React, { memo } from 'react';
import { useAppContext } from '@/context/AppContext';
import { Language } from '@/types/projectTypes';

import styles from './Navbar.module.scss';
import logo from '@logos/general/J-main-logo-color.png';
import ImageComponent from '@/components/imageComponent/ImageComponent';

const Navbar: React.FC = () => {
  const { language, setLanguage, isMenuOpen, toggleMenu } = useAppContext();

  return (
    <div className={`${styles.navbar} ${isMenuOpen ? styles.openMenu : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <a href="#home">
            <ImageComponent name="JLogo" img={logo} desc="JLogo" />
          </a>
        </div>
        <div className={styles.middle}>
          <ul>
            <li>
              <a href="#about">
                {language === Language.EN ? 'about' : 'sobre'}
              </a>
            </li>
            <li>
              <a href="#projects">
                {language === Language.EN ? 'projects' : 'projectos'}
              </a>
            </li>
            <li>
              <a href="#contact">
                {language === Language.EN ? 'contact' : 'contacto'}
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <ul>
            <li
              className={`${styles.en} ${language === Language.EN ? styles.active : ''}`}
              onClick={() => setLanguage(Language.EN)}
            >
              EN
            </li>
            <li
              className={`${styles.pt} ${language === Language.PT ? styles.active : ''}`}
              onClick={() => setLanguage(Language.PT)}
            >
              PT
            </li>
          </ul>
        </div>
        <div className={styles.hamburguer} onClick={toggleMenu}>
          <span className={styles.line1} />
          <span className={styles.line2} />
          <span className={styles.line3} />
        </div>
      </div>
    </div>
  );
};

Navbar.displayName = 'Navbar';
export default memo(Navbar);
