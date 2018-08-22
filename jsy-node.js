#!/usr/bin/env node
const jsy_module = require.resolve('jsy-node/jsy.js')
const [cmd, _, ...args] = process.argv.slice()
const argv = ['--require', jsy_module].concat(args)

require('kexec')(cmd, argv)
