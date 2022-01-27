import "../about/about.scss";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaSass  } from "react-icons/fa";
import { SiJavascript, SiJquery, SiVisualstudiocode, SiRedux } from "react-icons/si";

export default function About({lang}) {
    return (
        <div className='about' id='about'>
            <div className="left">
                <h2>{lang === 'en' ? "about me" : 'sobre mim'}</h2>
                <div className="description">
                    <p>
                        {lang === 'en' ? "I'm a cheerful and curious software engineer based in Almada, Portugal." 
                        : 'Sou um alegre e curioso desenvolvedor de Software localizado em Almada, Portugal'}
                    </p>
                    <p>
                        {lang === 'en' ? "After graduating I've been mostly working as a support engineer and back-end developer, but after one of my last work experiences I've discovered I like the visual aspect of the web development process a lot, so I dedicated myself to learn and get proficient with the front-end side."
                        : "Depois de terminar o curso, trabalhei maioritariamente como desenvolvedor de back-end e engenheiro de suporte, mas depois de uma das minhas últimas experiências de trabalho descobri que gosto muito do aspecto visual do processo de desenvolvimento web, então dediquei me a aprender e ficar proficiente com o front-end."}
                        
                    </p>
                    <p>
                        {lang === 'en' ? "I developed this website to showcase my journey and the projects I've made. Sit back and scroll through, hope you enjoy." 
                        : 'Desenvolvi este site para mostrar minha jornada e os projetos que realizei. Fica confortavél e percorre o site, espero que gostes.'}
                    </p>
                </div>
            </div>
            <div className="right">
                <div className="title">
                    <h2>{lang === 'en' ? "skills":"habilidades"}</h2>
                </div>
                <div className="skills">
                    <h3 className="hard">{lang === 'en' ? "hard" : "técnicas"}</h3>
                    <div className="hard-skills">
                        <ul>
                            <li className="li-title">{lang === 'en' ? 'languages':'linguagens'}</li>
                            <li className="li-elem">
                                <span title="HTML"><FaHtml5/></span>
                                <span title="CSS"><FaCss3Alt/></span>
                                <span className="js" title="JavaScript"><SiJavascript/></span>
                            </li>
                            <li  className="li-title">{lang === 'en' ? 'frameworks & libraries' : 'bibliotecas & frameworks'}</li>
                            <li className="li-elem">
                                <span title="jQuery"><SiJquery/></span>
                                <span title="Sass"><FaSass/></span>
                                <span title="React.js"><FaReact/></span>
                                <span title="Redux"><SiRedux/></span>
                            </li>
                                
                            <li  className="li-title">{lang === 'en' ? 'tools' : 'ferramentas'}</li>
                            <li className="li-elem">
                                <span title="Visual Studio Code"><SiVisualstudiocode/></span>
                                <span title="Git"><FaGitAlt/></span>
                            </li>
                        </ul>
                    </div>
                    <h3 className={lang==='en' ? "soft" : "soft pt"} >{lang === 'en' ? "soft":"interpessoais"}</h3>
                    <div className="soft-skills">
                        <ul>
                            <li>{lang === 'en' ? 'communication':'comunicação'}</li>
                            <li>{lang === 'en' ? 'colaboration' : 'colaboração'}</li>
                            <li>{lang === 'en' ? 'empathy' : 'empatia'}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
