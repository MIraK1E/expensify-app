import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

// const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
//     <div>
//          <Link to={`/edit/${id}`}><h3>{ description }</h3></Link>
//         <p>{ amount } - { createdAt }</p>
//         <button onClick={() => actionRemove(dispatch, id)}>Remove</button>
//     </div>
// )

// we can break function and pass argument to excute
// const actionRemove = (dispatch, id) => {
//     dispatch(removeExpense({id}))
// }

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
         <Link to={`/edit/${id}`}><h3>{ description }</h3></Link>
        <p>
            { numeral(amount / 100).format('$0,0.00') } 
            - 
            {moment(createdAt).format('MMMM Do, YYYY') }
        </p>
    </div>
)

export default ExpenseListItem