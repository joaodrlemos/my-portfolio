import React, { useRef, useEffect, useCallback, useMemo, memo } from 'react';
import {
  PersonalProjectsData,
  ProfessionalProjectsData,
} from '@data/projects-data';
import styles from '../projects/Projects.module.scss';
import { Language, ProjectItem } from '@/typings/generalTypes';
import { useAppContext } from '@/context/AppContext';

const Projects: React.FC = memo(() => {
  const { language } = useAppContext();
  const personalTitleRef = useRef<HTMLHeadingElement>(null!);
  const professionalTitleRef = useRef<HTMLHeadingElement>(null!);
  const projectContainerRef = useRef<HTMLDivElement>(null!);
  const firstPersonalProjectItemRef = useRef<HTMLDivElement>(null!);
  const firstProfessionalProjectItemRef = useRef<HTMLDivElement>(null!);

  const getDescriptionHeight = (desc: string): string => {
    const lines = desc.length / 40;
    return lines <= 3 ? '100px' : lines <= 4 ? '120px' : '140px';
  };

  const renderProjectItem = useCallback(
    (item: ProjectItem, index: number, isPersonal: boolean) => {
      const {
        id,
        name,
        descEn,
        descPt,
        img,
        logo,
        startBackgroundColor,
        backgroundColor,
        font,
        url,
      } = item;
      return (
        <div
          key={id}
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className={styles.projectItem}
          ref={
            index === 0
              ? isPersonal
                ? firstPersonalProjectItemRef
                : firstProfessionalProjectItemRef
              : null
          }
          data-name={name}
        >
          <div className={styles.projectTitle}>
            {logo ? (
              <img src={logo} alt="logo" loading="lazy" />
            ) : (
              <h2 style={{ fontFamily: font }}>{name}</h2>
            )}
          </div>
          <div
            className={styles.wrapper}
            style={{
              ['--base-color-rgb' as any]: backgroundColor,
              backgroundColor:
                startBackgroundColor === false
                  ? 'rgba(var(--base-color-rgb), 0)'
                  : `rgba(var(--base-color-rgb), 0.7)`,
              transition: 'background-color 0.5s ease',
            }}
          >
            <div className={styles.itemInfo}>
              <h2 style={{ height: getDescriptionHeight(descEn) }}>
                {language === Language.EN ? descEn : descPt}
              </h2>
              {url && (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {language === Language.EN ? 'demo >' : 'demonstração >'}
                </a>
              )}
            </div>
          </div>
        </div>
      );
    },
    [language],
  );

  const personalProjects = useMemo(
    () =>
      PersonalProjectsData.map((item, index) =>
        renderProjectItem(item, index, true),
      ),
    [PersonalProjectsData, renderProjectItem],
  );

  const professionalProjects = useMemo(
    () =>
      ProfessionalProjectsData.map((item, index) =>
        renderProjectItem(item, index, false),
      ),
    [ProfessionalProjectsData, renderProjectItem],
  );

  useEffect(() => {
    const adjustTitlePosition = (
      titleRef: React.RefObject<HTMLHeadingElement>,
      firstItemRef: React.RefObject<HTMLDivElement>,
    ) => {
      if (titleRef.current && firstItemRef.current) {
        const itemLeftBoundary = firstItemRef.current.offsetLeft;
        const titleWidth = titleRef.current.offsetWidth;
        const availableSpace = itemLeftBoundary;
        const leftPosition = (availableSpace - titleWidth) / 2;
        titleRef.current.style.left = `${leftPosition}px`;
      }
    };

    adjustTitlePosition(personalTitleRef, firstPersonalProjectItemRef);
    adjustTitlePosition(professionalTitleRef, firstProfessionalProjectItemRef);

    const handleResize = () => {
      adjustTitlePosition(personalTitleRef, firstPersonalProjectItemRef);
      adjustTitlePosition(
        professionalTitleRef,
        firstProfessionalProjectItemRef,
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.projects} id="projects">
      <div className={styles.header}>
        <h1>{language === Language.EN ? 'projects' : 'projectos'}</h1>
      </div>
      <div ref={projectContainerRef} className={styles.projectContainer}>
        <div className={styles.personalHalf}>
          <h2 ref={personalTitleRef} className={styles.personalProjectTitle}>
            {language === Language.EN ? 'personal' : 'pessoais'}
          </h2>
          <div className={styles.projectList}>{personalProjects}</div>
        </div>
        <div className={styles.professionalHalf}>
          <h2
            ref={professionalTitleRef}
            className={styles.professionalProjectTitle}
          >
            {language === Language.EN ? 'professional' : 'profissionais'}
          </h2>
          <div className={styles.projectList}>{professionalProjects}</div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
