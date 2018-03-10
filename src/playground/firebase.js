import * as firebase from 'firebase'

const config = {
    // set value from webpack that refer by env file
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MASSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database()

// database.ref('Expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('Expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('Expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('Expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key, // access key on eachSnapshot
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
//     })

// database.ref('Expenses').on('value', (snapshot) => {
//     const Expenses = []

//     snapshot.forEach((childSnapshot) => {
//         Expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(Expenses)
// }, (e) => {
//     console.log(e)
// })

// how to work with listbase data [array]
// database.ref('notes').push({
//     title: "Moblie web",
//     body: "learn it"
// })
// database.ref('Expenses').push({
//     decription: 'Enroll AI Course',
//     note: "",
//     amount: 0,
//     createdAt: 0
// })
// database.ref('Expenses').push({
//     decription: 'Enroll Web Dev Course',
//     note: "",
//     amount: 0,
//     createdAt: 10
// })
// database.ref('Expenses').push({
//     decription: 'Enroll React Course',
//     note: "",
//     amount: 0,
//     createdAt: 100
// })

// fetch by track value if value change fetch again
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log(e)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const data = snapshot.val()
//     console.log(`${data.name} is ${data.job.title} at ${data.job.company}`)
// })

// setTimeout(() => {
//     database.ref('name').set('MIKE')
// }, 3000)

// setTimeout(() => {
//     database.ref('age').set(29)
// }, 3500)

// setTimeout(() => {
//     database.ref().off('value' ,onValueChange) // untrack value change
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(31)
// }, 10500)

// fetch data single time
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log(e)
//     })

// normal set
// database.ref().set({
//     name: 'Mike',
//     age: '24',
//     isSingle: true,
//     location: {
//         city: 'Chiang mai',
//         country: 'Thailand'
//     }
// })

// with promise 
// database.ref().set({
//     name: 'Mike',
//     age: '24',
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Chiang mai',
//         country: 'Thailand'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log('Fail', error)
// })

// update call with object
// firebase update can delete add at same time
// database.ref().update({
//     name: 'Andrew',
//     age: 25,
//     jod: 'SE', // add job
//     isSingel: null // delete isSingel
// })

// update will update only root level
// database.ref().update({
//     job: 'manager',
//     location: {
//         city: 'Boston' // nested update will not update
//         // country is gone
//     }
// })

// database.ref().update({
//     job: 'manager',
//     'location/city': 'Boston' // this is how to update nasted object
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// //database.ref().set('this is data')


// // ref can provide location
// // database.ref('age').set(29)

// // // access location object
// // database.ref('location/city').set('bangkok')

// database.ref('attribute').set({
//     hight: '173CM',
//     weight: '70Kg'
// }).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log(error)
// })

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('removed')
//     })
//     .catch((error) => {
//         console.log(error)
//     })
