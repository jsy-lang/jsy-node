#!/usr/bin/env node
const jsy_module = require.resolve('jsy-node/jsy.js')
const [cmd, _, ...args] = process.argv.slice()
const argv = ['--require', jsy_module].concat(args)

if (~ args.indexOf('--version')) {
  const pkg = require('./package.json')
  console.log(`JSY: ${pkg.version}  NodeJS: ${process.version}`)
  return 0
} else {
  require('kexec')(cmd, argv)
}
