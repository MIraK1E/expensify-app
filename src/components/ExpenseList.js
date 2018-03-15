import React from 'react'
// this import it allow us to connect data store
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selector/expenses'

// props come from ConnectedExpenseList(HOC) that connect to state and send props to this component
// export for test
export const ExpenseList = (props) => (
    <div className="content-container">
    <div>
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
    </div>
        <div className="list-body">
            {
            props.expenses.length === 0 ? (
                <div>
                    <span className="list-item list-item--message">No expenses</span>
                </div>
            ) : (
                    props.expenses.map((expense) =>
                        <ExpenseListItem
                            key={expense.id}
                            id={expense.id}
                            description={expense.description}
                            amount={expense.amount}
                             createdAt={expense.createdAt}
                        />)
                )
            }
        </div>
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