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
        <Link to={`/edit/${id}`} className="list-item">
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <h3 className="list-item__title">
                {numeral(amount / 100).format('$0,0.00')}
            </h3>
        </Link>
)

export default ExpenseListItem