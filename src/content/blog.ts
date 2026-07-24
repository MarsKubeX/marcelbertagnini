import MarkdownIt from 'markdown-it'

export interface BlogPost {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  html: string
}

const md = new MarkdownIt({ html: false, linkify: true, typographer: true })

interface Frontmatter {
  title?: string
  date?: string
  summary?: string
  tags?: string[]
}

function parseFrontmatter(raw: string): { data: Frontmatter; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const [, frontmatter, content] = match
  const data: Record<string, string | string[]> = {}

  for (const line of frontmatter.split('\n')) {
    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) continue
    const key = line.slice(0, separatorIndex).trim()
    const rawValue = line.slice(separatorIndex + 1).trim()
    if (rawValue.startsWith('[') && rawValue.endsWith(']')) {
      data[key] = rawValue
        .slice(1, -1)
        .split(',')
        .map((item) => item.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean)
    } else {
      data[key] = rawValue.replace(/^["']|["']$/g, '')
    }
  }

  return { data, content: content.trim() }
}

function slugFromPath(path: string): string {
  return path.split('/').pop()!.replace(/\.md$/, '')
}

const modules = import.meta.glob('/src/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>

export const blogPosts: BlogPost[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    return {
      slug: slugFromPath(path),
      title: data.title ?? slugFromPath(path),
      date: data.date ?? '',
      summary: data.summary ?? '',
      tags: data.tags ?? [],
      html: md.render(content)
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
