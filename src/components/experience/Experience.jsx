import "../experience/experience.scss";
import { VscCircleOutline } from "react-icons/vsc";
import { experienceData } from "../../data/experience-data.js";

export default function Experience({ lang }) {
    return (
        <div className="experience" id='experience'>
            <h2>{lang === 'en' ? 'experience' : 'experiência'}</h2>
            <ul className="experience-list">
                {experienceData.map((expItem) => {
                    const { id, company, dateEn, datePt, textEn, textPt } = expItem;

                    return (
                        <li key={id} className="experience-item">
                            <div className="circle"><VscCircleOutline /></div>
                            <div className="item-info">
                                <h3>{company}</h3>
                                <span>{lang === 'en' ? dateEn : datePt}</span>
                                <p>{lang === 'en' ? textEn : textPt}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
