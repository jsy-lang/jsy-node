# jsy-register

Register runtime require handler for Offside (indention) JSY syntax transpiler to standard JavaScript.

Please see [JSY language docs](https://github.com/jsy-lang/jsy-lang-docs) for details on the JSY dialect.

### Use from the command line

```bash
> jsy-node ./examples/hello.jsy
Hello JSY world!

## Equivalent to:
> node -r jsy-register ./examples/hello.jsy
Hello JSY world!
```

### Use from other Node sources

```javascript
require('jsy-register')

require('./examples/hello.jsy')
```
