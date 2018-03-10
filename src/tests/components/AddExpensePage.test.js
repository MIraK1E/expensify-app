import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let startAddExpense, history, wrapper

// use beforeEach to set a Duplicate variable here
beforeEach(() => {
    startAddExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)
})

test('should render AddExpensePage Correctly', () => {
    // const onSubmit = jest.fn() // use mock function to test behavior in function but not excute
    // const history = { push: jest.fn() }
    // const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />)
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
    // const onSubmit = jest.fn()
    // const history = { push: jest.fn() }
    // const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />)
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
})