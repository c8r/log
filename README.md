
# @compositor/log

Logging utility for CLIs

```sh
npm i @compositor/log
```

```js
const log = require('@compositor/log')

log.name = 'app'

log('hello')

log.error('whoops!')

log.start('processing something...')

setTimeout(() => {
  log.stop('bye bye')
}, 1000)
```

MIT License
