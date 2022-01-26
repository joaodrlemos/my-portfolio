import "../../home/home_2/home2.scss";
import { TiArrowDownThick } from "react-icons/ti";
import { useState, useEffect } from 'react';
import { Instagram, GitHub, LinkedIn } from '@mui/icons-material';


export default function Home({ lang }) {
    const [onLoad, setOnLoad] = useState(false);

    useEffect(() => {
        setOnLoad(false);
        setTimeout(() => setOnLoad(true), 500);

    }, [lang]);

    return (
        <div className="home2" id='home'>
            <div className="container2">
                <div className="left2" />
                <div className="greeting2">
                    <div className={onLoad ? "wrapper2 show" : "wrapper2 hide"}>
                        <h2>{onLoad && (lang === 'en' ? 'Hi there!' : 'Olá! Eu sou o')}</h2>
                        <h1>{onLoad && (lang === 'en' && onLoad ? "I'm " : '')}
                            <span>João Lemos</span>
                            {onLoad && (lang === 'en' ? "" : ' e sou')}
                        </h1>
                        <h3>{onLoad && (lang === 'en' && onLoad ? "" : "")}<span>Front-end Developer</span></h3>
                        {/* <div className="social-icons2" >
                            <a href="https://www.instagram.com/joao_lemings/"><Instagram /></a>
                            <a href="https://github.com/Lemos467"><GitHub /></a>
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-lemos-304b74145/"><LinkedIn /></a>
                        </div> */}
                    </div>
                </div>
                <a className="scroll-arrow" href="#about">
                    <TiArrowDownThick />
                </a>
            </div>
        </div>
    );
}
