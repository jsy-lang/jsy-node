const pirates = require('pirates')
const { SourceMapGenerator } = require('source-map')
const { jsy_transpile } = require('jsy-transpile')

function jsy_hook(code, filename) {
  const sourcemap = new SourceMapGenerator()

  //sourcemap.setSourceContent @ code, offside_src
  return jsy_transpile( code, {
    addSourceMapping(arg) {
      arg.source = filename
      sourcemap.addMapping(arg)
    },
    inlineSourceMap() {
      return sourcemap.toString()
    } }) }

require('source-map-support').install()
pirates.addHook(jsy_hook, {exts: ['.jsy']})

