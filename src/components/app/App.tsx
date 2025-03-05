import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Menu from '@/components/menu/Menu';
import Home from '@/components/home/Home';
import About from '@/components/about/About';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';
import styles from './App.module.scss';

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

App.displayName = 'App';
export default App;
