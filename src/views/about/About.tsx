import React from 'react';
import { useAppContext } from '@/context/AppContext';
import { Language } from '@/types/projectTypes';
import { TechnologiesData } from '@/data/technologies-data';
import styles from './About.module.scss';
import ImageComponent from '@/components/imageComponent/ImageComponent';
import { ToolsData } from '@/data/tools-data';
import { credentialsData } from '@/data/credentials-data';

const About: React.FC = () => {
  const { language } = useAppContext();

  return (
    <div className={styles.about} id="about">
      <div className={styles.container}>
        {/* Left Side - Description */}
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionText}>
            {language === Language.EN ? (
              <>
                <p>
                  I’m a <strong>front-end developer</strong> with a passion for
                  crafting <strong>seamless</strong> and{' '}
                  <strong>engaging</strong> user experiences. Whether it’s{' '}
                  <strong>designing intuitive interfaces</strong>,{' '}
                  <strong>optimizing performance</strong>, or{' '}
                  <strong>building smooth cross-platform applications</strong>,
                  I enjoy bringing ideas to life through <strong>clean</strong>{' '}
                  and <strong>creative code</strong>.
                </p>

                {/* Highlighted Section */}
                <p className={styles.highlightedText}>
                  With <strong>React</strong>, <strong>React Native</strong>,
                  and <strong>TypeScript</strong>, I focus on{' '}
                  <strong>user-centric development</strong>, solving UI
                  challenges, and refining interactions to make technology feel{' '}
                  <strong>effortless</strong>.
                </p>

                <p>
                  To me, <strong>development</strong> is more than just writing
                  code. It’s about shaping <strong>innovative ideas</strong>{' '}
                  into reality and creating experiences that leave a{' '}
                  <strong>lasting impact</strong> on users. Check out my{' '}
                  <strong>projects</strong> or connect with me through my{' '}
                  <strong>socials</strong>!
                </p>
              </>
            ) : (
              <>
                <p>
                  Eu sou um <strong>desenvolvedor front-end</strong> com paixão
                  por criar experiências de utilizador <strong>fluídas</strong>{' '}
                  e <strong>envolventes</strong>. Seja a{' '}
                  <strong>conceber interfaces intuitivas</strong>,{' '}
                  <strong>otimizar o desempenho</strong> ou a{' '}
                  <strong>
                    desenvolver aplicações multiplataforma eficientes
                  </strong>
                  , gosto de dar vida às ideias através de{' '}
                  <strong>código limpo</strong> e <strong>criativo</strong>.
                </p>

                {/* Highlighted Section */}
                <p className={styles.highlightedText}>
                  Com <strong>React</strong>, <strong>React Native</strong> e{' '}
                  <strong>TypeScript</strong>, concentro-me no{' '}
                  <strong>desenvolvimento centrado no utilizador</strong>,
                  resolvendo desafios de UI e refinando interações para tornar a
                  tecnologia <strong>intuitiva e acessível</strong>.
                </p>

                <p>
                  Para mim, o <strong>desenvolvimento</strong> vai além da
                  simples escrita de código. Trata-se de transformar{' '}
                  <strong>ideias inovadoras</strong> em realidade e criar
                  experiências que deixem um <strong>impacto duradouro</strong>{' '}
                  nos utilizadores. Explora os meus <strong>projetos</strong> e
                  entra em contacto comigo através das minhas{' '}
                  <strong>redes sociais</strong>!
                </p>
              </>
            )}
          </div>
        </div>

        {/* Right Side - Skills */}
        <div className={styles.skillsContainer}>
          <div className={styles.technologiesAndTools}>
            <div className={styles.technologiesContainer}>
              <h2 className={styles.technologiesTitle}>
                {language === Language.EN ? 'Technologies' : 'Tecnologias'}
              </h2>
              <div className={styles.technologiesGrid}>
                {Object.values(TechnologiesData).map((tech) => (
                  <div key={tech.name} className={styles.technology}>
                    <ImageComponent
                      name={tech.name}
                      img={tech.icon}
                      desc={tech.name}
                    />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.toolsContainer}>
              <h2 className={styles.toolsTitle}>
                {language === Language.EN ? 'Tools' : 'Ferramentas'}
              </h2>
              <div className={styles.toolsGrid}>
                {Object.values(ToolsData).map((tool) => (
                  <div key={tool.name} className={styles.tool}>
                    <ImageComponent
                      name={tool.name}
                      img={tool.icon}
                      desc={tool.name}
                    />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.credentialsContainer}>
            <div className={styles.certificationsContainer}>
              <h2 className={styles.certificationsTitle}>
                {language === Language.EN ? 'Certifications' : 'Certificações'}
              </h2>
              <div className={styles.certificationsGrid}>
                {Object.values(credentialsData).map((certification) => (
                  <div
                    key={certification.name}
                    className={styles.certification}
                  >
                    <ImageComponent
                      name={certification.name}
                      img={certification.institution.icon}
                      desc={certification.name}
                    />
                    <span>{certification.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About.displayName = 'About';
export default About;
