import { readFileSync } from 'node:fs'

let lines: Array<string> = []

const contents = readFileSync('input.txt')
lines = contents.toString('utf8').split("\n")

let sum = 0
const number = new RegExp(/(?=(\d|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)))/g)

const map: Record<string, string> = {
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9'
}

for (const line of lines) {

  const matches = line.matchAll(number)
  let parts: Array<string> = []
  
  for (const match of matches) {
    parts.push(...match)
  }

  parts = parts.filter(p => p && p.length > 0)

  if (parts.length > 0) {
    const first = map[parts[0]]
    const last = map[parts[parts.length - 1]]
    
    console.log(line, parseInt(`${first}${last}`))

    sum += parseInt(`${first}${last}`)
  } 
}
console.log(sum)
