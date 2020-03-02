const scanner = require('../dist/index')

let input

console.log('Waiting for line...')
input = scanner.nextLine('Input line here: ')
console.log(`Your line is: ${input}`)

console.log('Waiting for Integer...')
input = scanner.nextInt()
console.log(`Your Integer is: ${input}`)

console.log('Waiting for Float...')
input = scanner.nextFloat()
console.log(`Your Float is: ${input}`)

console.log('Waiting for words...')
input = scanner.next()
console.log(`Your first word was: ${input}`)
