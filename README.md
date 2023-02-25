# jsy-node
**Deprecated** -- see [jjsy-lang/jsy-nodejs](https://github.com/jsy-lang/jsy-nodejs/) that uses NodeJS experimental loader mechanism.


Register runtime require handler for Offside (indention) JSY syntax transpiler to standard JavaScript.

Please see [JSY language docs](https://github.com/jsy-lang/jsy-lang-docs) for details on the JSY dialect.

### Use from the command line

```bash
> jsy-node ./examples/hello.jsy
Hello JSY world!

## Equivalent to:
> node -r jsy-node ./examples/hello.jsy
Hello JSY world!
```

### Use from other Node sources

```javascript
require('jsy-node')

require('./examples/hello.jsy')
```

### Use with [Mocha](https://mochajs.org/)

```bash
$ mocha --require jsy-node/all some-unittest.jsy
```

