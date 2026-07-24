export interface ExperienceEntry {
  period: string
  role: string
  org: string
  location: string
  description: string
  current?: boolean
}

export const experienceTimeline: ExperienceEntry[] = [
  {
    period: 'MAY 2025 — PRESENT',
    role: 'Software Engineer',
    org: 'Red Hat',
    location: 'Madrid, Spain',
    description: 'Working on Podman Desktop (podman-desktop.io) and the Kaiden project (openkaiden.ai).',
    current: true
  },
  {
    period: 'SEP 2024 — JUL 2026',
    role: 'Master’s in Software Project Management and Direction',
    org: 'Universidad Politécnica de Madrid',
    location: 'Madrid, Spain',
    description:
      'Started during a career break, then continued part-time after joining Red Hat — focused on leading software teams and projects, managing risk, resources and deadlines.'
  },
  {
    period: 'JAN 2024 — AUG 2024',
    role: 'Senior Front-End Developer',
    org: 'BASF',
    location: 'Madrid, Spain',
    description:
      'Led the technical aspects of a design system project built with PrimeFaces, implemented across React, Vue and Angular.'
  },
  {
    period: 'AUG 2021 — JAN 2024',
    role: 'Frontend Developer',
    org: 'LanguageWire',
    location: 'Madrid, Spain',
    description:
      'Led the front-end development of a "Term Base" management system with Vue.js, built end-to-end automation tests with Cypress, and used Azure DevOps for project management and CI/CD.'
  },
  {
    period: 'NOV 2019 — AUG 2021',
    role: 'Specialist Web Developer',
    org: 'Vodafone',
    location: 'Madrid, Spain',
    description:
      'Front-end developer on the "Mi Vodafone" web app using Angular 8 and 11, and part of the team building the company’s design system.'
  },
  {
    period: 'SEP 2018 — SEP 2019',
    role: 'Web Consultant',
    org: 'Adneom',
    location: 'Brussels, Belgium',
    description:
      'Developed web and mobile projects with Angular 7, React, Node.js, PWA and Ionic, working directly with clients to turn their needs into technical solutions.'
  },
  {
    period: 'APR 2017 — AUG 2018',
    role: 'Junior Consultant',
    org: 'Altran',
    location: 'Madrid, Spain',
    description: 'Full-stack developer on a web project using Angular, Java, Spring Boot and SQL.'
  },
  {
    period: 'JAN 2016 — JUL 2016',
    role: 'Software Engineering Intern',
    org: 'everis',
    location: 'Madrid, Spain',
    description:
      'Worked on a web project for a Spanish airline company using AngularJS, with a focus on unit testing.'
  },
  {
    period: '2011 — 2017',
    role: 'Bachelor’s in Computer Engineering',
    org: 'Universidad Carlos III de Madrid',
    location: 'Madrid, Spain',
    description: 'Computer Science degree.'
  }
]
