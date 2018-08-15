require('source-map-support').install()
const pirates = require('pirates')

const jsy_pirate_hook = require('./cjs/jsy_pirate_hook.js')

pirates.addHook(jsy_pirate_hook, {exts: ['.js', '.mjs', '.jsy']})

