try { require('source-map-support/register.js') } catch (err) {}
const pirates = require('pirates')

const jsy_pirate_hook = require('./cjs/jsy_pirate_hook.js')

pirates.addHook(jsy_pirate_hook, {exts: ['.js', '.mjs', '.jsy']})

