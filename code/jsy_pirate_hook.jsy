const { SourceMapGenerator } = require('source-map')

import jsy_transpile_snapshot from 'jsy-transpile'

let jsy_transpile = jsy_transpile_snapshot
try { jsy_transpile = require('jsy-transpile') } catch (err) {}

export default function jsy_pirate_hook(code, filename) {
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

