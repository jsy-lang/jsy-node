#!/usr/bin/env node
const args = process.argv.slice(2)
if (0 === args.length || ~ args.indexOf('--version')) {
  const pkg = require('./package.json')
  console.log(`jsy-transpile: ${pkg.devDependencies['jsy-transpile']}  jsy-node: ${pkg.version}  NodeJS: ${process.version} `)
  process.exit(0)

} else {
  const { spawnSync } = require('child_process')
  const jsy_module = require.resolve('jsy-node/cjs/jsy.cjs')
  const argv = ['--require', jsy_module].concat(args)
  const res = spawnSync(process.execPath, argv, { shell: true, stdio: 'inherit' })
  process.exit(res.status)
}
