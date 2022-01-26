import "../contact/contact.scss";

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
                        If you're interested in getting in contact with me, please fill out this form.
                    </p>
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
