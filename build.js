var Metalsmith  = require('metalsmith')
var markdown    = require('metalsmith-markdown')
var templates   = require('metalsmith-templates')
var assets      = require('metalsmith-assets')
var archive     = require('metalsmith-archive')

Metalsmith(__dirname)
  .use(markdown())
  .use(templates({
    engine: 'swig',
    directory: 'templates'
  }))
  .use(assets())
  .build(function(err) {
    if (err) throw err;
  })
