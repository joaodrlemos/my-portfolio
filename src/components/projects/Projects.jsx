import "../projects/projects.scss";
import { PersonalProjectsData } from "../../data/projects-data.js";
import { useSelector } from "react-redux";

export default function Projects() {
  const { lang } = useSelector((state) => state);

  return (
    <div className="projects" id="projects">
      <div className="header">
        <h1>{lang === "en" ? "projects" : "projectos"}</h1>
      </div>
      <div className="project-container">
        <div className="project-list">
          {PersonalProjectsData.map((projectItem) => {
            const { id, name, descEn, descPt, img, url } = projectItem;
            const style = {
              backgroundImage: `${img}`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            };

            return (
              <div key={id} style={style} className="project-item">
                <div className="project-title">
                  <h2>{name}</h2>
                </div>
                <div className="wrapper">
                  <div className="item-info">
                    <h2>{lang === "en" ? descEn : descPt}</h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {lang === "en" ? "visit" : "visitar"}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
