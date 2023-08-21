import "../about/about.scss";
import {
  FaHtml5,
  FaConfluence,
  FaJira,
  FaFigma,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaSass,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { useSelector } from "react-redux";

export default function About() {
  const { lang } = useSelector((state) => state);

  return (
    <div className="about" id="about">
      <div className="left">
        <div className="title">
          <h2>{lang === "en" ? "about me" : "sobre mim"}</h2>
        </div>
        <div className="description">
          <p>
            {lang === "en"
              ? "Based in Lisbon, Portugal, I am a cheerful and versatile software engineer with a unique blend of creativity and technical acumen."
              : "Sou um engenheiro de software alegre e versátil de Lisboa, Portugal, com uma combinação única de criatividade e habilidades técnicas."}
          </p>
          <p>
            {lang === "en"
              ? "Starting my career in back-end development I gained lots of experience in the field but, I've recently discovered a passion for the visual aspects of development process. This newfound interest led me to dedicate myself to mastering front-end development, where I've been able to create engaging and user-friendly interfaces. My work showcases the passion and ability I have to transform complex problems into intuitive solutions, reflecting my creativity, attention to detail, and commitment to quality."
              : "Tendo começado a minha carreira com desenvolvimento em back-end, ganhei muita experiencia na área, mas, recentemente descobri uma paixão pelos aspectos visuais de todo o processo de desenvolvimento. Este novo interesse levou-me a dedicar-me, e a dominar o desenvolvimento em front-end, onde tenho sido capaz de criar interfaces envolventes e amigáveis ao utilizador. O meu trabalho demonstra a paixão e habilidade que tenho para transformar problemas complexos em soluções intuitivas, refletindo a minha criatividade, atenção ao detalhe e compromisso com a qualidade."}
          </p>
          <p>
            {lang === "en"
              ? "I developed this website to showcase my journey and the projects I've made. Sit back and scroll through, hope you enjoy (:"
              : "Desenvolvi este website para mostrar minha jornada e os projetos que realizei. Fica confortável e explora livremente, espero que gostes (:"}
          </p>
        </div>
      </div>
      <div className="right">
        <div className="title">
          <h2>{lang === "en" ? "skills" : "habilidades"}</h2>
        </div>
        <div className="skills">
          <div className="hard-skills">
            <ul>
              <li className="languages">
                <div className="title">
                  {lang === "en" ? "languages" : "linguagens"}
                </div>
                <div className="elem">
                  <span title="HTML">
                    <FaHtml5 />
                  </span>
                  <span title="CSS">
                    <FaCss3Alt />
                  </span>
                  <span title="Typescript" className="ts">
                    <SiTypescript className="si-icons" />
                  </span>
                </div>
              </li>

              <li className="frameworksNLibraries">
                <div className="title">
                  {lang === "en"
                    ? "frameworks/libraries"
                    : "frameworks/bibliotecas"}
                </div>
                <div className="elem">
                  <span title="React.js/React Native">
                    <FaReact />
                  </span>
                  <span title="Sass">
                    <FaSass />
                  </span>
                </div>
              </li>

              <li className="tools">
                <div className="title">
                  {lang === "en" ? "tools" : "ferramentas"}
                </div>
                <div className="elem">
                  <span title="Git">
                    <FaGitAlt />
                  </span>
                  <span title="Confluence">
                    <FaConfluence />
                  </span>
                  <span title="Jira">
                    <FaJira />
                  </span>
                  <span title="Figma">
                    <FaFigma />
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="soft-skills">
            <ul>
              <li>{lang === "en" ? "Creativity" : "Creatividade"}</li>
              <li>{lang === "en" ? "empathy" : "empatia"}</li>
              <li>{lang === "en" ? "communication" : "comunicação"}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
