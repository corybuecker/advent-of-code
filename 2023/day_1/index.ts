import { readFileSync } from 'node:fs'


let lines: Array<string> = []

const contents = readFileSync('2023/day_1/input.txt')
lines = contents.toString('utf8').split("\n")

const results = []
const number = new RegExp(/\d/)

for (const line of lines) {
  let i = 0
  let j = line.length - 1

  while (!number.test(line[i]) && i < line.length) i++
  while (!number.test(line[j]) && j >= 0) j--

  if (i > j) continue
  
  results.push(parseInt(`${line[i]}${line[j]}`))
}

console.log(results.reduce((memo, v) => memo + v, 0))
