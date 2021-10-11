const Handlebars = require('handlebars')
const { minify } = require('terser')
const fs = require('fs')
const path = require('path')

const template = fs.readFileSync(path.join(__dirname, 'sw.js.hbs'), { encoding: 'utf8' })

const compiled = Handlebars.compile(template)

const result = compiled({ cacheName: `scrum-poker-${new Date().getTime()}` })
minify(result).then(minified => fs.writeFileSync('./build/sw.js', minified.code, { encoding: 'utf8' }))
