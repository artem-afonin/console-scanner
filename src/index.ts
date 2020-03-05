import readlineSync from 'readline-sync'

const inputQueue: Array<string> = []


/**
 * Read full line
 *
 * @param {string} promptText question text
 *
 * @return {string}
 */
export function nextLine(promptText: string = ''): string {
  let input: string

  while (true) {
    input = readlineSync.question(promptText)
    if (input === '\u0003') {
      process.exit()
    } else if (input.trim() !== '') {
      return input.trim()
    }
  }
}


/**
 * Alias for nextLine(promptText)
 *
 * @param {string} promptText question text
 *
 * @return {string}
 */
export function prompt(promptText: string): string {
  return nextLine(promptText)
}


/**
 * Read next word from input line
 *
 * @return {string}
 */
export function next(): string {
  if (hasNext()) {
    return inputQueue.splice(0, 1)[0]
  }
  const input = nextLine()
  const strings = input.split(/\s+/)
  for (let i = 1; i < strings.length; i++) {
    inputQueue.push(strings[i])
  }
  return strings[0]
}


/**
 * Check if input queue has next word
 *
 * @return {boolean}
 */
export function hasNext(): boolean {
  return inputQueue.length !== 0
}


/**
 * Read next Integer number from input line
 *
 * @param {number} radix number radix
 *
 * @throws {Error} if failed to convert to Integer
 *
 * @return {number}
 */
export function nextInt(radix: number = 10): number {
  const num: number = parseInt(next(), radix)
  if (isNaN(num)) {
    throw new Error('Expected Integer')
  }
  return num
}


/**
 * Read next Float number from input line
 *
 * @throws {Error} if failed to convert to Float
 *
 * @return {number}
 */
export function nextFloat(): number {
  const num: number = parseFloat(next())
  if (isNaN(num)) {
    throw new Error('Expected Float')
  }
  return num
}

export default {
  nextLine,
  prompt,
  next,
  hasNext,
  nextInt,
  nextFloat
}
