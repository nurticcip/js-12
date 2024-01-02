// const userNameKey = 'name'
// const userName = prompt('Enter your name: ')

// const userAgeKey = 'age'
// const userAge = prompt('Enter your age: ')

// const user = {}
// user[userNameKey] = userName
// user[userAgeKey] = userAge

// console.log(user)




// let user = {
//     name: 'Nurtilek',
//     age: 17,
//     isMarried: false
// }
// const key = prompt('Enter key: ')

// const deleteProperty = (key) => {
//      delete user[key]
// }
// deleteProperty(key)
// console.log(user)



//tasks
//? task-1
// let obj = { a: 1, b: 2, c: 3 }
// console.log(Object.keys(obj).length)

//? task-2
// let obj = { a: 1, b: 2, c: 3 }
// console.log(obj.c)
// console.log(obj['c'])

//? task-3
// let obj = { Ширин: '1000', Айжан: '500', Атай: '200' }
// console.log(obj['Ширин'] + ', ' + obj['Атай'])
// console.log(obj.Ширин + ', ' + obj.Атай)


//? task-4
// let obj = { Ширин: '1000', Айжан: '500', Атай: '200' }
// obj.Атай = '500'
// console.log(obj)


//? task-5
// obj = { Ширин: '1000', Айжан: '500', Атай: '200' }
// obj.Медет = '1500'
// console.log(obj)


//? task-6
// obj = { Ширин: '1000', Айжан: '500', Атай: { salary: '500' } }
// console.log(obj.Атай.salary)


//? task-7
// let days = {
//     1 : 'Monday',
//     2: 'Tuesday',
//     3: 'Mednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Sunday',
//     7: 'Saturday',
// }
// console.log(days[1])


//? task-8
// const today = 3
// let days = {
//     1 : 'Monday',
//     2: 'Tuesday',
//     3: 'Mednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Sunday',
//     7: 'Saturday',
// }
// console.log(days[today])

//? task-9
// let obj = { Ширин: '1000', Айжан: '500', Атай: { salary: '500' } }
// console.log(Object.keys(obj))


//? task-10
// let bj = { Ширин: '1000', Айжан: '500', Атай: { salary: '500' } }
// console.log(Object.values(bj))


//? task-11
// let obj = { Ширин: '1000', Айжан: '500', Атай: { salary: '500' } }
// console.log(Object.entries(obj))

//? task-12
// const user = (obj) => {
//     obj = {
//         name: 'Igor',
//     }
//     return obj.name.length % 2 === 0 ? 1 : 0
// }
// console.log(user())


//? task-13
// const user = (obj) => {
//     obj = [
//         { id: 3 },
//         { id: 5 },
//         { id: 6 },
//         { id: 7 }
//     ]
//     return obj.map(el => {
//         return el.id
//     })
// }
// console.log(user())


//? task-14
// const user = (obj) => {
//     obj = {
//         name: 'Igor'
//     }
//     obj.age = 25
//     obj.name = 'Azat'
//     return obj
// }
// console.log(user())


//? task-15
// const tovary = (product) => {
//     product = {
//         name: "headphones",
//         price: 110,
//         discount: 0
//     }
//     return product.price > 100 ? product.price * 0.1 : product.price * 0.07
// }
// console.log(tovary())



//? task-16
// const str = "I am a Megalodon , oceans feeling like a pond"
// console.log(str.split(' ').reduce((acc, el) => acc.length > el.length ? acc : el))


//? task-17
// str = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// const checkTask = (arr) => {
//     return arr.map(el => {
//         return el.split(' ').length
//     })
// }
// console.log(checkTask(str))

// deleteProperty(key)
// console.log(user)



//? task-18
// const sort = (obj) => {
//     let students = [
//         { student: 'Jack', marks: 43 },
//         { student: 'Tom', marks: 92 },
//         { student: 'Helen', marks: 85 },
//         { student: 'Peter', marks: 58 },
//         { student: 'Jessica', marks: 78 },
//     ];
//     return obj.map(el => {
//         return el.marks
//     })
// }
// console.log(sort(obj))



//? task-19
// let students = [
//   { student: 'Jack', marks: 43 },
//   { student: 'Tom', marks: 92 },
//   { student: 'Helen', marks: 85 },
//   { student: 'Peter', marks: 58 },
//   { student: 'Jessica', marks: 78 },
// ];
// console.log(students.sort((a, b) => a.marks - b.marks))


//? task-20 ( POLINDROM )
// let str = 'level'
// const palindrom = (word) => {
//     let wordpol = word.toLowerCase().replaceAll(/' '/g, '')
//     return wordpol === wordpol.split('').reverse().join('') ? true : false
// }
// console.log(palindrom(str))


//? task-21
// const number = (num1, num2) => {
//     return num1.toString().length === num2.toString().length ? true : false
// }
// console.log(number(1, 21))


//? task-22
// let product = [
//         {name: 'cake', price: 300, sale: 10},
//         {name: 'coffee', price: 250, sale: 5},
//         {name: 'juice', price: 200, sale: 15},
//         {name: 'tea', price: 150, sale: 20},
//         {name: 'iceCream', price: 120, sale: 4},
//         {name: 'energy', price: 1800, sale: 25},
//     ]
// const saleProduct = (obj) => {
//     return obj.map(el => {
//         let priceSale = el.price - el.price * (el.sale / 100)
//         return `${el.name}: ${el.price}$, discountedPrice: ${priceSale}$,  sale: ${el.sale}%`
//     })
// console.log(saleProduct(product))
//     return obj.map(el => {
//         let priceSale = el.price - el.price * (el.sale / 100)
//         return `${el.name}: ${el.price}$, discountedPrice: ${priceSale}$,  sale: ${el.sale}%`
//     }).join(' '.repeat(100))
// }



// let product = [
//     {name: 'cake', price: 300, sale: 10},
//     {name: 'coffee', price: 250, sale: 5},
//     {name: 'juice', price: 200, sale: 15},
//     {name: 'tea', price: 150, sale: 20},
//     {name: 'iceCream', price: 120, sale: 4},
//     {name: 'energy', price: 1800, sale: 25},
// ]
// console.log(product.map(el => {
//     let priceSale = el.price - el.price * (el.sale / 100)
//     return `
//         Name: ${product[0].name}, oldPrice: ${product[0].price}$, discountedPrice: ${priceSale}$, sale: ${product[0].sale}, 
//         Name: ${product[1].name}, oldPrice: ${product[1].price}$, discountedPrice: ${priceSale}$, sale: ${product[1].sale}
//         Name: ${product[2].name}, oldPrice: ${product[2].price}$, discountedPrice: ${priceSale}$, sale: ${product[2].sale}
//         Name: ${product[3].name}, oldPrice: ${product[3].price}$, discountedPrice: ${priceSale}$, sale: ${product[3].sale}
//         Name: ${product[4].name}, oldPrice: ${product[4].price}$, discountedPrice: ${priceSale}$, sale: ${product[4].sale}
//         Name: ${product[5].name}, oldPrice: ${product[5].price}$, discountedPrice: ${priceSale}$, sale: ${product[5].sale}`
// }).join(''))