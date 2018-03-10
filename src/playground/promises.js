// reslove = success then do...
// reject = fail then do...
// these both can call once and can pass only one argument but we can pass object
const promise = new Promise ((reslove, reject) => {
    setTimeout(() => {
        // reslove('This is my resloved data')
        // reslove('This is my other reslove data')
        // reslove({
        //     name: 'Mike',
        //     age: '24'
        // })
        reject('Something went wrong')
    }, 1500)
})

console.log('before')

// dump result whatever resloved or rejected
promise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error) // this is another way to do catch
})
// .catch is when promise reject then do what if hanvt catch browser will throw js error instant
// .catch((error) => {
//     console.log(error)
// })

console.log('after')

// multiple promise
// promise.then(() => {
//     console.log('first run')

//     return 'data' // we can also past data to another then too
// }).then((str) => { // we can use second then here if success do all then fail do all catch 
//     console.log('second run', str)
// }).catch((e) => {
//     console.log('error')
// })

// promise functioncan return promise function
// promise.then(() => {
//     console.log('first run')
//     return new Promise ((reslove, reject) => {
//     setTimeout(() => {
//         reslove('This is other promise')
//     }, 1500)
// }).then((str) => { 
//     console.log('second run', str)
// }).catch((e) => {
//     console.log('error')
// })