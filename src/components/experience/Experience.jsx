import "../experience/experience.scss";
import { VscCircleOutline } from "react-icons/vsc";
import img from "../../assets/circulos-17.svg";

export default function Experience({lang}) {
    return (
        <div className="experience" id='experience'>
            <img src={img} alt="" />
            <h2>{lang === 'en' ? 'experience' : 'experiência'}</h2>
            <ul className="experience-list">
                <li className="experience-item">
                    <div className="circle"><VscCircleOutline /></div>
                    <div className="item-info">
                        <h3>Celfocus</h3>
                        <span>Jun 2021 - Nov 2021</span>
                        <p>{lang === 'en' ? "Back-end devopment of company's omnichannel product."
                        : "Desenvolvimento em back-end para o produto omnichannel da companhia."}</p>
                    </div>
                </li>
                <li className="experience-item">
                    <div className="circle"><VscCircleOutline /></div>
                    <div className="item-info">
                        <h3>Santa Casa da Misericórdia</h3>
                        <span>{lang === 'en' ? "May 2020 - May 2021" : "Mai 2020 - Mai 2021"}</span>
                        <p>{lang === 'en' ? "Full-stack development of SCMLs backoffice system."
                        : "Desenvolvimento em full-stack do sistema backoffice da SCML."}</p>
                    </div>
                </li>
                <li className="experience-item">
                    <div className="circle"><VscCircleOutline /></div>
                    <div className="item-info">
                        <h3>Morphis-Tech</h3>
                        <span>{lang === 'en' ? "Apr 2018 - Jun 2019" : "Abr 2018 - Jun 2019"}</span>
                        <p>{lang === 'en' ? "Oracle forms migration, bug correction and maintenance on big nearshore projects for International clients."
                        : "Migração de oracle forms, correção de bugs e manutenção de projectos para clientes internacionais."}</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}
