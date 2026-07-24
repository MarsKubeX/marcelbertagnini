export interface ProjectEntry {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  large?: boolean
}

// TODO: proyectos de ejemplo — sustituir por los proyectos reales en la parte de contenido del plan
export const projects: ProjectEntry[] = [
  {
    title: 'Example Project One',
    description: 'A short description of what this project does and why it exists.',
    tags: ['TypeScript', 'Vue'],
    githubUrl: 'https://github.com/MarsKubeX',
    large: true
  },
  {
    title: 'Example Project Two',
    description: 'A short description of what this project does and why it exists.',
    tags: ['Python'],
    githubUrl: 'https://github.com/MarsKubeX'
  },
  {
    title: 'Example Project Three',
    description: 'A short description of what this project does and why it exists.',
    tags: ['Go'],
    githubUrl: 'https://github.com/MarsKubeX'
  }
]
