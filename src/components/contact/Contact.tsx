import React, { memo } from 'react';
import { Instagram, GitHub, LinkedIn } from '@mui/icons-material';
import styles from '../contact/Contact.module.scss';
import { useAppContext } from '@/context/AppContext';
import { Language } from '@/typings/generalTypes';

const Contact: React.FC = memo(() => {
  const { language } = useAppContext();

  return (
    <div className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.contactText}>
          <h1>{language === Language.EN ? 'contact' : 'contactar'}</h1>
          <p>
            {language === Language.EN
              ? 'Thank you for visiting my portfolio.'
              : 'Obrigado por visitares o meu portfolio'}
          </p>
          <p>
            {language === Language.EN
              ? "If you're interested in getting in contact, please send me an email or access my social medias."
              : 'Se estás interessado em contactar me, por favor envia um email ou acede às minhas redes sociais.'}
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
});

export default Contact;
