import { createStore } from 'redux'

///////////////////////////////////////////////////////////////////////////////
// this is action generator, the function that create action object
// line below is set payload default value to non object

// function that seem like our action generator 
// const add = (data) => {
//     return data.a + data.b
// }
// console.log(add({ a:1, b:12 }))

// we can refactor our code with Object destructor  
// const add = ({ a, b }) => { // function add destructor an object 
//     return a + b
// }
// console.log(add({ a: 1, b: 12 })) this line throw an object to add function
///////////////////////////////////////////////////////////////////////////////

// non refactor with destructor action generator
// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',

//     // line below is check type of payload.incrementBy if is number set equal to incrementBy else set to 1 
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// })

// refactored
// line below set default value of arrgument to empty object then 
// set default value of incrementBy 
// it work like this 
// 1. check arrgument object if empty set arrgument to empty object
// 2. destuctor arrgument set Default value for incrementBy = 1 else use value of incrementBy in object.incrementBy (object is arrgument)
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    // this is shot hand version of incrementBy : incrementBy
    // cause we destructored we can use only name of key
    // then we want to set incrementBy inthis object but the key use smae name thne we can type only incrementBy program will run properly
    incrementBy  
})

const decrementBy = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
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

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementBy())

store.dispatch(decrementBy({ decrementBy: 10 }))

store.dispatch(setCount({ count: 101 }))
