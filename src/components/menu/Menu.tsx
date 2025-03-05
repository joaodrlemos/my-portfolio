import React, { memo } from 'react';
import { useAppContext } from '@/context/AppContext';
import { Language } from '@/types/projectTypes';
import styles from './Menu.module.scss';

const Menu: React.FC = memo(() => {
  const { language, isMenuOpen, toggleMenu } = useAppContext();

  return (
    <div className={`${styles.menu} ${isMenuOpen ? styles.openMenu : ''}`}>
      <ul className={styles.menuList}>
        <li onClick={toggleMenu}>
          <a href="#home">{language === Language.EN ? 'home' : 'introdução'}</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#about">{language === Language.EN ? 'about' : 'sobre'}</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#projects">
            {language === Language.EN ? 'projects' : 'projectos'}
          </a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#contact">
            {language === Language.EN ? 'contact' : 'contacto'}
          </a>
        </li>
      </ul>
    </div>
  );
});

Menu.displayName = 'Menu';
export default Menu;
