import "../contact/contact.scss";
import { Instagram, GitHub, LinkedIn } from '@mui/icons-material';

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <div className="contact-text">
                    <h1>Contact me</h1>
                    <p>
                        Thank you for visiting my portfolio site.
                    </p>
                    <p>
                        If you're interested in getting in contact, please fill out this form or access my social medias.
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
                    <input type="text" placeholder="> Email" />
                    <input type="text" placeholder="> Subject" />
                    <textarea placeholder="> Message" ></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}
