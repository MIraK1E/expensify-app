// Reducer 
// 1. It a pure function
//      - the return of pure function must depend on  
//      /////////////////////////
//      // this is pure function
//      // const add = ( a, b ) => {
//      //     return a + b
//      //  }
//      // this is not pure
//      // let b = 10
//      // const add = ( a, b ) => {
//      //     return a + b
//      // }
//      /////////////////////////
//      - not interact with any var outta scrop
//      /////////////////////////
//      // let result 
//      // const add = ( a, b ) => {
//      // result = a + b
//      // }
//      /////////////////////////
//
// 2. Never change state or action

import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'
// combineReducers is allow us to use two or more Reducers work together


// ADD_EXPENSE
const addExpense = (
    {  // default object value of arrgument
        description = '', 
        note = '', amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,    // 
        note,           // short hand propoties access
        amount,         //
        createdAt       
    }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = { }) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_TEXT_FILTER
const setTextFilter = (text) => ({
    type: 'TEXT_FILTER',
    text
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
const setStartDate = ( date = undefined ) => ({
    type: 'SET_START_DATE',
    date
})

// SET_END_DATE
const setEndDate = ( date = undefined ) => ({
    type: 'SET_END_DATE',
    date
})

// Expenses Reducer

// Default state of expenses reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            // ...state = all of current array state (array speard operator)
            // line below will return new state with out manipulate old state
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            //this line below work like this
            // state = [{expense 1},{expense 2}...{expense X}] state value is an array that has object member
            // we know that object have key name id then we can destructor to hack accessability
            // from state.filter((state) => state.id !== action.id) 
            // To
            return state.filter(({id}) => {
                return id !== action.id
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        // Object speard operator allow us to overide object
                        // in this case we can use ...action update cause action update it's an object
                        // ex { amount: 500 }
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}

// Filters Reducer

// Default state of Filters Reducer
const filtersReducerDefaultState = { 
    text: '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined 
}

const FiltersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'TEXT_FILTER':
            return {
                ...state,
                // below this line we can't use ...action.text because is not an object
                // and this is a single override
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'Date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'Amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state
    }
}

// use reducers normally => const store = createStore()
// line below use combine reducers
// combine reducer need arrgument object 
// key => root state name
// value => reducer for that state
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: FiltersReducer
    })
)

store.subscribe(() => {
    console.log(store.getState())
})

// decalare variable before store.dispatch can store all value of action generator
// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }))
// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('rent'))

// store.dispatch(sortByDate())

// store.dispatch(sortByAmount())

store.dispatch(setStartDate(125))
store.dispatch(setEndDate(1250))

const demoState = {
    expenses: [{
        id: 'asdasdsd',
        description: 'January Rent',
        notes: 'This was final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //data or amount
        startDate: undefined,
        endDate: undefined
    }
}