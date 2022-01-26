import "../projects/projects.scss";

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="header">
                <h1>Projects</h1>
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
                                <h2>A notepad App where you can make your own notes.</h2>
                                <div className="technologies">
                                    <div className="tech-item">
                                        html
                                    </div>
                                    <div className="tech-item">
                                        css
                                    </div>
                                    <div className="tech-item">
                                        js
                                    </div>
                                    <div className="tech-item">
                                        react
                                    </div>
                                </div>
                                <a href="https://note-keeper-project.netlify.app" target="_blank">Visit</a>
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
                                <h2>A simple movie database where you can search and see ratings.</h2>
                                <div className="technologies">
                                    <div className="tech-item">
                                        html
                                    </div>
                                    <div className="tech-item">
                                        css
                                    </div>
                                    <div className="tech-item">
                                        js
                                    </div>
                                </div>
                                <a href="https://movie-js-db.netlify.app" target="_blank">Visit</a>
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
                                <h2>My personal portfolio page.</h2>
                                <div className="technologies">
                                    <div className="tech-item">
                                        html
                                    </div>
                                    <div className="tech-item">
                                        css
                                    </div>
                                    <div className="tech-item">
                                        js
                                    </div>
                                    <div className="tech-item">
                                        react
                                    </div>
                                    <div className="tech-item">
                                        sass
                                    </div>
                                </div>
                                <a href="">Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
