import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'



// ADD_EXPENSE
const addExpense = (
    {
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
const removeExpense = ({ id } = {}) => ({
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
const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
})

// SET_END_DATE
const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
})

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
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

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const FiltersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'TEXT_FILTER':
            return {
                ...state,
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

// timestamp (milliseconds)
// 0 = Jan 1st 1970 (unix epoch)
// is positive or negative integer

// function that have a logic of filters and return data to show
// undestructor filter fuinction
// const getVisibleExpenses = (expenses, filters) => {
//     return expenses
// }
// destructored
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    // get access to individual expense
    return expenses.filter((expense) => {
        // these three guy below is a boolean 
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const TextMatch = expense.description.toLowerCase().includes(text.toLowerCase()) // find any charactor that match desctiption 

        return startDateMatch && endDateMatch && TextMatch
    }).sort((a, b) => {
        if (sortBy === 'Date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'Amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: FiltersReducer
    })
)

store.subscribe(() => {
    // declare value to store object value
    const state = store.getState()
    // use function filter by throw nessesary arrgument
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

//  store.dispatch(setTextFilter('coffe'))

// store.dispatch(sortByDate())

store.dispatch(sortByAmount())

//  store.dispatch(setStartDate(0))
//  store.dispatch(setEndDate(1250))

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