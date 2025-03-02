import {
  ProjectItem,
  ProjectType,
  ProjectFunctions,
  ProjectTechnologies,
} from '@typings/generalTypes';
import { getImage, getLogo } from '@utils/imageUtils';

export const ProjectsData: ProjectItem[] = [
  {
    id: 0,
    name: 'Keeper',
    descEn: 'A notepad WebApp where you can create your own notes.',
    descPt:
      'Uma aplicação Web bloco de notas onde podes criar as tuas próprias.',
    img: getImage('KeeperApp.webp'),
    backgroundColor: '245,186,19',
    font: 'Montserrat',
    url: 'https://note-keeper-project.netlify.app',
    type: ProjectType.PERSONAL,
    functions: [ProjectFunctions.DEVELOPED, ProjectFunctions.DESIGNED],
    technologies: [
      ProjectTechnologies.REACT,
      ProjectTechnologies.TYPESCRIPT,
      ProjectTechnologies.SCSS,
    ],
  },
  {
    id: 1,
    name: 'Hydra',
    descEn:
      'A proof of concept WebApp for displaying, searching and filtering users.',
    descPt:
      'Uma aplicação Web prova de conceito para listar, procurar e filtrar utilizadores',
    img: getImage('Hydra-preview.webp'),
    backgroundColor: '233,180,180',
    font: 'Montserrat',
    url: 'https://hydrausers.netlify.app',
    type: ProjectType.PERSONAL,
    functions: [ProjectFunctions.DEVELOPED, ProjectFunctions.PLANNED],
    technologies: [
      ProjectTechnologies.REACT,
      ProjectTechnologies.TYPESCRIPT,
      ProjectTechnologies.SCSS,
    ],
  },
  {
    id: 2,
    name: 'Leminflix',
    descEn: 'A Netflix clone WebApp with movie and TV show info.',
    descPt:
      'Uma aplicação Web clone da Netflix, com informação de filmes e séries.',
    img: getImage('leminflix.webp'),
    backgroundColor: '210,29,36',
    font: 'BebasNeue',
    url: 'https://leminflix.netlify.app',
    type: ProjectType.PERSONAL,
    functions: [ProjectFunctions.DEVELOPED, ProjectFunctions.DESIGNED],
    technologies: [
      ProjectTechnologies.REACT,
      ProjectTechnologies.TYPESCRIPT,
      ProjectTechnologies.SCSS,
      ProjectTechnologies.VITE,
    ],
  },
  {
    id: 3,
    name: 'MEO BlueTicket',
    descEn:
      'The official MEO MobileApp to buy tickets for concerts, festivals, exhibitions, sports, and family events.',
    descPt:
      'A aplicação Móvel oficial da MEO, onde se compram bilhetes para Concertos, Festivais, Espetáculos, eventos desportivos, etc.',
    img: getImage('meobg.webp'),
    logo: getLogo('MEO_Blueticket_Logo.png'),
    backgroundColor: '0,153,171',
    font: 'Montserrat',
    url: null,
    startBackgroundColor: false,
    type: ProjectType.PROFESSIONAL,
    functions: [ProjectFunctions.DEVELOPED],
    technologies: [
      ProjectTechnologies.REACT_NATIVE,
      ProjectTechnologies.TYPESCRIPT,
      ProjectTechnologies.EXPO,
    ],
  },
  {
    id: 4,
    name: 'Chem',
    descEn:
      'A WebTool designed to simulate, visualize, and create graphs on chemical processes, primarily focusing on titration and distillation.',
    descPt:
      'Uma ferramenta Web desenvolvida para simular, visualizar e criar grafos de processos químicos, com foco principal em titulação e destilação.',
    img: getImage('chem_home.webp'),
    logo: getLogo('chem-logo2.png'),
    backgroundColor: '57,78,44',
    font: 'Arial',
    url: null,
    type: ProjectType.PROFESSIONAL,
    functions: [ProjectFunctions.DEVELOPED, ProjectFunctions.PLANNED],
    technologies: [
      ProjectTechnologies.REACT,
      ProjectTechnologies.TYPESCRIPT,
      ProjectTechnologies.SCSS,
      ProjectTechnologies.VITE,
    ],
  },
  {
    id: 5,
    name: 'Chem',
    descEn:
      'A WebTool designed to simulate, visualize, and create graphs on chemical processes, primarily focusing on titration and distillation.',
    descPt:
      'Uma ferramenta Web desenvolvida para simular, visualizar e criar grafos de processos químicos, com foco principal em titulação e destilação.',
    img: getImage('chem_home.webp'),
    logo: getLogo('chem-logo2.png'),
    backgroundColor: '57,78,44',
    font: 'Arial',
    url: null,
    type: ProjectType.PROFESSIONAL,
    functions: [ProjectFunctions.DEVELOPED, ProjectFunctions.PLANNED],
    technologies: [
      ProjectTechnologies.REACT,
      ProjectTechnologies.TYPESCRIPT,
      ProjectTechnologies.SCSS,
      ProjectTechnologies.VITE,
    ],
  },
  {
    id: 6,
    name: 'Chem',
    descEn:
      'A WebTool designed to simulate, visualize, and create graphs on chemical processes, primarily focusing on titration and distillation.',
    descPt:
      'Uma ferramenta Web desenvolvida para simular, visualizar e criar grafos de processos químicos, com foco principal em titulação e destilação.',
    img: getImage('chem_home.webp'),
    logo: getLogo('chem-logo2.png'),
    backgroundColor: '57,78,44',
    font: 'Arial',
    url: null,
    type: ProjectType.PROFESSIONAL,
    functions: [ProjectFunctions.DEVELOPED, ProjectFunctions.PLANNED],
    technologies: [
      ProjectTechnologies.REACT,
      ProjectTechnologies.TYPESCRIPT,
      ProjectTechnologies.SCSS,
      ProjectTechnologies.VITE,
    ],
  },
  {
    id: 7,
    name: 'Chem',
    descEn:
      'A WebTool designed to simulate, visualize, and create graphs on chemical processes, primarily focusing on titration and distillation.',
    descPt:
      'Uma ferramenta Web desenvolvida para simular, visualizar e criar grafos de processos químicos, com foco principal em titulação e destilação.',
    img: getImage('chem_home.webp'),
    logo: getLogo('chem-logo2.png'),
    backgroundColor: '57,78,44',
    font: 'Arial',
    url: null,
    type: ProjectType.PROFESSIONAL,
    functions: [ProjectFunctions.DEVELOPED, ProjectFunctions.PLANNED],
    technologies: [
      ProjectTechnologies.REACT,
      ProjectTechnologies.TYPESCRIPT,
      ProjectTechnologies.SCSS,
      ProjectTechnologies.VITE,
    ],
  },
  {
    id: 8,
    name: 'Chem',
    descEn:
      'A WebTool designed to simulate, visualize, and create graphs on chemical processes, primarily focusing on titration and distillation.',
    descPt:
      'Uma ferramenta Web desenvolvida para simular, visualizar e criar grafos de processos químicos, com foco principal em titulação e destilação.',
    img: getImage('chem_home.webp'),
    logo: getLogo('chem-logo2.png'),
    backgroundColor: '57,78,44',
    font: 'Arial',
    url: null,
    type: ProjectType.PROFESSIONAL,
    functions: [ProjectFunctions.DEVELOPED, ProjectFunctions.PLANNED],
    technologies: [
      ProjectTechnologies.REACT,
      ProjectTechnologies.TYPESCRIPT,
      ProjectTechnologies.SCSS,
      ProjectTechnologies.VITE,
    ],
  },
  {
    id: 9,
    name: 'Chem',
    descEn:
      'A WebTool designed to simulate, visualize, and create graphs on chemical processes, primarily focusing on titration and distillation.',
    descPt:
      'Uma ferramenta Web desenvolvida para simular, visualizar e criar grafos de processos químicos, com foco principal em titulação e destilação.',
    img: getImage('chem_home.webp'),
    logo: getLogo('chem-logo2.png'),
    backgroundColor: '57,78,44',
    font: 'Arial',
    url: null,
    type: ProjectType.PROFESSIONAL,
    functions: [ProjectFunctions.DEVELOPED, ProjectFunctions.PLANNED],
    technologies: [
      ProjectTechnologies.REACT,
      ProjectTechnologies.TYPESCRIPT,
      ProjectTechnologies.SCSS,
      ProjectTechnologies.VITE,
    ],
  },
];
