//EASY
console.log('----------------------------------------\n')

const apple = 'りんご'
console.log(apple)

console.log('\n----------------------------------------\n')

let weight = 70
weight = 60
console.log(weight)

console.log('\n----------------------------------------\n')

const answer = 'あいうえお'
console.log(answer)

console.log('\n----------------------------------------\n')

let answer2 = 'あいうえお'
answer2 = 'かきくけこ'
console.log(answer2)

console.log('\n----------------------------------------\n')

const str1 = 'あいうえお'
const str2 = 'かきくけこ'
console.log(str1 + str2)

//NORMAL
console.log('\n----------------------------------------\n')

const newStr = str1.replace('あ', 'お')
console.log(str1)
console.log(newStr)

console.log('\n----------------------------------------\n')

{
  const str = "aaaaaaa".replace(/a/g, 'o')
  console.log(str)
}

console.log('\n----------------------------------------\n')

{
  const str = [...'abcdef']
  console.log(str)
}

console.log('\n----------------------------------------\n')

console.log("abcdefg".slice(0, 3))

console.log('\n----------------------------------------\n')

console.log('abcdefg'.substring(0, 3))
console.log('abcdefg'.substring(4))
console.log('abcdefg'.substring(6))

console.log('\n----------------------------------------\n')

'Hi my name is Bob!'.split(' ').forEach(word => {
  console.log(word)
})

console.log('\n----------------------------------------\n')

const getStringLength = (str) => {
  return str.length
}
console.log(getStringLength('Hello World'))

console.log('\n----------------------------------------\n')

const isString = (str) => {
  return typeof str === 'string'
}
console.log(isString(1))

console.log('\n----------------------------------------\n')

const getFirstChar = (str) => {
  if (typeof str !== 'string') return
  return (str[0]) // str.slice(0, 1)
}
console.log(getFirstChar('abc'))

console.log('\n----------------------------------------\n')
const popString = (str) => {
  if (typeof str !== 'string') return
  return str.slice(0, -1)
}
console.log(popString('apple'))

console.log('\n----------------------------------------\n')

const removeFirstChar = (str) => {
  if (typeof str !== 'string') return
  return str.substring(1) // str.slice(1)
}
console.log(removeFirstChar('apple'))

console.log('\n----------------------------------------\n')

const toggleBoolean = (valid) => {
  return !valid
}
console.log(toggleBoolean(true))

console.log('\n----------------------------------------\n')

{
  const answer = (arr) => {
    return arr.join()
  }
  console.log(answer(['apple', 'orange', 'melon']))
}

console.log('\n----------------------------------------\n')

const obj = {
  name: 'taro',
  age: 28
}

console.log(obj.name)

console.log('\n----------------------------------------\n')

const getObjectName = (object) => {
  return object.name
}

console.log(getObjectName(obj))

console.log('\n----------------------------------------\n')

const library = {
  book: {
    author: "Tom Sawyer",
    year: "11/12/2021"
  }
}
library.book.year = "10/22/1876"
console.log(library)

console.log('\n----------------------------------------\n')

{
  const obj = {
    name: 'taro',
    age: 28
  }

  const plusAge = (object) => {
    ++object.age
  }
  plusAge(obj)
  console.log(obj)
}

console.log('\n----------------------------------------\n')

let person = {name: "Bob", age: 35}

const addWeight = (personObject, weightNum) => {
  personObject.weight = weightNum
  return personObject
}
console.log(addWeight(person, 50))

console.log('\n----------------------------------------\n')

person.hobby = ['reading', 'shopping']
console.log(person)

console.log('\n----------------------------------------\n')

const object = {name: "Bob", age: 35}
//
//if (confirm('nameプロパティを削除してよろしいですか？')) {
//  delete object.name
//}
//console.log(object)

console.log('\n----------------------------------------\n')

const deleteProperty = (user) => {
  delete user.age
}
deleteProperty(object)
console.log(object)

console.log('\n----------------------------------------\n')

const array = ['a', 'b']
array.push('すいか')
console.log(array)

array.pop()
console.log(array)

array.unshift('すいか')
console.log(array)

array.shift()
console.log(array)

console.log('\n----------------------------------------\n')

array.push('みかん')
console.log(array.indexOf('みかん'))
console.log(array.includes('りんご'))
console.log(array.slice(1, 3))
console.log(array.splice(2, 1))

console.log('\n----------------------------------------\n')

array.forEach((elem) => console.log(elem))

const numArray = [1, 2, 3]
numArray.forEach((num) => console.log(num * 2))
console.log(numArray.map((num) => { return num * 2 }))

console.log('\n----------------------------------------\n')

{
  const array = ['abc', 'ab', 'abcd']
  console.log(array.filter((str) => str.length == 3))
}

console.log('\n----------------------------------------\n')

let data = {
  id: 107,
  name: 'Bob',
  job: 'programmer'
}
console.log(Object.keys(data))

console.log('\n----------------------------------------\n')

const sortArray = ['aspofijhsdf', 'boijasoijf', 'doijd[oiaj', 'asoijsdf']
console.log(array.sort())
console.log(array.reverse())

console.log('\n----------------------------------------\n')

const sortNumArray = [1, 2, 3]
sortNumArray.sort((a, b) => a-b)
console.log(sortNumArray)
sortNumArray.sort((a, b) => b-a)
console.log(sortNumArray)

console.log('\n----------------------------------------\n')

console.log(numArray.reduce((sum, current) => sum + current, 0))
console.log(sortArray.join())

console.log('\n----------------------------------------\n')

{
  const obj = [
    {id: 1, name: 'john', age: 15},
    {id: 2, name: 'Bob', age: 20},
    {id: 3, name: 'Michael', age: 15}
  ]
  console.log(obj.find((elem) => elem.id === 2))
  console.log(obj.find((elem) => elem.name.length === 7))
  console.log(obj.filter((elem) => elem.name.length === 7))
  console.log(obj.filter((elem) => elem.age === 15))
  console.log(obj.filter((elem) => elem.id !== 1))
  console.log(obj.filter((elem) => elem.age !== 15))

  obj.forEach((elem) => elem.age++)
  console.log(obj)
  let newObj = obj.map((elem) => {
    return {...elem, age: elem.age + 1}
  })
  console.log(newObj)

  obj.forEach((elem) => elem.name = 'Mr.' + elem.name)
  newObj = obj.map((elem) => {
    return {...elem, name: 'Mr.' + elem.name}
  })
  console.log(newObj)
}

console.log('\n----------------------------------------\n')

person = { name: 'Mike', age: 23 }
const newPerson = {...person, name: 'Alice'}
const personInfo = {...newPerson, country: 'America', job: 'software engineer'}
console.log(personInfo)

console.log('\n----------------------------------------\n')

import fetch from 'node-fetch'

const url = 'https://jsonplaceholder.typicode.com/todos/'

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data.filter((elem) => elem.id === 5))
  })

console.log('\n----------------------------------------\n')

const redirectUrl = ((language) => {
  let url = 'www.example.com'

  switch(language) {
    case 'English':
      return url + '/en'
    case 'Japanese':
      return url + '/jp'
    case 'Australia':
      return url =+ '/en-au'
    default:
      return url
  }
})
console.log(redirectUrl('English'))
