const greetingRefEn = [useRef(), useRef(), useRef()];
    const greetingRef = useRef();

    const [showSocial, setShowSocial] = useState(false);

    useEffect(() => {
        //-----------------------

        greetingRef.current.remove();
        console.log("removed?")

        const test = document.createElement(`div`);
        test.classList.add( "wrapper2");
        test.innerHTML = `
        <h2><span ref={greetingRefEn[0]}></span></h2>
        <h1><span ref={greetingRefEn[1]}></span></h1>
        <h3><span ref={greetingRefEn[2]}></span></h3>
        <div className={showSocial ? "social-icons2 active" : "social-icons2"} >
            <a href="https://www.facebook.com/JoaoDRLemos"><FacebookRounded /></a>
            <a href="https://www.instagram.com/joao_lemings/"><Instagram /></a>
            <a href="https://github.com/Lemos467"><GitHub /></a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-lemos-304b74145/"><LinkedIn /></a>
        </div>`;
        
        console.log(test);

        greetingRef.current.appendChild(test);
        console.log(greetingRef.current);

        //------------------------------------
        // Greeting Typing animation
        //------------------------------------
        
        setShowSocial(false);
        setTimeout(() => setShowSocial(true), 4500);

        console.log(showSocial);

        init(greetingRefEn[0].current,
            {
                loop: false,
                showCursor: false,
                strings: [lang === 'en' ? "Hi there, I'm" : "Olá, eu sou o"],
                typeSpeed: 50,
                onFinished: function () {
                    init(greetingRefEn[1].current,
                        {
                            loop: false,
                            showCursor: false,
                            strings: ["João Lemos"],
                            typeSpeed: 80,
                            onFinished: function () {
                                init(greetingRefEn[2].current,
                                    {
                                        loop: false,
                                        showCursor: false,
                                        typeSpeed: 50,
                                        strings: [lang === 'en' ? "Software Developer" : "sou Software Developer"],

                                    });

                            }
                        });
                }
            });
        return () => {
            greetingRefEn.forEach((gr) => gr.current.innerHTML = "");
        }
    }, [lang]);