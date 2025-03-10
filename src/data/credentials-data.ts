import {
  CredentialItem,
  CredentialType,
  DocumentName,
  Institution,
  ProjectTechnology,
} from '@/types/projectTypes';
import { TechnologiesData } from './technologies-data';
import { institutionsData } from './institutions-data';
import { DocumentsData } from './documents-data';

export const credentialsData: Record<string, CredentialItem> = {
  BACHELORS_COMPUTER_SCIENCE: {
    name: 'Bachelors Computer Science Engineering',
    institution: institutionsData[Institution.FCT],
    type: CredentialType.DEGREE,
    endDate: 'NOV 2019',
    technologies: [
      TechnologiesData[ProjectTechnology.HTML],
      TechnologiesData[ProjectTechnology.CSS],
      TechnologiesData[ProjectTechnology.JAVASCRIPT],
    ],
    document: DocumentsData[DocumentName.BACHELORS_COMPUTER_SCIENCE],
  },
  GDPR: {
    name: 'GDPR',
    institution: institutionsData[Institution.NAU],
    type: CredentialType.CERTIFICATION,
    endDate: 'Aug 2022',
    skills: ['Compliance'],
    document: DocumentsData[DocumentName.GDPR],
  },
  CIBERSAFE_CITIZEN: {
    name: 'Cyber Safety',
    institution: institutionsData[Institution.NAU],
    type: CredentialType.CERTIFICATION,
    endDate: 'Aug 2022',
    skills: ['Security'],
    document: DocumentsData[DocumentName.CIBERSAFE_CITIZEN],
  },
  JIRA_FUNDAMENTALS: {
    name: 'Jira Fundamentals',
    institution: institutionsData[Institution.ATLASSIAN],
    type: CredentialType.CERTIFICATION,
    endDate: 'Aug 2022',
    skills: ['Management'],
    document: DocumentsData[DocumentName.JIRA_FUNDAMENTALS],
  },
  CONFLUENCE_FUNDAMENTALS: {
    name: 'Confluence Fundamentals',
    institution: institutionsData[Institution.ATLASSIAN],
    type: CredentialType.CERTIFICATION,
    endDate: 'Aug 2022',
    skills: ['Management'],
    document: DocumentsData[DocumentName.CONFLUENCE_FUNDAMENTALS],
  },
  RESPONSIVE_WEBDESIGN: {
    name: 'Responsive WebDesign',
    institution: institutionsData[Institution.FREECODECAMP],
    type: CredentialType.CERTIFICATION,
    endDate: 'Jan 2022',
    technologies: [
      TechnologiesData[ProjectTechnology.HTML],
      TechnologiesData[ProjectTechnology.CSS],
      TechnologiesData[ProjectTechnology.JAVASCRIPT],
    ],
    document: DocumentsData[DocumentName.RESPONSIVE_WEBDESIGN],
  },
  JAVASCRIPT_ALGORITHMS_AND_DATA_STRUCTURES: {
    name: 'JavaScript Algorithms and DataStructures',
    institution: institutionsData[Institution.FREECODECAMP],
    type: CredentialType.CERTIFICATION,
    endDate: 'May 2022',
    technologies: [TechnologiesData[ProjectTechnology.JAVASCRIPT]],
    document:
      DocumentsData[DocumentName.JAVASCRIPT_ALGORITHMS_AND_DATA_STRUCTURES],
  },
  UNDERSTANDING_TYPESCRIPT: {
    name: 'Understanding TypeScript',
    institution: institutionsData[Institution.UDEMY],
    type: CredentialType.CERTIFICATION,
    endDate: 'Mar 2023',
    technologies: [
      TechnologiesData[ProjectTechnology.JAVASCRIPT],
      TechnologiesData[ProjectTechnology.TYPESCRIPT],
    ],
    document: DocumentsData[DocumentName.UNDERSTANDING_TYPESCRIPT],
  },
  FRONTEND_DEVELOPER: {
    name: 'FrontEnd Developer',
    institution: institutionsData[Institution.HACKERRANK],
    type: CredentialType.CERTIFICATION,
    endDate: 'Dec 2023',
    technologies: [
      TechnologiesData[ProjectTechnology.HTML],
      TechnologiesData[ProjectTechnology.CSS],
      TechnologiesData[ProjectTechnology.JAVASCRIPT],
      TechnologiesData[ProjectTechnology.TYPESCRIPT],
      TechnologiesData[ProjectTechnology.REACT],
    ],
    document: DocumentsData[DocumentName.FRONTEND_DEVELOPER],
  },
  LEARNING_NEXTJS: {
    name: 'Learning NextJs',
    institution: institutionsData[Institution.LINKEDIN],
    type: CredentialType.CERTIFICATION,
    endDate: 'Jan 2024',
    technologies: [
      TechnologiesData[ProjectTechnology.TYPESCRIPT],
      TechnologiesData[ProjectTechnology.NEXT_JS],
    ],
    document: DocumentsData[DocumentName.LEARNING_NEXTJS],
  },
};
