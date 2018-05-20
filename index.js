const readline = require('readline')
const chalk = require('chalk')
const spinners = require('cli-spinners')
const upper = require('lodash.upperfirst')

const { dots } = spinners
const interval = 100
const stream = process.stdout
let index = 0
let id = null

const print = (...args) => {
  const chunk = args.join(' ') + '\n'
  stream.write(chunk)
}

const clear = () => {
  readline.clearLine(stream)
  readline.cursorTo(stream, 0)
}

const render = () => {
  clear()
  stream.write(frame())
}

const frame = () => {
  const { frames } = dots
  let frame = frames[index]

  const dot = chalk[log.color](frame)
  index = ++index % frames.length

  const chunk = [
    log.block,
    dot,
    log.text
  ].join(' ')

  return chunk
}

const log = (...args) => {
  print(log.block, ...args)
}

log.error = (...args) => {
  print(
    chalk.black.bgRed(' err '),
    chalk.red(...args)
  )
}

log.start = (...args) => {
  log.text = args.join(' ')
  render()
  id = setInterval(render.bind(log), interval)
}

log.stop = (msg = 'done', ...args) => {
  clearInterval(id)
  id = null
  index = 0
  clear()
  log(msg, ...args)
}


log.color = 'cyan'
log.text = ''

let name = 'c8r'

Object.defineProperty(log, 'name', {
  get: () => {
    return name
  },
  set: next => {
    name = next
  }
})
Object.defineProperty(log, 'block', {
  get: () => {
    return chalk.black['bg' + upper(log.color)](` ${log.name} `)
  }
})

module.exports = log
