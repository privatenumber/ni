import { parseNi } from './commands'
import { run } from './runner'

run(async(agent, args, hasLock) => {
  args.push('--frozen-if-present')
  return parseNi(agent, args, hasLock)
}, { autoInstall: true })
