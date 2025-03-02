import {
  ProjectFunction,
  ProjectItem,
  ProjectTechnology,
  ProjectType,
  ProjectTool,
} from '@/typings/generalTypes';
import { getImage, getLogo } from '@/utils/imageUtils';
import { FunctionsData } from './functions-data';
import { TechnologiesData, ToolsData } from './technologies-tools-data';

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
    year: 2023,
    technologies: [
      TechnologiesData[ProjectTechnology.HTML],
      TechnologiesData[ProjectTechnology.CSS],
      TechnologiesData[ProjectTechnology.REACT],
    ],
    tools: [
      ToolsData[ProjectTool.GIT],
      ToolsData[ProjectTool.JIRA],
      ToolsData[ProjectTool.CONFLUENCE],
    ],
    functions: [
      FunctionsData[ProjectFunction.DESIGNED],
      FunctionsData[ProjectFunction.DEVELOPED],
    ],
  },
  {
    id: 1,
    name: 'Hydra',
    descEn:
      'A proof of concept WebApp for displaying, searching, and filtering users.',
    descPt:
      'Uma aplicação Web prova de conceito para listar, procurar e filtrar utilizadores',
    img: getImage('Hydra-preview.webp'),
    backgroundColor: '233,180,180',
    font: 'Montserrat',
    url: 'https://hydrausers.netlify.app',
    type: ProjectType.PERSONAL,
    year: 2023,
    technologies: [
      TechnologiesData[ProjectTechnology.HTML],
      TechnologiesData[ProjectTechnology.CSS],
      TechnologiesData[ProjectTechnology.REACT],
    ],
    tools: [
      ToolsData[ProjectTool.GIT],
      ToolsData[ProjectTool.JIRA],
      ToolsData[ProjectTool.CONFLUENCE],
    ],
    functions: [
      FunctionsData[ProjectFunction.DESIGNED],
      FunctionsData[ProjectFunction.DEVELOPED],
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
    year: 2023,
    technologies: [
      TechnologiesData[ProjectTechnology.HTML],
      TechnologiesData[ProjectTechnology.CSS],
      TechnologiesData[ProjectTechnology.REACT],
    ],
    tools: [
      ToolsData[ProjectTool.GIT],
      ToolsData[ProjectTool.JIRA],
      ToolsData[ProjectTool.CONFLUENCE],
    ],
    functions: [
      FunctionsData[ProjectFunction.DESIGNED],
      FunctionsData[ProjectFunction.DEVELOPED],
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
    year: 2023,
    technologies: [
      TechnologiesData[ProjectTechnology.HTML],
      TechnologiesData[ProjectTechnology.CSS],
      TechnologiesData[ProjectTechnology.REACT],
    ],
    tools: [
      ToolsData[ProjectTool.GIT],
      ToolsData[ProjectTool.JIRA],
      ToolsData[ProjectTool.CONFLUENCE],
    ],
    functions: [
      FunctionsData[ProjectFunction.DESIGNED],
      FunctionsData[ProjectFunction.DEVELOPED],
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
    year: 2023,
    technologies: [
      TechnologiesData[ProjectTechnology.HTML],
      TechnologiesData[ProjectTechnology.CSS],
      TechnologiesData[ProjectTechnology.REACT],
    ],
    tools: [
      ToolsData[ProjectTool.GIT],
      ToolsData[ProjectTool.JIRA],
      ToolsData[ProjectTool.CONFLUENCE],
    ],
    functions: [
      FunctionsData[ProjectFunction.DESIGNED],
      FunctionsData[ProjectFunction.DEVELOPED],
    ],
  },
  {
    id: 5,
    name: 'MovieDB',
    descEn:
      'A movie database app that allows users to search and save their favorite movies.',
    descPt:
      'Uma aplicação de base de dados de filmes onde os utilizadores podem pesquisar e guardar os seus filmes favoritos.',
    img: getImage('movieDB.webp'),
    backgroundColor: '100,100,255',
    font: 'Montserrat',
    url: 'https://moviedb-example.netlify.app',
    type: ProjectType.PERSONAL,
    year: 2023,
    technologies: [
      TechnologiesData[ProjectTechnology.HTML],
      TechnologiesData[ProjectTechnology.CSS],
      TechnologiesData[ProjectTechnology.REACT],
    ],
    tools: [
      ToolsData[ProjectTool.GIT],
      ToolsData[ProjectTool.JIRA],
      ToolsData[ProjectTool.CONFLUENCE],
    ],
    functions: [
      FunctionsData[ProjectFunction.DESIGNED],
      FunctionsData[ProjectFunction.DEVELOPED],
    ],
  },
  {
    id: 6,
    name: 'TaskFlow',
    descEn:
      'A productivity app for managing daily tasks and schedules efficiently.',
    descPt:
      'Uma aplicação de produtividade para gerir tarefas diárias e horários de forma eficiente.',
    img: getImage('taskflow.webp'),
    backgroundColor: '45,156,219',
    font: 'Montserrat',
    url: 'https://taskflow-app.netlify.app',
    type: ProjectType.PERSONAL,
    year: 2023,
    technologies: [
      TechnologiesData[ProjectTechnology.HTML],
      TechnologiesData[ProjectTechnology.CSS],
      TechnologiesData[ProjectTechnology.REACT],
    ],
    tools: [
      ToolsData[ProjectTool.GIT],
      ToolsData[ProjectTool.JIRA],
      ToolsData[ProjectTool.CONFLUENCE],
    ],
    functions: [
      FunctionsData[ProjectFunction.DESIGNED],
      FunctionsData[ProjectFunction.DEVELOPED],
    ],
  },
  {
    id: 7,
    name: 'E-Commerce Dashboard',
    descEn:
      'A dashboard for tracking e-commerce sales, customer data, and product analytics.',
    descPt:
      'Um painel de controlo para monitorizar vendas, dados de clientes e análise de produtos em e-commerce.',
    img: getImage('ecommerce_dashboard.webp'),
    backgroundColor: '78,132,201',
    font: 'Montserrat',
    url: 'https://ecommerce-dashboard.netlify.app',
    type: ProjectType.ACADEMICAL,
    year: 2023,
    technologies: [
      TechnologiesData[ProjectTechnology.HTML],
      TechnologiesData[ProjectTechnology.CSS],
      TechnologiesData[ProjectTechnology.REACT],
    ],
    tools: [
      ToolsData[ProjectTool.GIT],
      ToolsData[ProjectTool.JIRA],
      ToolsData[ProjectTool.CONFLUENCE],
    ],
    functions: [
      FunctionsData[ProjectFunction.DESIGNED],
      FunctionsData[ProjectFunction.DEVELOPED],
    ],
  },
];
