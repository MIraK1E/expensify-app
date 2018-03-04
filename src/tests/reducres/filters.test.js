import filtersReducer from '../../reducers/filters'
import moment from 'moment'

// @@INIT is value of redux to create default state
test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'Date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('Amount')
})

test('should set sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'Amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('Date')
})

test('should set text filter', () => {
    const text = 'This is my filter'
    const action = { 
        type: 'SET_TEXT_FILTER', 
        text 
    }
    const state  = filtersReducer(undefined, action)
    expect(state.text).toBe(text) 
})

test('should set start date filter', () => {
    const startDate = moment()
    const action = { 
        type: 'SET_START_DATE', 
        date: startDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})

test('should set end date filter', () => {
    const endDate = moment()
    const action = { 
        type: 'SET_END_DATE', 
        date: endDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})