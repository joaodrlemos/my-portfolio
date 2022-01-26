import "../home/home.scss";
import { init } from 'ityped';
import {FacebookRounded, Instagram, GitHub, LinkedIn  } from '@mui/icons-material';
import { useState, useEffect, useRef } from "react";

export default function Home({ lang }) {
    const greetingRefEn = [useRef(),useRef(), useRef()];
    const greetingRef = useRef();

    const [showSocial, setShowSocial] = useState(false);

    useEffect(() => {
        setShowSocial(false);
        setTimeout(()=>setShowSocial(true),5800);
        
        init(greetingRefEn[0].current,
            {
                loop: false,
                showCursor: false,
                strings: [lang === 'en' ? "Hi there, I'm" : "Olá, eu sou o"],
                onFinished: function () {
                    init(greetingRefEn[1].current,
                        {
                            loop: false,
                            showCursor: false,
                            strings: ["João Lemos"],
                            onFinished: function () {
                                init(greetingRefEn[2].current,
                                    {
                                        loop: false,
                                        showCursor: false,
                                        strings: [lang === 'en' ? "Software Developer" : "e sou Software Developer"],
                                        
                                    });
                                }
                            });
                        }
                    });
            return () => {
                greetingRefEn.forEach((gr) => gr.current.innerText = "");
            }
    }, [lang]);

    return (
        <div className="home" id='home'>
            <div className="container">
                <div ref={greetingRef} className={lang==='en'?"greeting en" : "greeting pt"}>
                    <div className="wrapper" className={showSocial ? "social-icons active" : "social-icons"}>
                        {/* <h4><span ref={greetingRefEn[0]}></span>&lt;h1&gt;</h4> */}
                        <h2><span ref={greetingRefEn[0]}></span></h2>
                        <h1><span ref={greetingRefEn[1]}></span></h1>
                        <h3><span ref={greetingRefEn[2]}></span></h3>
                        <div className="social-icons">
                            <FacebookRounded/>
                            <Instagram/>
                            <GitHub/>
                            <LinkedIn/>
                        </div>
                        {/* <h4><span ref={greetingRefEn[4]}></span>&lt;&#47;h1&gt;</h4> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
