// Import all images using ESModules (required for Vite)
import KeeperAppImg from "../assets/pictures/projects/KeeperApp.png";
import HydraPreviewImg from "../assets/pictures/projects/Hydra-preview.png";
import LeminflixImg from "../assets/pictures/projects/leminflix.png";

import BlueticketLogo from "../assets/logos/MEO_Blueticket_Logo.png";
import MeoBgImg from "../assets/pictures/projects/meobg.png";
import ChemLogo from "../assets/logos/chem-logo2.png";
import ChemHomeImg from "../assets/pictures/projects/chem_home.png";

export const PersonalProjectsData = [
  {
    id: "0",
    name: "Keeper",
    descEn: "A notepad WebApp where you can create your own notes.",
    descPt:
      "Uma aplicação Web bloco de notas onde podes criar as tuas próprias.",
    img: `url(${KeeperAppImg})`,
    backgroundColor: "245,186,19",
    font: "Montserrat",
    url: "https://note-keeper-project.netlify.app",
  },
  {
    id: "1",
    name: "Hydra",
    descEn:
      "A proof of concept WebApp for displaying, searching and filtering users.",
    descPt:
      "Uma aplicação Web prova de conceito para listar, procurar e filtrar utilizadores",
    img: `url(${HydraPreviewImg})`,
    backgroundColor: "233,180,180",
    font: "Montserrat",
    url: "https://hydrausers.netlify.app",
  },
  {
    id: "2",
    name: "Leminflix",
    descEn: "A Netflix clone WebApp with movie and TV show info.",
    descPt:
      "Uma aplicação Web clone da Netflix, com informação de filmes e séries.",
    img: `url(${LeminflixImg})`,
    backgroundColor: "210,29,36",
    font: "BebasNeue",
    url: "https://leminflix.netlify.app",
  },
];

export const ProfessionalProjectsData = [
  {
    id: "0",
    name: "MEO BlueTicket",
    descEn:
      "The official MEO MobileApp to buy tickets for Concerts, Festivals, Exhibitions, Sports and family events, etc...",
    descPt:
      "A aplicação Móvel oficial da MEO, onde se compram bilhetes para Concertos, Festivais, Espetáculos, eventos desportivos, etc...",
    logo: BlueticketLogo,
    img: `url(${MeoBgImg})`,
    backgroundColor: "0,153,171",
    startBackgroundColor: false,
    font: "Montserrat",
    url: null,
  },
  {
    id: "1",
    name: "Chem",
    descEn:
      "A WebTool designed to simulate, visualize and create graphs on chemical processes, primarily focusing on titration and distillation.",
    descPt:
      "Uma ferramenta Web desenvolvida para simular, visualizar e criar grafos de processos químicos, com foco principal em titulação e destilação.",
    logo: ChemLogo,
    img: `url(${ChemHomeImg})`,
    font: "Arial",
    backgroundColor: "57,78,44",
    url: null,
  },
];
