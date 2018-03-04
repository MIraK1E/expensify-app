// redux video 1 

import { createStore } from 'redux'

// const whatever = createStore(( AnyObject ) => {
// return AnyObject
// })

const store = createStore((state = { conut: 0 }) => {
    return state 
})

//get any return of createStore 

console.log(store.getState())

