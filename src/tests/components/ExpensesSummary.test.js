import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render a ExpensesSummary with 1 expense data', () => {
    const wrapper = shallow(<ExpensesSummary expensesTotal={100} expenseCount={1} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render a ExpensesSummary with multiple expense data', () => {
    const wrapper = shallow(<ExpensesSummary expensesTotal={5100} expenseCount={2} />)
    expect(wrapper).toMatchSnapshot()
})

