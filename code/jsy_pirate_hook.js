import tiny_sourcemap from 'tiny-source-map'
import jsy_transpile_snapshot from 'jsy-transpile'

let jsy_transpile = jsy_transpile_snapshot
try {
  jsy_transpile = require('jsy-transpile')
  jsy_transpile = jsy_transpile.default || jsy_transpile
} catch (err) {}

export default function jsy_pirate_hook(code, filename) {
  const src_map = tiny_sourcemap()

  try {
    return jsy_transpile( code, {
      addSourceMapping(arg) {
        arg.source = filename
        src_map.addMapping(arg)
      },
      inlineSourceMap() {
        return src_map.toString()
      } })
  } catch (err) {
    if (! (err instanceof SyntaxError)) throw err
    const {line, column, col} = err.src_loc || {}
    console.error(`JSY Syntax Error in "${filename}" at line ${line}:${column}`)
    console.error(`  ${err.message}`)
    return 'process.exit(42)'
  }
}

