const myArray = [1, 2, 3, 4, 5]

const newArray = myArray.map(pies => pies * 2)

console.log(newArray)

let animals = [
    { name: 'Lumpy', species: 'rabbit' },
    { name: 'Reggie', species: 'dog' },
    { name: 'Stella', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
]

// let dogs = []
// for (let i = 0; i < animals.length; i++) {
//     if (animals[i].species === 'dog')
//     dogs.push(animals[i])
// }

// let dogs = animals.filter(function(animal) {
//     return animal.species === 'dog'
// })
let notDog = function (animal) {
    return animal.species !== 'dog'
}

let dogs = animals.filter(animal => animal.species === 'dog')
let OtherAnimals = animals.filter(notDog)



let names = animals.map(animal => (animal.name + ' is a ' + animal.species))

console.log(names)

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

let totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

console.log(totalAmount)

