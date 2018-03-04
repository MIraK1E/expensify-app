import React from 'react'
import { shallow } from 'enzyme'

// import unconnected ExpenseList version for test  
import { ExpenseList } from '../../components/ExpenseList'

// import Dummy data
import expenses from '../fixtures/expenses'

test('should render ExpenseList with expense', () => {
    const warpper = shallow(<ExpenseList expenses={expenses} />)
    expect(warpper).toMatchSnapshot()
})

test('should render ExpenseList with empty message', () => {
    const warpper = shallow(<ExpenseList expenses={[]} />)
    expect(warpper).toMatchSnapshot()
})