import "../about/about.scss";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaSass  } from "react-icons/fa";
import { SiJavascript, SiVisualstudiocode, SiRedux } from "react-icons/si";
import { useSelector } from "react-redux";

export default function About() {
    const {lang} = useSelector((state) => state);

    return (
        <div className='about' id='about'>
            <div className="left">
                <div className="title">
                    <h2>{lang === 'en' ? "about me" : 'sobre mim'}</h2>
                </div>
                <div className="description">
                    <p>
                        {lang === 'en' ? "I'm a cheerful and versatile software engineer based in Almada, Portugal." 
                        : 'Sou um alegre e versatil desenvolvedor de Software localizado em Almada, Portugal'}
                    </p>
                    <p>
                        {lang === 'en' ? "After graduating I've been mostly working as a back-end developer, but recently I've discovered I like the visual aspect of the web development process a lot, so I dedicated myself to learn and get proficient with the front-end side."
                        : "Depois de terminar o curso, trabalhei maioritariamente como desenvolvedor de back-end, mas recentemente descobri que gosto muito do aspecto visual do processo de desenvolvimento web, então dediquei me a aprender e ficar proficiente com o front-end."}
                        
                    </p>
                    <p>
                        {lang === 'en' ? "I developed this website to showcase my journey and the projects I've made. Sit back and scroll through, hope you enjoy." 
                        : 'Desenvolvi este site para mostrar minha jornada e os projetos que realizei. Fica confortável e percorre o site, espero que gostes.'}
                    </p>
                </div>
            </div>
            <div className="right">
                <div className="title">
                    <h2>{lang === 'en' ? "skills":"habilidades"}</h2>
                </div>
                <div className="skills">
                    <div className="hard-skills">
                        <ul>
                            <li className="languages">
                                <div className="title">{lang === 'en' ? 'languages':'linguagens'}</div>
                                <div className="elem">
                                    <span title="HTML"><FaHtml5/></span>
                                    <span title="CSS"><FaCss3Alt/></span>
                                    <span className="js" title="JavaScript"><SiJavascript/></span>
                                </div>
                            </li>
                            
                            <li className="frameworksNLibraries">
                                <div className="title">{lang === 'en' ? 'frameworks & libraries' : 'bibliotecas & frameworks'}</div>
                                <div className="elem">
                                    <span title="React.js"><FaReact/></span>
                                    <span title="Sass"><FaSass/></span>
                                    <span title="Redux"><SiRedux/></span>
                                </div>
                            </li>
                                
                            <li className="tools">
                                <div  className="title">{lang === 'en' ? 'tools' : 'ferramentas'}</div>
                                <div className="elem">
                                    <span title="Visual Studio Code"><SiVisualstudiocode/></span>
                                    <span title="Git"><FaGitAlt/></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="soft-skills">
                        <ul>
                            <li>{lang === 'en' ? 'collaboration' : 'colaboração'}</li>
                            <li>{lang === 'en' ? 'empathy' : 'empatia'}</li>
                            <li>{lang === 'en' ? 'communication':'comunicação'}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
