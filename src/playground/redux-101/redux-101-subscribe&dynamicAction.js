import { createStore } from 'redux'

// we can pass other value in action object to make change for state in this case is incrementBy, decrementBy, count
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) { 
        case 'INCREMENT':

             // line below is check a type of incrementBy (incrementBy has come together with action object), 
             // if is number set incrementBy2 equal action.incrementBy, else set incrementBy2 as 1
            const incrementBy2 = typeof action.incrementBy === 'number' ? action.incrementBy : 1  
            return {
                count: state.count + incrementBy2
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    }
})

// track changing of store print out on console
// the return of subscribe is a function to untrack changing of store 
// then we can declare variable and call it to unsubscribe
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})

// return untrack function
// unsubscribe();

store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'RESET'
})

store.dispatch({
    type: 'DECREMENT'
})

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10 // declare another value to action in store.createStore
})

store.dispatch({
    type: 'SET',
    count: 101
})
