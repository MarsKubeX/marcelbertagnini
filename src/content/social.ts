export interface SocialLink {
  label: string
  href: string
  icon: string
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/MarsKubeX', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marcel-bertagnini-pardo-3b2865110/',
    icon: 'linkedin'
  },
  { label: 'Email', href: 'mailto:marcel.bertagnini@gmail.com', icon: 'mail' }
]
