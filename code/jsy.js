import * as pirates from 'pirates'
import 'source-map-support/register.js'

import jsy_pirate_hook from './jsy_pirate_hook.jsy'

pirates.addHook(jsy_pirate_hook, {exts: ['.jsy']})

