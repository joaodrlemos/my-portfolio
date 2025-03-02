import React from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import { Menu } from '@/components/menu/Menu';
import styles from '../app/App.module.scss';
import Home from '@/components/home/Home';
import About from '@/components/about/About';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';

const App: React.FC = () => (
  <div className={styles.app}>
    <Navbar />
    <Menu />
    <div className={styles.sections}>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  </div>
);

export default App;
