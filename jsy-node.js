#!/usr/bin/env node
const jsy_module = require.resolve('jsy-node/jsy.js')
const { spawnSync } = require('child_process')
const [cmd, _, ...args] = process.argv.slice()
const argv = ['--require', jsy_module].concat(args)

if (~ args.indexOf('--version')) {
  const pkg = require('./package.json')
  console.log(`JSY: ${pkg.version}  NodeJS: ${process.version}`)
  process.exit(0)
} else {
  const res = spawnSync(cmd, argv, { shell: true, stdio: 'inherit' })
  process.exit(res.status)
}
