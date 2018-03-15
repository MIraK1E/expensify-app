import React from 'react'
import numeral from 'numeral'
import selectExpensesTotal from '../selector/expense-total'
import { connect } from 'react-redux'
import getVisibleExpenses from '../selector/expenses'
import { Link } from 'react-router-dom'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const ExpenseText = expenseCount === 1 ? "expense" : "expenses"
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount}</span> {ExpenseText} totalling <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span>
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
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