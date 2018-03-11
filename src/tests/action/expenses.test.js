import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'

// configureMockStore pass array of middleware we want to use
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    })
    database.ref('expenses').set(expensesData).then(() => done())
})

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should remove expenses from firebase', (done) => {
    const store = createMockStore({})
    const id = expenses[2].id
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })

        return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('213', { note: 'New note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '213',
        updates: { note: 'New note value' }
    })
})

test('should edit expensess from firebase', (done) => {
    const store = createMockStore({})
    store.dispatch(startEditExpense(expenses[0].id, { note: 'Edited' })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: expenses[0].id,
            updates: {
                note: 'Edited'
            }
        })

        return database.ref(`expenses/${ expenses[0].id }`).once('value')
    })
    .then((snapshot) => {
        expect(snapshot.val().note).toBe('Edited')
        done()
    })
})

// this is not test case when not use asyn function
// test('should setup add expense action object with provided values', () => {
//     // create some object to throw in function
//     const expenseData = {
//         description: 'Rent',
//         amount: 109500,
//         createdAt: 1000,
//         note: 'This was last mount rent'
//     }
//     const action = addExpense(expenseData)
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             id: expect.any(String)
//         }
//     })
// })

test('should setup add expense action object with provided value', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

// test asny function
// if doesn't have done test case will test like syn function [ wait for success and do ]
// we use done to tell jest test function asyn
test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 2000,
        note: 'it cool',
        createdAt: 1000
    }
    // this is mocking store using redux-thunk as middleware
    // try to call startAddExpense
    store.dispatch(startAddExpense(expenseData)).then(() => {
        // get an Array of action 
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        // check firebase that have test value?
        // get data by id that generate by firebase
        // return asyn function to use then that make easy to read
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    })
    // this then will work after return database line above
    .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData)
            done()
    })
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
            description: '',
            note: '', 
            amount: 0,
            createdAt: 0
        }
        
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    })
    .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should setup set expenses action object with data', () => {
    const actions = setExpenses(expenses)
    expect(actions).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({})
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})