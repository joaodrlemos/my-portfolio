import React, { useRef, useEffect, CSSProperties } from "react";
import {
  PersonalProjectsData,
  ProfessionalProjectsData,
} from "@data/projects-data";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import styles from "./Projects.module.scss";

interface ProjectItem {
  id: string | number;
  name: string;
  descEn: string;
  descPt: string;
  img: string;
  logo?: string;
  startBackgroundColor?: boolean;
  backgroundColor: string;
  font?: string;
  url?: string | null;
}

const Projects: React.FC = () => {
  const lang = useSelector((state: RootState) => state.language.value);
  const personalTitleRef = useRef<HTMLHeadingElement | null>(null);
  const professionalTitleRef = useRef<HTMLHeadingElement | null>(null);
  const projectContainerRef = useRef<HTMLDivElement | null>(null);
  const firstPersonalProjectItemRef = useRef<HTMLDivElement | null>(null);
  const firstProfessionalProjectItemRef = useRef<HTMLDivElement | null>(null);

  const descriptionHeight = (desc: string): string => {
    const nrOfLines = numberOfLines(desc);
    if (nrOfLines <= 3) {
      return "100px";
    } else if (nrOfLines === 4) {
      return "120px";
    } else {
      return "140px";
    }
  };

  function numberOfLines(text: string): number {
    const container = document.createElement("div");
    container.style.textAlign = "center";
    container.style.width = "250px";
    container.style.fontSize = "20px";
    container.style.fontFamily = "montserrat";
    container.style.fontWeight = "500";
    container.style.position = "absolute";
    container.style.visibility = "hidden";
    container.textContent = text;

    document.body.appendChild(container);
    const lineHeight = 1.2 * parseInt(container.style.fontSize, 10);
    const lineCount = Math.round(container.scrollHeight / lineHeight);
    document.body.removeChild(container);

    return lineCount;
  }

  const renderProjectItem = (
    item: ProjectItem,
    index: number,
    isPersonal: boolean
  ) => {
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
    const style: React.CSSProperties = {
      backgroundImage: `url(${img})`,
      backgroundPosition: "top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div
        key={id}
        style={style}
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
            <img
              src={logo}
              alt="logo"
              style={{ width: "100%", height: "100%" }}
              loading="lazy"
            />
          ) : (
            <h2 style={{ fontFamily: font }}>{name}</h2>
          )}
        </div>
        <div
          className={styles.wrapper}
          style={
            startBackgroundColor === false
              ? { backgroundColor: "transparent" }
              : ({
                  ["--base-color-rgb" as any]: backgroundColor,
                } as CSSProperties)
          }
        >
          <div className={styles.itemInfo}>
            {lang === "en" ? (
              <>
                <h2 style={{ height: descriptionHeight(descEn) }}>{descEn}</h2>
                {url && (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {"demo >"}
                  </a>
                )}
              </>
            ) : (
              <>
                <h2 style={{ height: descriptionHeight(descPt) }}>{descPt}</h2>
                {url && (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {"demonstração >"}
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const adjustTitlePosition = (
      titleRef: React.RefObject<HTMLHeadingElement>,
      firstItemRef: React.RefObject<HTMLDivElement>
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
        firstProfessionalProjectItemRef
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.projects} id="projects">
      <div className={styles.header}>
        <h1>{lang === "en" ? "projects" : "projectos"}</h1>
      </div>
      <div ref={projectContainerRef} className={styles.projectContainer}>
        <div className={styles.personalHalf}>
          <h2 ref={personalTitleRef} className={styles.personalProjectTitle}>
            {lang === "en" ? "personal" : "pessoais"}
          </h2>
          <div className={styles.projectList}>
            {PersonalProjectsData.map((item, index) =>
              renderProjectItem(item, index, true)
            )}
          </div>
        </div>
        <div className={styles.professionalHalf}>
          <h2
            ref={professionalTitleRef}
            className={styles.professionalProjectTitle}
          >
            {lang === "en" ? "professional" : "profissionais"}
          </h2>
          <div className={styles.projectList}>
            {ProfessionalProjectsData.map((item, index) =>
              renderProjectItem(item, index, false)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
