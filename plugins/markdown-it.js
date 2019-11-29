import MarkdownIt from 'markdown-it'

export default ({ app }, inject) => {
  const md = new MarkdownIt({
    langPrefix: 'language-',
    preset: 'default',
    breaks: true,
    html: true,
    linkify: false,
    typegraphy: true
  })

  md.use(require('markdown-it-meta'))
  // md.use(require('markdown-it-anchor'), slugify)
  md.use(require('markdown-it-highlightjs'))
  md.use(require('markdown-it-table-of-contents'))

  inject('md', md)
}
