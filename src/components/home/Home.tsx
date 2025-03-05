import React, { useState, useEffect, memo } from 'react';
import { TiArrowDownThick } from 'react-icons/ti';
import { useAppContext } from '@/context/AppContext';
import { Language } from '@/types/projectTypes';
import styles from './Home.module.scss';

const Home: React.FC = memo(() => {
  const { language } = useAppContext();
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    setOnLoad(false);
    const timer = setTimeout(() => setOnLoad(true), 500);
    return () => clearTimeout(timer);
  }, [language]);

  return (
    <div className={styles.home} id="home">
      <div className={styles.container}>
        <div className={styles.left} />
        <div className={styles.greeting}>
          <div
            className={`${styles.wrapper} ${onLoad ? styles.show : styles.hide}`}
          >
            {onLoad && (
              <h2>
                {language === Language.EN ? 'Hi there!' : 'Olá! Eu sou o'}
              </h2>
            )}
            <h1>
              {onLoad ? (language === Language.EN ? "I'm " : '') : ''}
              <span>João Lemos</span>
              {onLoad ? (language === Language.PT ? ' sou' : '') : ''}
            </h1>
            <h3>
              <span>
                {onLoad
                  ? language === Language.PT
                    ? 'Desenvolvedor Front-end'
                    : 'Front-end Developer'
                  : ''}
              </span>
            </h3>
          </div>
        </div>
        <a className={styles.scrollArrow} href="#about">
          <TiArrowDownThick />
        </a>
      </div>
    </div>
  );
});

Home.displayName = 'Home';
export default Home;
