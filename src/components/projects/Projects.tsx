import React, { useState, useEffect, useRef, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectsData } from '@data/projects-data';
import { Language } from '@/types/projectTypes';
import { useAppContext } from '@/context/AppContext';
import styles from './Projects.module.scss';

const getItemsPerRow = () => (window.innerWidth <= 800 ? 2 : 3);
const getRowHeight = () => (window.innerWidth <= 800 ? 160 : 220);

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
        if (!entry?.isIntersecting) return;

        const grid = projectGridRef.current;
        if (!grid) return;

        const itemsPerRow = getItemsPerRow();
        const totalRows = Math.ceil(visibleProjects / itemsPerRow);
        const rowHeight = getRowHeight();
        const gridTop = grid.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        const visibleRowCount = Math.max(
          0,
          Math.floor((viewportHeight - gridTop) / rowHeight) + 1,
        );
        setVisibleRows((prev) => [
          ...new Set([
            ...prev,
            ...Array.from(
              { length: Math.min(visibleRowCount, totalRows) },
              (_, i) => i,
            ),
          ]),
        ]);
      },
      { threshold: [0, 1] },
    );

    if (projectGridRef.current) observer.observe(projectGridRef.current);
    return () => observer.disconnect();
  }, [visibleProjects]);

  return (
    <div className={styles.projects} id="projects">
      <div className={styles.header}>
        <h1>{language === Language.EN ? 'Projects' : 'Projetos'}</h1>
      </div>
      <div className={styles.projectContainer}>
        <div
          className={styles.projectGrid}
          ref={projectGridRef}
          style={{
            height: `${Math.ceil(visibleProjects / getItemsPerRow()) * getRowHeight()}px`,
          }}
        >
          {ProjectsData.slice(0, visibleProjects).map((item, index) => (
            <div
              key={item.id}
              className={`${styles.projectItem} ${visibleRows.includes(Math.floor(index / getItemsPerRow())) ? styles.visible : ''}`}
            >
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

Projects.displayName = 'Projects';
export default Projects;
