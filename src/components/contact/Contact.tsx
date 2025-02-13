import React from "react";
import { Instagram, GitHub, LinkedIn } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import styles from "./Contact.module.scss";

const Contact: React.FC = () => {
  const lang = useSelector((state: RootState) => state.language.value);

  return (
    <div className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.contactText}>
          <h1>{lang === "en" ? "contact" : "contactar"}</h1>
          <p>
            {lang === "en"
              ? "Thank you for visiting my portfolio."
              : "Obrigado por visitares o meu portfolio"}
          </p>
          <p>
            {lang === "en"
              ? "If you're interested in getting in contact, please send me an email or access my social medias."
              : "Se estás interessado em contactar me, por favor envia um email ou acede às minhas redes sociais."}
          </p>
          <p className={styles.email}>joaodrlemos@gmail.com</p>
          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com/johny_lemings/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://github.com/joaodrlemos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/joaodrlemos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
