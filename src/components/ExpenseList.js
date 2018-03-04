import React from 'react'
// this import it allow us to connect data store
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selector/expenses'

// props come from ConnectedExpenseList(HOC) that connect to state and send props to this component
// export for test
export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
            props.expenses.map((expense) => 
            <ExpenseListItem
            key = {expense.id}
            id = {expense.id} 
            description = {expense.description}
            amount = {expense.amount}
            createdAt = {expense.createdAt}
            />) 
            )
        }
    </div>
)

// we can break in to variable like this or just set like comment code
// const mapStateToProps = (state) => {
//     return {
//          //key: the state object that need here
//          expenses: state.expenses,
//          filters: state.filters
//     }
// } 
// export default connect(mapStateToProps)(ExpenseList)
// patern of api connect connect(...function())(component)
const ConnectedExpenseList = connect((state) => {
    return {
        //key: the state object that need here
        //expenses: state.expenses
        //line below has import filter function from selector that need 2 arr to sort and filter then return object back
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
})(ExpenseList)

export default ConnectedExpenseList