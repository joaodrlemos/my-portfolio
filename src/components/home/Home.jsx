import "../home/home.scss";
import { TiArrowDownThick } from "react-icons/ti";
import { useState, useEffect } from 'react';

export default function Home({ lang }) {
    const [onLoad, setOnLoad] = useState(false);

    useEffect(() => {
        setOnLoad(false);
        setTimeout(() => setOnLoad(true), 500);

    }, [lang]);

    return (
        <div className="home" id='home'>
            <div className="container">
                <div className="left" />
                <div className="greeting">
                    <div className={onLoad ? "wrapper show" : "wrapper hide"}>
                        <h2>{onLoad && (lang === 'en' ? 'Hi there!' : 'Olá! Eu sou o')}</h2>
                        <h1>{onLoad && (lang === 'en' && onLoad ? "I'm " : '')}
                            <span>João Lemos</span>
                            {onLoad && (lang === 'en' ? "" : ' e sou')}
                        </h1>
                        <h3>{onLoad && (lang === 'en' && onLoad ? "" : "")}<span>Front-end Developer</span></h3>
                        
                    </div>
                </div>
                <a className="scroll-arrow" href="#about">
                    <TiArrowDownThick />
                </a>
            </div>
        </div>
    );
}
