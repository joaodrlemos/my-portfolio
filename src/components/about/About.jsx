import "../about/about.scss";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaSass  } from "react-icons/fa";
import { SiJavascript, SiJquery, SiVisualstudiocode, SiRedux } from "react-icons/si";

export default function About() {
    return (
        <div className='about' id='about'>
            <div className="left">
                <h2>A little about me...</h2>
                <div className="description">
                    <p>
                        I'm a cheerful and curious software engineer based in Setúbal, Portugal.
                    </p>
                    <p>
                        After graduating I've been mostly working as a support and back-end developer, but after one
			            of my last work experiences I've discovered I like the visual aspect of the web development process a lot,
			            so I dedicated myself to learn and get proficient with the front-end side.
                    </p>
                    <p>
                        I developed this website to showcase my journey and the projects I've made.
			            Sit back and scroll through, hope you enjoy (:
                    </p>
                </div>
            </div>
            <div className="right">
                <div className="title">
                    <h2>Skills</h2>
                </div>
                <div className="skills">
                    <h3 className="hard">Hard</h3>
                    <div className="hard-skills">
                        <ul>
                            <li className="li-title">Languages</li>
                            <li className="li-elem">
                                <span title="HTML"><FaHtml5/></span>
                                <span title="CSS"><FaCss3Alt/></span>
                                <span className="js" title="JavaScript"><SiJavascript/></span>
                            </li>
                            <li  className="li-title">Frameworks & Libraries</li>
                            <li className="li-elem">
                                <span title="jQuery"><SiJquery/></span>
                                <span title="Sass"><FaSass/></span>
                                <span title="React.js"><FaReact/></span>
                                <span title="Redux"><SiRedux/></span>
                            </li>
                                
                            <li  className="li-title">Tools</li>
                            <li className="li-elem">
                                <span title="Visual Studio Code"><SiVisualstudiocode/></span>
                                <span title="Git"><FaGitAlt/></span>
                            </li>
                        </ul>
                    </div>
                    <h3 className="soft" >Soft</h3>
                    <div className="soft-skills">
                        <ul>
                            <li>Communication</li>
                            <li>Colaboration</li>
                            <li>Empathy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
