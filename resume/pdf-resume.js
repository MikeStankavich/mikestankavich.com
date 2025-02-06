import markdownpdf from 'markdown-pdf';

const basename = 'mike-stankavich-resume';

markdownpdf({
  remarkable: {
    html: true,
    breaks: true,
    xhtmlOut: true
  },
  cssPath: 'resume-style.css',  // Create this to handle flex layouts
  paperFormat: 'Letter'
})
  .from(`${basename}.md`)
  .to(`${basename}.pdf`)