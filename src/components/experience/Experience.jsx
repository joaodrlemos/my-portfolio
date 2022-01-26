import "../experience/experience.scss";
import { VscCircleOutline } from "react-icons/vsc";

export default function Experience() {
    return (
        <div className="experience" id='experience'>
            <h2>Experience</h2>
            <ul className="experience-list">
                <li className="experience-item">
                    <div className="circle"><VscCircleOutline /></div>
                    <div className="item-info">
                        <h3>Celfocus</h3>
                        <span>Jun 2021 - Nov 2021</span>
                        <p>Back-end devopment of company's omnichannel product.</p>
                    </div>
                </li>
                <li className="experience-item">
                    <div className="circle"><VscCircleOutline /></div>
                    <div className="item-info">
                        <h3>Santa Casa da Misericórdia</h3>
                        <span>May 2020 - May 2021</span>
                        <p>Full-stack development of SCMLs backoffice system.</p>
                    </div>
                </li>
                <li className="experience-item">
                    <div className="circle"><VscCircleOutline /></div>
                    <div className="item-info">
                        <h3>Morphis-Tech</h3>
                        <span>Apr 2018 - Jun 2019</span>
                        <p>Oracle forms migration, bug correction and maintenance on big nearshore projects for International clients.</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}
