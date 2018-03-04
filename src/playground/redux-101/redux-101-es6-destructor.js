
//
// Object Destructoring
//

const person = {
    name: 'Mike',
    age: 26,
    location: {
        city: 'Chiang Mai',
        temp: 34
    }
}

const person2 = {
    old: 26,
    location: {
        city: 'Chiang Mai',
        temp: 34
    }
}

// this is a destructering object to hack an accessability
const { name, age} = person 
// line above is equal
// const name = person.name
// const age = person.age
console.log(`${name} is ${age}`) // then we can use this key of object that destructed

// console.log(`${person.name} is ${person.age}`)

// use destructor in nested object
const { city, temp } = person.location
if (city && temp) {
    console.log(`it's ${temp} in ${city}`)
}

// destructor can rename key by use ' : ' then we use new name old name will undefined
const { city: town, temp: temperation } = person.location
if (town && temperation) {
    console.log(`it's ${temperation} in ${town}`)
}

/// destructor can set default value by use '=' and value
const { name: namae = 'Anonymous', old } = person2
console.log(`Hi ${namae} you're ${age}`)

// challenge part 
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher
console.log(publisherName)


//
// array Destructuring
//

// destructuring Array is refer to position 
const address = ['1229 S Juniper Street', 'Philadephia', 'Pensyvania']

// if we dont use postion 1 just leave , 
// also we can set default value
const [ , vallage, state, zip = 15000 ] = address

console.log(` you're in ${vallage} ${zip} `)

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75' ]

const [itemName, ,mediumPrice] = item
console.log(` A medium ${itemName} costs ${mediumPrice} `)