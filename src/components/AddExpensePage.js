import React from 'react'
import { connect } from 'react-redux'
import { startAddExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'

// Avoid function inline by re-write to class base component
class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                    // function excute when call only
                    onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}

// To Avoid function in line that recalculate every time  
// const AddExpensePage = (props) => (
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm 

//             // pass props onSubmit function to child node
//             onSubmit={(expense)=> {

//                 // after mapDispatchToProps props.dispatch(addExpense(expense))
//                 // change to line below and work correctly but This is function inline
//                 props.onSubmit(expense)

//                 // props.htistory come from reactRounter that pass this automatically
//                 props.history.push('/')
//             }}
//         />
//     </div>
// )

// get dispatch function to prop that can be function ready to use 
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

// export to test
export { AddExpensePage }

// connect(mapStateToProp, mapDispatchToProps, ...)
export default connect(undefined, mapDispatchToProps)(AddExpensePage)