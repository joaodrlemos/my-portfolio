import { ProjectItem } from '@typings/generalTypes';
import { getImage, getLogo } from '@utils/imageUtils';

export const PersonalProjectsData: ProjectItem[] = [
  {
    id: 0,
    name: 'Keeper',
    descEn: 'A notepad WebApp where you can create your own notes.',
    descPt:
      'Uma aplicação Web bloco de notas onde podes criar as tuas próprias.',
    img: getImage('KeeperApp.webp'), // ✅ FIXED
    backgroundColor: '245,186,19',
    font: 'Montserrat',
    url: 'https://note-keeper-project.netlify.app',
  },
  {
    id: 1,
    name: 'Hydra',
    descEn:
      'A proof of concept WebApp for displaying, searching and filtering users.',
    descPt:
      'Uma aplicação Web prova de conceito para listar, procurar e filtrar utilizadores',
    img: getImage('Hydra-preview.webp'), // ✅ FIXED
    backgroundColor: '233,180,180',
    font: 'Montserrat',
    url: 'https://hydrausers.netlify.app',
  },
  {
    id: 2,
    name: 'Leminflix',
    descEn: 'A Netflix clone WebApp with movie and TV show info.',
    descPt:
      'Uma aplicação Web clone da Netflix, com informação de filmes e séries.',
    img: getImage('leminflix.webp'), // ✅ FIXED
    backgroundColor: '210,29,36',
    font: 'BebasNeue',
    url: 'https://leminflix.netlify.app',
  },
];

export const ProfessionalProjectsData: ProjectItem[] = [
  {
    id: 0,
    name: 'MEO BlueTicket',
    descEn:
      'The official MEO MobileApp to buy tickets for concerts, festivals, exhibitions, sports, and family events.',
    descPt:
      'A aplicação Móvel oficial da MEO, onde se compram bilhetes para Concertos, Festivais, Espetáculos, eventos desportivos, etc.',
    img: getImage('meobg.webp'), // ✅ FIXED
    logo: getLogo('MEO_Blueticket_Logo.png'), // ✅ FIXED
    backgroundColor: '0,153,171',
    font: 'Montserrat',
    url: undefined,
    startBackgroundColor: false,
  },
  {
    id: 1,
    name: 'Chem',
    descEn:
      'A WebTool designed to simulate, visualize, and create graphs on chemical processes, primarily focusing on titration and distillation.',
    descPt:
      'Uma ferramenta Web desenvolvida para simular, visualizar e criar grafos de processos químicos, com foco principal em titulação e destilação.',
    img: getImage('chem_home.webp'), // ✅ FIXED
    logo: getLogo('chem-logo2.png'), // ✅ FIXED
    backgroundColor: '57,78,44',
    font: 'Arial',
    url: undefined,
  },
];
