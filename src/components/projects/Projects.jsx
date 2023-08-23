import "../projects/projects.scss";
import {
  PersonalProjectsData,
  ProfessionalProjectsData,
} from "../../data/projects-data.js";
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";

export default function Projects() {
  const { lang } = useSelector((state) => state);
  const personalTitleRef = useRef(null);
  const professionalTitleRef = useRef(null);
  const projectContainerRef = useRef(null);
  const firstPersonalProjectItemRef = useRef(null);
  const firstProfessionalProjectItemRef = useRef(null);

  const descriptionHeight = (desc) => {
    const nrOfLines = numberOfLines(desc);
    console.log(nrOfLines);
    if (nrOfLines <= 3) {
      return "100px";
    } else if (nrOfLines == 4) {
      return "120px";
    } else {
      return "140px";
    }
  };

  function numberOfLines(text) {
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

  const renderProjectItem = (projectItem, index, isPersonal) => {
    const { id, name, descEn, descPt, img, backgroundColor, font, url } =
      projectItem;
    const style = {
      backgroundImage: `${img}`,
      backgroundPosition: "top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div
        key={id}
        style={style}
        className="project-item"
        ref={
          index === 0
            ? isPersonal
              ? firstPersonalProjectItemRef
              : firstProfessionalProjectItemRef
            : null
        }
      >
        <div className="project-title">
          <h2 style={{ fontFamily: font }}>{name}</h2>
        </div>
        <div
          className="wrapper"
          style={{ "--base-color-rgb": backgroundColor }}
        >
          <div className="item-info">
            {lang === "en" ? (
              <>
                <h2 style={{ height: descriptionHeight(descEn) }}>{descEn}</h2>
                {url !== null ? (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {"demo >"}
                  </a>
                ) : (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {"preview >"}
                  </a>
                )}
              </>
            ) : (
              <>
                <h2 style={{ height: descriptionHeight(descPt) }}>{descPt}</h2>
                {url !== null ? (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {"demonstração >"}
                  </a>
                ) : (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {"pre-visualização >"}
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
    const adjustTitlePosition = (titleRef, firstItemRef) => {
      const containerWidth = projectContainerRef.current.offsetWidth;
      const itemLeftBoundary = firstItemRef.current.offsetLeft;
      const titleWidth = titleRef.current.offsetWidth;

      const availableSpace = itemLeftBoundary;

      const leftPosition = (availableSpace - titleWidth) / 2;
      titleRef.current.style.left = `${leftPosition}px`;
    };

    adjustTitlePosition(personalTitleRef, firstPersonalProjectItemRef);
    adjustTitlePosition(professionalTitleRef, firstProfessionalProjectItemRef);

    window.addEventListener("resize", () => {
      adjustTitlePosition(personalTitleRef, firstPersonalProjectItemRef);
      adjustTitlePosition(
        professionalTitleRef,
        firstProfessionalProjectItemRef
      );
    });

    return () => {
      window.removeEventListener("resize", adjustTitlePosition);
    };
  }, []);

  return (
    <div className="projects" id="projects">
      <div className="header">
        <h1>{lang === "en" ? "projects" : "projectos"}</h1>
      </div>
      <div ref={projectContainerRef} className="project-container">
        <div className="personal-half">
          <h2 ref={personalTitleRef} className="personal-project-title">
            personal
          </h2>
          <div className="project-list">
            {PersonalProjectsData.map((item, index) =>
              renderProjectItem(item, index, true)
            )}
          </div>
        </div>
        <div className="professional-half">
          <h2 ref={professionalTitleRef} className="professional-project-title">
            professional
          </h2>
          <div className="project-list">
            {ProfessionalProjectsData.map((item, index) =>
              renderProjectItem(item, index, false)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
