//lv1
console.log('\n----------------------------------------\n')

console.log('Hello World')

console.log('\n----------------------------------------\n')

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

console.log('\n----------------------------------------\n')
let x = 3
let y = 5

console.log('Hello' + ' ' + 'Wrold')
console.log(`x + y: ${x + y}`)
console.log(`x - y: ${x - y}`)
console.log(`x / y: ${x / y}`)
console.log(`x * y: ${x * y}`)
console.log(`x % y: ${x % y}`)
console.log(`x ** y: ${x ** y}`)
console.log('\n----------------------------------------\n')

x = 1
y = 2
console.log(`x   : ${x}, y     : ${y}`)
console.log(`++x : ${++x}, --y : ${--y}`)
console.log(`x++ : ${x++}, y++ : ${y++}`)
console.log(`x   : ${x}, y     : ${y}`)

console.log('\n----------------------------------------\n')

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

console.log('\n----------------------------------------\n')

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

console.log('\n----------------------------------------\n')

const arr = ['a', 'b', 'c']
console.log(`arr[0] = ${arr[0]}`)

const obj = {
  name: "hmakino",
  age: 32
}
console.log(`he is ${obj.name}`)

console.log('\n----------------------------------------\n')

let tmp1
const tmp2 = null;

console.log(`undefined == NULL?: ${tmp1 == tmp2}`)
console.log(`undefined === NULL?: ${tmp1 === tmp2}`)
console.log(`is number?: ${+'abc'}`)

console.log('\n----------------------------------------\n')

function func () {
  return ('this is function')
}

const arrowFunc = () => {
  return ('this is arrow function')
}

count => ++count // count => {return ++count}

console.log('\n----------------------------------------\n')

console.log('Hello World'.substring(0, 5))

console.log('\n----------------------------------------\n')
const twice = (num) => {
  return num * 2
}
console.log(twice(3))

console.log('\n----------------------------------------\n')

const addOne = (num) => {
  return num + 1
}
console.log(addOne(3))

console.log('\n----------------------------------------\n')

const minusOne = (num) => {
  return  num - 1
}
console.log(minusOne(3))

console.log('\n----------------------------------------\n')

const getLength = (str) => {
  return (str.length)
}
console.log(getLength('apple'))

console.log('\n----------------------------------------\n')

const judgeLength = (str) => {
  return str.length < 10
}
console.log(judgeLength('apple'))

console.log('\n----------------------------------------\n')

const getSum = (num1, num2) => {
  return num1 + num2
}
console.log(getSum(3, 2))

console.log('\n----------------------------------------\n')
const getFullName = (firstName, lastName) => {
  return firstName + ' ' + lastName
}
console.log(getFullName('Tanaka', 'Taro'))

console.log('\n----------------------------------------\n')

{
  const person = {}
}

console.log('\n----------------------------------------\n')

const object = {
  age: 35,
  weight: 80
}
object.age = 30
console.log(object)

console.log('\n----------------------------------------\n')

const changeAge = (number, obj) => {
  obj.age = number
}

changeAge(29, object)
console.log(object)

console.log('\n----------------------------------------\n')

const library = {
  openHour: "7am ~ 10pm"
}
library.openHour = "8am ~ 9pm"
console.log(library)

console.log('\n----------------------------------------\n')

console.log(++object.age)

console.log('\n----------------------------------------\n')

object.newValue = 50
console.log(object)

console.log('\n----------------------------------------\n')

delete object.newValue
console.log(object)

console.log('\n----------------------------------------\n')
const fruits = ['りんご', 'みかん', 'いちご']
console.log(fruits[1])
fruits[2] = 'もも'
console.log(fruits)

console.log('\n----------------------------------------\n')

const array = [1, 2, 3, 4, 5]
let total = 0
for (let i = 0; i < array.length; i++) {
  total += array[i]
}
console.log(total)

console.log('\n----------------------------------------\n')

const calcTotal = (arr) => {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}
const result = calcTotal(array)
console.log(result)

console.log('\n----------------------------------------\n')

const arrayClone = [...array]
console.log(arrayClone)

console.log('\n----------------------------------------\n')

const newArray = [...array, 6, 7, 8, 9, 10]
console.log(newArray)

console.log('\n----------------------------------------\n')

const array2 = [6, 7, 8, 9, 10]
const array3 = [...array, ...array2]
console.log(array3)

console.log('\n----------------------------------------\n')

{
  const object = {
    id: [1, 2, 3],
    name: ['a', 'b', 'c'],
    age: [15, 20, 30]
  }
  console.log(object)
}

console.log('\n----------------------------------------\n')

{
  const object = [
    {id: 1, name: 'John', age: 15},
    {id: 2, name: 'Bob', age: 15},
    {id: 3, name: 'Michael', age: 20},
  ]
  console.log(object[2].age)
}

console.log('\n----------------------------------------\n')

{
  const arr = [10, 20]
  const newArr = [...arr]
  console.log(newArr)
}

console.log('\n----------------------------------------\n')

{
  const color = ['red', 'blue', 'yellow']
  const newColor = [...color, 'blue', 'orange']
  console.log(newColor)
}

console.log('\n----------------------------------------\n')

{
  const arr = [10, 20]
  const str = ["10", "20"]
  const match = [...arr, ...str]
  console.log(match)
}

console.log('\n----------------------------------------\n')

{
  const person = {id:4, name: "鈴木"}
  const copyPerson = {...person}
  console.log(copyPerson)
}

console.log('\n----------------------------------------\n')

{
  const person = {id:4, name: "bob"}
  const newPerson = {...person, age: 24, job: 'programmer'}
  console.log(newPerson)
}

console.log('\n----------------------------------------\n')

{
  const person = {id: 4, name: "bob"}
  const personInfo = {...person, ...{country: 'America', job: 'software engineer'}}
  console.log(personInfo)
}

console.log('\n----------------------------------------\n')

{
  const message = "アラートです。"
  //alert(message) //ターミナルでは確認できない
}

console.log('\n----------------------------------------\n')

{
  const name = 'bob'
  //if (confirm(`${name}さんでよろしいですか？`)) {
  //  console.log(`ようこそ${name}さん`)
  //} else {
  //  console.log('正しい名前を入力してください')
  //}
  //ターミナルでは確認できない
}

//lv2
console.log('\n----------------------------------------\n')

{
  let arr = ['a', 'b', 'c']
  console.log(arr.push('d'))
  console.log(arr)

  console.log(arr.pop())
  console.log(arr)
}

console.log('\n----------------------------------------\n')

/*
 * constは宣言された変数が指し示す参照先を固定するもの。
 * プリミティブ型はその変数自体が直接値を保持しているため再代入が許されない。
 * 一方で非プリミティブ型では参照先が固定されるため、その変数を別の変数に再代入することは許されないが、
 * 参照先のデータの書き換えは許される。
 * 非プリミティブ型で完全な普遍性を確保したい場合は、Object.freezeを使用する。
*/

{
  const a = 1
  const arr = ['a', 'b', 'c']
  const arr2 = ['d', 'e', 'f']
  const arr3 = Object.freeze(['g', 'h', 'i'])

  // arr = arr2 => エラー
  // a = 2 => エラー
  // arr = arr2 => エラー
  // arr3[0] = 'a' => エラー

  arr[0] = 'b' // ok

  console.log(arr)
  console.log(arr3)
}

console.log('\n----------------------------------------\n')

console.log(arr.shift()) // 要素が戻る
console.log(arr)
console.log(arr.unshift('a')) // 要素数が戻る
console.log(arr)

console.log('\n----------------------------------------\n')

console.log(arr.slice(0, 2))
console.log(arr.splice(1, 2, 'x', 'y'))
console.log(arr)

console.log('\n----------------------------------------\n')

arr.forEach(c => console.log(c))
console.log(arr.map(c => c + 'a'))

console.log('\n----------------------------------------\n')

arr[0] += 'a'
console.log(arr.filter(c => c.length >= 2))
console.log(arr.find(c => c > 'x'))
console.log(arr.findIndex(c => c > 'x'))

console.log('\n----------------------------------------\n')

console.log(['b', 'c', 'a'].sort())
console.log(['b', 'c', 'a'].indexOf('a'))
console.log(['b', 'c', 'a'].includes('d'))
console.log(['a', 'b', 'c'].concat(['d', 'e', 'f']))
console.log(['a', 'b', 'c'].join())
console.log(['a', 'b', 'c'].join(''))
console.log(['a', 'b', 'c'].join('/'))
console.log("a/b/c".split('/'))
console.log("Hello World".substr(6, 5))
console.log("Hello World".replace("Hello", "こんにちは"))
console.log("Hello World".replaceAll('l', "こんにちは"))

console.log('\n----------------------------------------\n')

console.log(0n == true)
console.log("" == true)
console.log(NaN == true)

console.log('\n----------------------------------------\n')

const str = "hmakino"
console.log(`こんにちは${str}`)

console.log('\n----------------------------------------\n')

const message = () => {
  console.log('作業中')
}

const log = func => {
  console.log("処理開始")
  func()
  console.log("処理終了")
}

log(message)

console.log('\n----------------------------------------\n')

const a = 1
const b = 2
console.log((a === b ? '等しい' : '等しくない'))

console.log('\n----------------------------------------\n')

{
  let a, b, c
  [a, b, ...c] = [1, 2, 3, 4, 5]
  console.log(c)
}

console.log('\n----------------------------------------\n')

import { greetingFunc } from './tmp.js'
greetingFunc()

console.log('\n----------------------------------------\n')

const timeoutId = setTimeout(() => {
  console.log("Hello")
}, 3000)

const timeoutId2 = setInterval(() => {
  console.log("Hello")
}, 3000)

clearTimeout(timeoutId)
clearInterval(timeoutId2)

console.log('\n----------------------------------------\n')

import fetch from 'node-fetch'

const url = 'https://jsonplaceholder.typicode.com/todos/'
const url2 = 'https://github.com/hmakino8'

//fetch(url)
//  .then(response => {
//    if (!response.ok) {
//      throw new Error(`HTTP error! status: ${response.status}`)
//    }
//    const contentType = response.headers.get('content-type')
//    if (!contentType || !contentType.includes('application/json')) {
//      throw new Error('Expected JSON response')
//    }
//    return response.json()
//  })
//  .then(data => { console.log(data) })
//  .catch(e => { console.error('Error', e)})

//fetch(url2)
//  .then(response => response.text())
//  .then(text => {
//    console.log('Response text:', text); // レスポンス内容を確認
//    try {
//      const data = JSON.parse(text);
//      console.log(data);
//    } catch (error) {
//      console.error('Failed to parse JSON:', error);
//      console.error('Response text was:', text); // エラーレスポンスをログに出力
//    }
//  })
//  .catch(error => {
//    console.error('Error:', error);
//  });

console.log('\n----------------------------------------\n')

const fetchData = async () => {
  try {
    const res = await fetch(url)
    console.log(res)
  } catch(e) {
    console.error(e)
  } finally {
    console.log('処理が終了')
  }
}

fetchData()
