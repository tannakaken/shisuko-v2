module.exports = {
  title: '詩晒古　第二号', // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
  author: 'Tannakaken <tannakaken@gmail.com>', // default to `author` in `package.json` or undefined.
  // language: 'ja', // default to undefined.
  // size: 'A4', // paper size.
  theme: 'theme-shisuko/theme_poem.css', // .css or local dir or npm package. default to undefined.
  entry: [
    {
      path: 'manuscripts/top.md',
      theme: 'theme-shisuko/top.css',
    },
    {
      path: 'manuscripts/empty2.md',
      theme: 'theme-shisuko/empty.css'
    },
    {
      path: 'manuscripts/aosuiren.md',
      theme: "theme-shisuko/theme_prose_2columns.css"
    },
    {
      path: 'manuscripts/toc.md',
      rel: 'contents',
      theme: 'theme-shisuko/toc.css',
    },
    {
      path: 'manuscripts/poem.md',
      theme: 'theme-shisuko/chapter-title.css',
    },
    {
      path: 'manuscripts/urushikusa_title.md',
      theme: "theme-shisuko/title.css",
    },
    'manuscripts/urushikusa.md',
    {
      path: 'manuscripts/urushikusa2.md',
      theme: "theme-shisuko/theme_prose_2columns.css"
    },
    {
      path: 'manuscripts/kusashichihito_title.md',
      theme: "theme-shisuko/title.css",
    },
    'manuscripts/kusashichihito.md',
    {
      path: 'manuscripts/K_title.md',
      theme: "theme-shisuko/title.css",
    },
    'manuscripts/K.md',
    {
      path: 'manuscripts/yummy_title.md',
      theme: "theme-shisuko/title.css",
    },
    'manuscripts/yummy.md',
    {
      path: 'manuscripts/haikai.md',
      theme: 'theme-shisuko/chapter-title.css',
    },
    {
      path: 'manuscripts/aosuiren2_title.md',
      theme: "theme-shisuko/title.css",
    },
    'manuscripts/aosuiren2.md',
    {
      path: 'manuscripts/critic.md',
      theme: 'theme-shisuko/chapter-title.css',
    },
    {
      path: 'manuscripts/urushikusa3_title.md',
      theme: "theme-shisuko/title.css",
    },
    'manuscripts/urushikusa3.md',
    {
      path: 'manuscripts/urushikusa4_title.md',
      theme: "theme-shisuko/title.css"
    },
    {
      path: 'manuscripts/urushikusa4.md',
      theme: "theme-shisuko/theme_prose_2columns.css",
    },
    'manuscripts/urushikusa5.md',
    {
      path: 'manuscripts/mourning.md',
      theme: 'theme-shisuko/chapter-title.css',
    },
    {
      path: 'manuscripts/aosuiren3_title.md',
      theme: "theme-shisuko/title.css"
    },
    {
      path: 'manuscripts/aosuiren3.md',
      theme: "theme-shisuko/theme_prose_2columns.css",
    },
    'manuscripts/aosuiren4.md',
    {
      path: 'manuscripts/aosuiren5_title.md',
      theme: 'theme-shisuko/chapter-title.css',
    },
    {
      path: 'manuscripts/aosuiren5.md',
      theme: "theme-shisuko/theme_prose_2columns.css",
    },
    {
      path: 'manuscripts/afterword.md',
      theme: "theme-shisuko/theme_prose.css"
    },
    {
      path: 'manuscripts/empty3.md',
      theme: 'theme-shisuko/empty.css'
    },
    {
      path: 'manuscripts/colophone.md',
      theme: 'theme-shisuko/theme_common.css'
    },
    {
      path: 'manuscripts/empty4.md',
      theme: 'theme-shisuko/empty.css'
    },
    {
      path: 'manuscripts/backcover.md',
      theme: 'theme-shisuko/backcover.css'
    }
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  // entryContext: './manuscripts', // default to '.' (relative to `vivliostyle.config.js`).
  // output: [ // path to generate draft file(s). default to '{title}.pdf'
  //   './output.pdf', // the output format will be inferred from the name.
  //   {
  //     path: './book',
  //     format: 'webpub',
  //   },
  // ],
  // workspaceDir: '.vivliostyle', // directory which is saved intermediate files.
  // toc: true, // whether generate and include ToC HTML or not, default to 'false'.
  cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
}
