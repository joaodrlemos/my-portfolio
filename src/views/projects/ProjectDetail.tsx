import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectsData } from '@/data/projects-data';
import { Language } from '@/types/projectTypes';
import { useAppContext } from '@/context/AppContext';
import styles from './ProjectDetail.module.scss';
import ImageComponent from '../../components/imageComponent/ImageComponent';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = ProjectsData.find((p) => p.id.toString() === id);
  const { language } = useAppContext();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <div className={styles.projectDetail}>
      <div className={styles.transitionOverlay}></div>
      <div className={styles.mainImage}>
        <div className={styles.overlay}></div>
        <ImageComponent
          name={project.name}
          img={project.img}
          desc={project.name}
        />
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{project.name}</h1>
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>
          {language === Language.EN ? 'About the Project' : 'Sobre o Projeto'}
        </h2>
        <div className={styles.about}>
          <p>{language === Language.EN ? project.aboutEn : project.aboutPt}</p>
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
            {project.functions.map((f) => f.name).join(', ')}
          </p>
          <p>
            <strong>
              {language === Language.EN ? 'Technologies' : 'Tecnologias'}:
            </strong>{' '}
            {project.technologies.map((t) => t.name).join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

ProjectDetail.displayName = 'ProjectDetail';
export default ProjectDetail;
