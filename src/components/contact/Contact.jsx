import "../contact/contact.scss";
import { Instagram, GitHub, LinkedIn } from '@mui/icons-material';

export default function Contact({lang}) {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <div className="contact-text">
                    <h1>{lang === 'en' ? "contact me" : "contactar"}</h1>
                    <p>
                        {lang === 'en' ? "Thank you for visiting my portfolio site." : "Obrigado por visitares o meu portfolio"}
                    </p>
                    <p>
                        {lang === 'en' ? "If you're interested in getting in contact, please fill out this form or access my social medias."
                        : "Se estás interessado em contactar me, por favor preenche este formulário ou acede às minhas redes sociais."}
                    </p>
                    <div className="social-icons" >
                        <a href="https://www.instagram.com/joao_lemings/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                        <a href="https://github.com/Lemos467" target="_blank" rel="noopener noreferrer"><GitHub /></a>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-lemos-304b74145/" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <form>
                    <input type="text" placeholder="> email" />
                    <input type="text" placeholder={lang === 'en' ? "> subject" : "> assunto"} />
                    <textarea placeholder={lang === 'en' ? "> message" : "> mensagem"} ></textarea>
                    <button type="submit">{lang === 'en' ? "send" : "enviar"}</button>
                </form>
            </div>
        </div>
    );
}
