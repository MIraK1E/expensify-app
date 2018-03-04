import { createStore } from 'redux'

// dispatch is a function to send object action to function create store

// pass an action object by second arr of create store function
const store = createStore((state = { count: 0 } , action) => {
    switch (action.type) { // detect action.type
        case 'INCREMENT':  // set type that will have an effect 
        return {
            count: state.count + 1
        }
        case 'DECREMENT':
        return {
            count: state.count - 1
        }
        case 'RESET':
        return {
            count: 0
        }
        default :
        return state
    }
})

console.log(store.getState())

store.dispatch({
    type: 'INCREMENT' // declare action it wouldbe object.type
})

store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'RESET'
})

store.dispatch({
    type: 'DECREMENT'
})

console.log(store.getState())
