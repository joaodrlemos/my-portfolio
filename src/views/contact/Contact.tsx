import React, { memo } from 'react';
import { useAppContext } from '@/context/AppContext';
import { Language, SocialItem } from '@/types/projectTypes';
import { SocialsData } from '@/data/socials-data';

import styles from './Contact.module.scss';
import ImageComponent from '@/components/imageComponent/ImageComponent';

const Contact: React.FC = () => {
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
            {Object.values(SocialsData).map((social: SocialItem) => {
              return (
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <ImageComponent
                    name={social.name}
                    img={social.icon}
                    desc={social.name}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.displayName = 'Contact';
export default memo(Contact);
