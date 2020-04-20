import rpi_resolve from "@rollup/plugin-node-resolve"
import rpi_commonjs from "@rollup/plugin-commonjs"
import rpi_json from "@rollup/plugin-json"

const external = [ 'child_process', 'path', 'module', 'fs']
const plugins = [ rpi_json(), rpi_resolve(), rpi_commonjs() ]

export default [
  { input: './code/jsy_pirate_hook.jsy',
    external, plugins: [rpi_resolve({modulesOnly: true})],
    output: [
      { file: 'cjs/jsy_pirate_hook.js', format: 'cjs'},
      { file: 'esm/jsy_pirate_hook.js', format: 'esm'},
    ]},

  { input: './code/all.js', external, plugins,
    output: { file: 'cjs/all.cjs', format: 'cjs'}},

  { input: './code/jsy.js', external, plugins,
    output: { file: 'cjs/jsy.cjs', format: 'cjs'}},
]
