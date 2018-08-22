import rpi_resolve from "rollup-plugin-node-resolve"

const plugins = [rpi_resolve({modulesOnly: true})]
const external = []

export default [
  { input: './code/jsy_pirate_hook.jsy',
    output: [
      { file: 'cjs/jsy_pirate_hook.js', format: 'cjs'},
      { file: 'esm/jsy_pirate_hook.js', format: 'esm'},
    ],
    plugins, external },
]

