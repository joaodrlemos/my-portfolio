import "../projects/projects.scss";

export default function Projects({lang}) {
    return (
        <div className="projects" id="projects">
            <div className="header">
                <h1>{lang === 'en' ? "projects" : "projectos"}</h1>
            </div>
            <div className="project-container">
                <div className="project-list">
                    <div style={{
                        backgroundImage: `url(${require("../../assets/pictures/projects/KeeperApp.png")})`,
                        backgroundPosition: 'top',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }} className="project-item">
                        <div className="project-title">
                            <h2>Keeper</h2>
                        </div>
                        <div className="wrapper">
                            <div className="item-info">
                                <h2>{lang === 'en' ? "A notepad App where you can make your own notes."
                                :"Uma aplicação bloco de notas onde podes criar as tuas próprias."}</h2>
                                <a href="https://note-keeper-project.netlify.app" target="_blank" rel="noopener noreferrer">{lang === 'en' ? "visit" : "visitar"}</a>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: `url(${require("../../assets/pictures/projects/movieDB.png")})`,
                        backgroundPosition: 'top',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }} className="project-item">
                        <div className="project-title">
                            <div className="test">
                                <h2>movieDB</h2>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="item-info">
                                <h2>{lang === 'en' ? "A simple movie database where you can search and see ratings."
                                :"Uma simples base de dados de filmes onde podes procurar e ver as pontuações."}</h2>
                                <a href="https://movie-js-db.netlify.app" target="_blank" rel="noopener noreferrer">{lang === 'en' ? "visit" : "visitar"}</a>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: `url(${require("../../assets/pictures/projects/portfolio.png")})`,
                        backgroundPosition: 'top',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }} className="project-item">
                        <div className="project-title">
                            <div className="test">
                                <h2>myPortfolio</h2>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="item-info">
                                <h2>{lang === 'en' ? "My personal portfolio page."
                                : "O meu portfolio pessoal."}</h2>
                                <a href="#home">{lang === 'en' ? "visit" : "visitar"}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
