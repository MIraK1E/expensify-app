import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'
// line above have import an action generator to use 

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusedChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    onTextChange = (e) => {
                    // react-redux has send function dispatch to prop then we can dispatch here 
                    // use action generator  
                    // this.props.dispatch(setTextFilter(e.target.value))
                    this.props.setTextFilter(e.target.value)
    }
    onSortChange = (e) => {
        if(e.target.value === 'Date')
        {
            this.props.sortByDate()
        }
        else if(e.target.value === 'Amount')
        {
            this.props.sortByAmount()
        }
    }
    render() {
        return (
            <div>
                <input type="text" value={ this.props.filters.text } onChange={this.onTextChange}/>
                <select 
                    value = {this.props.filters.sortBy}
                    onChange={this.onSortChange}>
                    <option value="Date">Date</option>
                    <option value="Amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate = {this.props.filters.startDate}
                    endDate = {this.props.filters.endDate} 
                    onDatesChange = {this.onDatesChange}
                    focusedInput = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusedChange}
                    showClearDates = {true}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export { ExpenseListFilters }

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)