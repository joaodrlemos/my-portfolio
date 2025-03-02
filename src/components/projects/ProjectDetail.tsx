import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProjectsData } from '@data/projects-data';
import styles from './ProjectDetail.module.scss';
import { Language } from '@/typings/generalTypes';
import { useAppContext } from '@/context/AppContext';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = ProjectsData.find((p) => p.id.toString() === id);
  const projectIndex = project
    ? ProjectsData.findIndex((p) => p.id.toString() === id)
    : -1;
  const navigate = useNavigate();
  const { language } = useAppContext();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigation = (targetId: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      window.scrollTo(0, 0);
      navigate(targetId);
      setIsTransitioning(false);
    }, 400);
  };

  const handlePreviousProject = () => {
    if (projectIndex > 0 && projectIndex <= ProjectsData.length) {
      const prevProject = ProjectsData[projectIndex - 1];
      if (prevProject) {
        handleNavigation(`/project/${prevProject.id}`);
      }
    }
  };

  const handleNextProject = () => {
    if (projectIndex >= 0 && projectIndex < ProjectsData.length - 1) {
      const nextProject = ProjectsData[projectIndex + 1];
      if (nextProject) {
        handleNavigation(`/project/${nextProject.id}`);
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className={styles.error}>
        {language === Language.EN
          ? 'Project not found'
          : 'Projeto não encontrado'}
      </div>
    );
  }

  return (
    <div
      className={`${styles.projectDetail} ${isTransitioning ? styles.transitioning : ''}`}
    >
      <div className={styles.transitionOverlay}></div>
      <div className={styles.mainImage}>
        <div className={styles.overlay}></div>
        <img src={project.img} alt={project.name} />
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{project.name}</h1>
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>
          {language === Language.EN ? 'About the Project' : 'Sobre o Projeto'}
        </h2>
        <div className={styles.description}>
          <p>{language === Language.EN ? project.descEn : project.descPt}</p>
        </div>
        <div className={styles.details}>
          <p>
            <strong>{language === Language.EN ? 'Type' : 'Tipo'}:</strong>{' '}
            {project.type}
          </p>
          <p>
            <strong>
              {language === Language.EN ? 'Functions' : 'Funções'}:
            </strong>{' '}
            {project.functions.join(', ')}
          </p>
          <p>
            <strong>
              {language === Language.EN ? 'Technologies' : 'Tecnologias'}:
            </strong>{' '}
            {project.technologiesUsed.join(', ')}
          </p>
        </div>
        {project.url && (
          <div className={styles.demoSection}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.demoLink}
            >
              {language === Language.EN ? 'View Demo' : 'Ver Demonstração'}
            </a>
          </div>
        )}
      </div>
      <div className={styles.navigation}>
        {projectIndex > 0 ? (
          <div className={styles.navItem} onClick={handlePreviousProject}>
            <span className={styles.arrow}>←</span>{' '}
            {language === Language.EN ? 'Previous Project' : 'Projeto Anterior'}
          </div>
        ) : (
          <div className={styles.navItemPlaceholder} />
        )}
        <div className={styles.backButton}>
          <span onClick={() => handleNavigation('/')}>
            {language === Language.EN
              ? 'Back to Projects'
              : 'Voltar aos Projetos'}
          </span>
        </div>
        {projectIndex >= 0 && projectIndex < ProjectsData.length - 1 ? (
          <div className={styles.navItem} onClick={handleNextProject}>
            {language === Language.EN ? 'Next Project' : 'Próximo Projeto'}{' '}
            <span className={styles.arrow}>→</span>
          </div>
        ) : (
          <div className={styles.navItemPlaceholder} />
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
