import React, { useState, useEffect, useRef, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectsData } from '@data/projects-data';
import styles from './Projects.module.scss';
import { Language, ProjectItem } from '@/typings/generalTypes';
import { useAppContext } from '@/context/AppContext';

const Projects: React.FC = memo(() => {
  const { language } = useAppContext();
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [visibleRows, setVisibleRows] = useState<number[]>([]);
  const navigate = useNavigate();
  const projectGridRef = useRef<HTMLDivElement>(null);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          const grid = projectGridRef.current;
          if (!grid) return;

          const itemsPerRow = window.innerWidth <= 800 ? 2 : 3;
          const totalRows = Math.ceil(visibleProjects / itemsPerRow);
          const rowHeight = window.innerWidth <= 800 ? 160 : 220;

          const gridTop = grid.getBoundingClientRect().top;
          const viewportHeight = window.innerHeight;

          const visibleRowCount = Math.max(
            0,
            Math.floor((viewportHeight - gridTop) / rowHeight) + 1,
          );
          const newVisibleRows = Array.from(
            { length: Math.min(visibleRowCount, totalRows) },
            (_, i) => i,
          );

          setVisibleRows((prev) => [...new Set([...prev, ...newVisibleRows])]);
        }
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] },
    );

    if (projectGridRef.current) observer.observe(projectGridRef.current);
    return () => {
      if (projectGridRef.current) observer.unobserve(projectGridRef.current);
    };
  }, [visibleProjects]);

  const handleProjectClick = (projectId: string | number) => {
    navigate(`/project/${projectId}`);
  };

  const renderProjectItem = (item: ProjectItem, index: number) => {
    const { id, name, img, logo } = item;
    const itemsPerRow = window.innerWidth <= 800 ? 2 : 3;
    const rowIndex = Math.floor(index / itemsPerRow);
    const isVisible = visibleRows.includes(rowIndex);

    return (
      <div
        key={id}
        className={`${styles.projectItem} ${isVisible ? styles.visible : ''}`}
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          animationDelay: `${rowIndex * 0.3}s`,
        }}
        onClick={() => handleProjectClick(id)}
      >
        <div className={styles.projectTitle}>
          {logo ? (
            <img src={logo} alt="logo" loading="lazy" />
          ) : (
            <h2>{name}</h2>
          )}
        </div>
        <div className={styles.overlay}>
          <h2 className={styles.itemTitle}>{name}</h2>
        </div>
      </div>
    );
  };

  const gridHeight = () => {
    const itemsPerRow = window.innerWidth <= 800 ? 2 : 3;
    const rowHeight = window.innerWidth <= 800 ? 160 : 220;
    const totalRows = Math.ceil(visibleProjects / itemsPerRow);
    return `${totalRows * rowHeight}px`;
  };

  return (
    <div className={styles.projects} id="projects">
      <div className={styles.header}>
        <h1>{language === Language.EN ? 'Projects' : 'Projectos'}</h1>
      </div>
      <div className={styles.projectContainer}>
        <div
          className={styles.projectGrid}
          ref={projectGridRef}
          style={{ height: gridHeight() }}
        >
          {ProjectsData.slice(0, visibleProjects).map((item, index) =>
            renderProjectItem(item, index),
          )}
        </div>
        {visibleProjects < ProjectsData.length && (
          <div className={styles.loadMoreContainer}>
            <button className={styles.loadMoreButton} onClick={handleLoadMore}>
              {language === Language.EN
                ? '+ More Projects'
                : '+ Mais Projectos'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

export default Projects;
