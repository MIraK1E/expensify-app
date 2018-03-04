// Obj Destructor
//
//
// const person = {
//     name: 'Mike',
//     age: 24,
//     location: {
//         city: 'Chiang Mai',
//         temp: 24
//     }
// }

// const {name: firstname = 'Anonymouse', age} = person
// console.log(`${firstname} is ${age}`)

// const {city, temp: temperature} = person.location

// if (temperature &&city) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

////////////////////////////////////////////////////////////////////////


// const address = ['1299 S Jupiter Street', 'Philadephia', 'Pensylvania', '19147']

// const [street, city, state, zip] = address

// console.log(`You are in ${street} ${city}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [itemName, small, medium, large] = item

console.log(`A medium ${itemName} costs ${medium}`)