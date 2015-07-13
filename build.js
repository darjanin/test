var Metalsmith = require('metalsmith')
var markdown = require('metalsmith-markdown')
var templates = require('metalsmith-templates')
var archive = require('metalsmith-archive')

Metalsmith(__dirname)
  .use(archive())
  .use(markdown())
  .use(templates({
    engine: 'swig',
    directory: 'templates'
  }))
  .build(function(err) {
    if (err) throw err;
  })
