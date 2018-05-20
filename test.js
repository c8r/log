const test = require('ava')
const sinon = require('sinon')
const log = require('.')

const spy = sinon.spy(process.stdout, 'write')

test.afterEach(() => {
  spy.resetHistory()
})

test('logs', t => {
  log('hello')
  t.is(spy.callCount, 1)
})

test('logs error', t => {
  log.error('whoops')
  t.is(spy.callCount, 1)
})

test.cb('starts spinner', t => {
  log.start('processing...')
  setTimeout(() => {
    log.stop('bye bye')
    console.log(spy.callCount)
    t.pass()
    t.end()
  }, 2000)
})
