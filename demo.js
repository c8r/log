#!/usr/bin/env node
const log = require('./index')

log.name = 'log'

log('hello', log.name)
log('this is @compositor/log')
log('it can log info with a little logo block to the left')

log.color = 'magenta'

log('you can change the color')

log.color = 'cyan'

log.name = 'beep'
log('or change the app name')
log.name = 'log'

log.error('whoops!')

log.start('doing a thing...')

setTimeout(() => {
  log.stop()
}, 5000)
