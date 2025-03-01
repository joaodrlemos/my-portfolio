import React, { Suspense, lazy } from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import { Menu } from '@/components/menu/Menu';
import styles from '../app/App.module.scss';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import Home from '@/components/home/Home';

const About = lazy(() => import('@/components/about/About'));
const Projects = lazy(() => import('@/components/projects/Projects'));
const Contact = lazy(() => import('@/components/contact/Contact'));

const App: React.FC = () => (
  <div className={styles.app}>
    <Navbar />
    <Menu />
    <div className={styles.sections}>
      <Home />
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    </div>
  </div>
);

export default App;
