//EASY

const double = (count) => {
  return count * 2
}
console.log(double(1))

console.log('----------------------------------------\n')

let num = 4
let array = [1, 2, 3]
let newArray = [...array, 4]
console.log(newArray)

console.log('----------------------------------------\n')

let nums = [4, 5, 6]

newArray = [...array, ...nums]
console.log(newArray)

console.log('----------------------------------------\n')

array = [1, 2, 3, 4]
console.log(array.slice(0, 3))
console.log(array.slice(1, 4))
console.log([0, ...array])
console.log([...array].sort())
console.log([...array].reverse())

console.log('----------------------------------------\n')

console.log(array.map((val) => val * 2))

console.log('----------------------------------------\n')

const str = 'result'
const length = 6
let bool = false

if (str.length === length) {
  bool = true
}

console.log(bool)

console.log('----------------------------------------\n')

const isShow = (name, age) => {
  return !(name === 'bob' || age === 14)
}
