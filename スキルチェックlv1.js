console.log('-------------------- no1 --------------------\n')

console.log('Hello World')

console.log('\n-------------------- no2 --------------------\n')

const tmpFunc = () => {
  {
    y = 3
    console.log(y) // varのスコープは関数内全体

    // x = 2 エラー letは宣言より前参照できない
    let x = 1
    var y = 2
    // let x = 0 エラー 同じブロック内なのでエラー
    console.log(x)
  }
  {
    let x = 2
    console.log(x)
  }
}
tmpFunc()

console.log('\n-------------------- no3 --------------------\n')
let x = 3
let y = 5

console.log('Hello' + ' ' + 'Wrold')
console.log(`x + y: ${x + y}`)
console.log(`x - y: ${x - y}`)
console.log(`x / y: ${x / y}`)
console.log(`x * y: ${x * y}`)
console.log(`x % y: ${x % y}`)
console.log(`x ** y: ${x ** y}`)
console.log('\n-------------------- no4 --------------------\n')

x = 1
y = 2
console.log(`x   : ${x}, y     : ${y}`)
console.log(`++x : ${++x}, --y : ${--y}`)
console.log(`x++ : ${x++}, y++ : ${y++}`)
console.log(`x   : ${x}, y     : ${y}`)

console.log('\n-------------------- no5 --------------------\n')

x = 1
switch(x) {
  case 1:
    console.log('x is 1');
    break
  case 2:
    console.log('x is 2');
    break
  default:
    console.log('N/A');
}

console.log('\n-------------------- no6 --------------------\n')

for (let i = 0;i < 2; i++) {
  console.log(i)
}

let j = 0
while (j++ < 2) {
  console.log(j)
}

j = 0

do {
  j++
  console.log(j)
} while (j < 2)

j = 0

while (true) {
  j++
  if (j > 5) {
    break
  }
}
console.log(j)

console.log('\n-------------------- no7 --------------------\n')

const arr = ['a', 'b', 'c']
console.log(`arr[0] = ${arr[0]}`)

const obj = {
  name: "hmakino",
  age: 32
}
console.log(`he is ${obj.name}`)

console.log('\n-------------------- no7 --------------------\n')

let tmp1
const tmp2 = null;

console.log(`undefined == NULL?: ${tmp1 == tmp2}`)
console.log(`undefined === NULL?: ${tmp1 === tmp2}`)
console.log(`is number?: ${+'abc'}`)

console.log('\n-------------------- no8 --------------------\n')

function func () {
  return ('this is function')
}

arrowFunc = () => {
  return ('this is arrow function')
}

count => ++count // count => {return ++count}
