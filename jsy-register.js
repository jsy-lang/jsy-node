const pirates = require('pirates')
const {jsy_scanner} = require('jsy-transpile')

function jsy_hook(code, filename) {
  const res = jsy_scanner(code, {source: filename})
  return `${res.src_code()} //# ${res.src_map.toComment()}`
}

require('source-map-support').install()
pirates.addHook(jsy_hook, {exts: ['.js', '.jsy']})

