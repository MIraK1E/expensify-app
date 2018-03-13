import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

class EditExpensePage extends React.Component {
    editExpense = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/dashboard')
    }
    removeExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div>
                <ExpenseForm 
                    expense = {this.props.expense}
                    onSubmit = {this.editExpense}
                />
                <button 
                    onClick={this.removeExpense}>Remove</button>
                </div>
        )
    }
}


// const EditExpensePage = (props) => {
//     return (
//         <div>
//            <ExpenseForm 
//                 expense = {props.expense}
//                 onSubmit = {(expense) => {
//                     props.dispatch(editExpense(props.expense.id, expense))
//                     props.history.push('/')
//                 }}
//            />
//            <button 
//                 onClick={() => { 
//                     props.dispatch(removeExpense({ id: props.expense.id }))
//                     props.history.push('/')
//                 }
//             }>Remove</button>
//         </div>
//     )
// }

const mapStateToProps = (state, props) => {
    return { 
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => {
   return {
       startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
       startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
   }
}

export { EditExpensePage }

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)