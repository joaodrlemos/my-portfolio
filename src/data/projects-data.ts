import { ProjectItem } from "@typings/projectTypes";

import KeeperAppImg from "@/assets/pictures/projects/KeeperApp.webp";
import HydraPreviewImg from "@/assets/pictures/projects/Hydra-preview.webp";
import LeminflixImg from "@/assets/pictures/projects/leminflix.webp";

import BlueticketLogo from "@/assets/logos/MEO_Blueticket_Logo.png";
import MeoBgImg from "@/assets/pictures/projects/meobg.webp";
import ChemLogo from "@/assets/logos/chem-logo2.png";
import ChemHomeImg from "@/assets/pictures/projects/chem_home.webp";

export const PersonalProjectsData: ProjectItem[] = [
  {
    id: 0,
    name: "Keeper",
    descEn: "A notepad WebApp where you can create your own notes.",
    descPt:
      "Uma aplicação Web bloco de notas onde podes criar as tuas próprias.",
    img: KeeperAppImg,
    backgroundColor: "245,186,19",
    font: "Montserrat",
    url: "https://note-keeper-project.netlify.app",
  },
  {
    id: 1,
    name: "Hydra",
    descEn:
      "A proof of concept WebApp for displaying, searching and filtering users.",
    descPt:
      "Uma aplicação Web prova de conceito para listar, procurar e filtrar utilizadores",
    img: HydraPreviewImg,
    backgroundColor: "233,180,180",
    font: "Montserrat",
    url: "https://hydrausers.netlify.app",
  },
  {
    id: 2,
    name: "Leminflix",
    descEn: "A Netflix clone WebApp with movie and TV show info.",
    descPt:
      "Uma aplicação Web clone da Netflix, com informação de filmes e séries.",
    img: LeminflixImg,
    backgroundColor: "210,29,36",
    font: "BebasNeue",
    url: "https://leminflix.netlify.app",
  },
];

export const ProfessionalProjectsData: ProjectItem[] = [
  {
    id: 0,
    name: "MEO BlueTicket",
    descEn:
      "The official MEO MobileApp to buy tickets for concerts, festivals, exhibitions, sports, and family events.",
    descPt:
      "A aplicação Móvel oficial da MEO, onde se compram bilhetes para Concertos, Festivais, Espetáculos, eventos desportivos, etc.",
    logo: BlueticketLogo,
    img: MeoBgImg,
    backgroundColor: "0,153,171",
    font: "Montserrat",
    url: undefined,
    startBackgroundColor: false,
  },
  {
    id: 1,
    name: "Chem",
    descEn:
      "A WebTool designed to simulate, visualize, and create graphs on chemical processes, primarily focusing on titration and distillation.",
    descPt:
      "Uma ferramenta Web desenvolvida para simular, visualizar e criar grafos de processos químicos, com foco principal em titulação e destilação.",
    logo: ChemLogo,
    img: ChemHomeImg,
    backgroundColor: "57,78,44",
    font: "Arial",
    url: undefined,
  },
];
