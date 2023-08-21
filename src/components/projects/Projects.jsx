import "../projects/projects.scss";
import {
  PersonalProjectsData,
  ProfessionalProjectsData,
} from "../../data/projects-data.js";
import { useSelector } from "react-redux";

export default function Projects() {
  const { lang } = useSelector((state) => state);

  const descriptionHeight = (desc) => {
    const nrOfLines = numberOfLines(desc);
    console.log(nrOfLines);
    if (nrOfLines < 4) {
      return "100px";
    } else if (nrOfLines < 5) {
      return "120px";
    } else {
      return "140px";
    }
  };

  function numberOfLines(text) {
    const container = document.createElement("div");
    container.style.textAlign = "center";
    container.style.width = "250px";
    container.style.fontSize = "18px";
    container.style.fontFamily = "montserrat";
    container.style.fontWeight = "600";
    container.style.position = "absolute";
    container.style.visibility = "hidden";
    container.textContent = text;

    document.body.appendChild(container);

    const lineHeight = 1.2 * parseInt(container.style.fontSize, 10);
    const lineCount = Math.round(container.scrollHeight / lineHeight);

    document.body.removeChild(container);

    return lineCount;
  }

  const renderProjectItem = (projectItem) => {
    const { id, name, descEn, descPt, img, backgroundColor, font, url } = projectItem;
    const style = {
      backgroundImage: `${img}`,
      backgroundPosition: "top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div key={id} style={style} className="project-item">
        <div className="project-title">
          <h2 style={{fontFamily: font}}>{name}</h2>
        </div>
        <div className="wrapper" style={{ '--base-color-rgb': backgroundColor }}>
          <div className="item-info">
            {lang === "en" ? (
              <>
                <h2 style={{ height: descriptionHeight(descEn) }}>{descEn}</h2>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {"demo >"}
                </a>
              </>
            ) : (
              <>
                <h2 style={{ height: descriptionHeight(descPt) }}>{descPt}</h2>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {"demonstração > "}
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="projects" id="projects">
      <div className="header">
        <h1>{lang === "en" ? "projects" : "projectos"}</h1>
      </div>
      <div className="project-container">
        <div className="personal-half">
          <h2 className="personal-project-title">personal</h2>
          <div className="project-list">
            {PersonalProjectsData.map(renderProjectItem)}
          </div>
        </div>
        <div className="professional-half">
          <h2 className="professional-project-title">professional</h2>
          <div className="project-list">
            {ProfessionalProjectsData.map(renderProjectItem)}
          </div>
        </div>
      </div>
    </div>
  );
}
