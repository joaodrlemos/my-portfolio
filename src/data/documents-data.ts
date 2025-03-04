import { DocumentItem, DocumentName } from '@/typings/generalTypes';

export const DocumentsData: Record<string, DocumentItem> = {
  [DocumentName.BACHELORS_COMPUTER_SCIENCE]: {
    name: DocumentName.BACHELORS_COMPUTER_SCIENCE,
    img: '/src/assets/docs/bachelors_degree_diploma.png',
  },
  [DocumentName.GDPR]: {
    name: DocumentName.GDPR,
    link: 'https://lms.nau.edu.pt/certificates/58970f0bce634d31b219bbe6f41db3a7',
    img: '/src/assets/docs/nau_gdpr_certification.png',
  },
  [DocumentName.CIBERSAFE_CITIZEN]: {
    name: DocumentName.CIBERSAFE_CITIZEN,
    link: 'https://lms.nau.edu.pt/certificates/e7db40c6a5ea48818de270720667d6e1',
    img: '/src/assets/docs/nau_cibersafety_certification.png',
  },
  [DocumentName.JIRA_FUNDAMENTALS]: {
    name: DocumentName.JIRA_FUNDAMENTALS,
    link: 'https://university.atlassian.com/student/award/m34y7h3LMsmgvBwNuR7zS5WF',
    img: '/src/assets/docs/atlassian_jira_certification.png',
  },
  [DocumentName.CONFLUENCE_FUNDAMENTALS]: {
    name: DocumentName.CONFLUENCE_FUNDAMENTALS,
    link: 'https://university.atlassian.com/student/award/Bk4EvYzXZzUtnN9NEXwEY4mE',
    img: '/src/assets/docs/atlassian_confluence_certification.png',
  },
  [DocumentName.RESPONSIVE_WEBDESIGN]: {
    name: DocumentName.RESPONSIVE_WEBDESIGN,
    link: 'https://www.freecodecamp.org/certification/Lemos/responsive-web-design',
    img: '/src/assets/docs/freecodecamp_responsive_websdesign_certification.png',
  },
  [DocumentName.JAVASCRIPT_ALGORITHMS_AND_DATA_STRUCTURES]: {
    name: DocumentName.JAVASCRIPT_ALGORITHMS_AND_DATA_STRUCTURES,
    link: 'https://www.freecodecamp.org/certification/Lemos/javascript-algorithms-and-data-structures',
    img: '/src/assets/docs/freecodecamp_javascript_certification.png',
  },
  [DocumentName.UNDERSTANDING_TYPESCRIPT]: {
    name: DocumentName.UNDERSTANDING_TYPESCRIPT,
    link: 'https://www.udemy.com/certificate/UC-ccb0d7d7-6644-44f7-b02f-5a502ae8a348/',
    img: '/src/assets/docs/udemy_typescript_certification.jpg',
  },
  [DocumentName.FRONTEND_DEVELOPER]: {
    name: DocumentName.FRONTEND_DEVELOPER,
    link: 'https://www.hackerrank.com/certificates/b9a35184bc9d',
    img: '/src/assets/docs/hackerrank_frontend_certification.png',
  },
  [DocumentName.LEARNING_NEXTJS]: {
    name: DocumentName.LEARNING_NEXTJS,
    link: 'https://media.licdn.com/dms/image/v2/D4D22AQEgi7qYk6cR9g/feedshare-shrink_1280/feedshare-shrink_1280/0/1706263484542?e=1744243200&v=beta&t=q9Y-nu3cgkV7SfBh5nVgLPzFhkJqfdzz9W7WKqIVwy0',
    img: '/src/assets/docs/linkedin_nextjs_certification.jpg',
  },
};
