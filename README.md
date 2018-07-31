# jsy-register

Register runtime require handler for Offside (indention) JSY syntax transpiler to standard JavaScript.

Please see [JSY language docs](https://github.com/jsy-lang/jsy-lang-docs) for details on the JSY dialect.

```javascript
require('jsy-register')
require('examples/hello.jsy')
require('examples/hello')
```

or

```bash
> node -r jsy-register ./examples/hello.jsy
```
