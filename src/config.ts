import type { ThemeObjectOrShikiThemeName } from 'astro-expressive-code'

type Config = {
  author: string
  title: string
  description: string
  lang: string
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
  themes: {
    dark: 'github-dark',
    light: 'github-light',
  },
} satisfies Config
