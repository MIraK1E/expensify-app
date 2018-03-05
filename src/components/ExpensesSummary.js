import React from 'react'
import numeral from 'numeral'
import selectExpensesTotal from '../selector/expense-total'
import { connect } from 'react-redux'
import getVisibleExpenses from '../selector/expenses'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const ExpenseText = expenseCount === 1 ? "expense" : "expenses"
    return (
        <p>
            {`Viewing ${expenseCount} ${ExpenseText} totalling ${numeral(expensesTotal / 100).format('$0,0.00')}`}
        </p>
    )
}

const mapStateToProps = (state) => {
    const visibility = getVisibleExpenses(state.expenses, state.filters)
    return {
        expensesTotal: selectExpensesTotal(visibility),
        expenseCount:  visibility.length
    }
}

export default connect(mapStateToProps)(ExpensesSummary)