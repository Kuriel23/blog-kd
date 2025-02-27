import type { ThemeObjectOrShikiThemeName } from 'astro-expressive-code'

type Config = {
  author: string
  title: string
  description: string
  lang: string
  image: string
  themes: {
    dark: ThemeObjectOrShikiThemeName
    light: ThemeObjectOrShikiThemeName
  }
}

export default {
  author: 'Bruno Ramos',
  title: 'Kuriel\'s Blog',
  description: 'Blog pessoal de um desenvolvedor simples.',
  lang: 'pt',
  image: '/logo.png',
  themes: {
    dark: 'github-dark',
    light: 'github-light',
  },
} satisfies Config
