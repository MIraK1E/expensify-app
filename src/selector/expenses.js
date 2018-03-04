import moment from 'moment'

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    // get access to individual expense
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        // these three guy below is a boolean 
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true  
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const TextMatch = expense.description.toLowerCase().includes(text.toLowerCase()) // find any charactor that match desctiption 

        return startDateMatch && endDateMatch && TextMatch
    }).sort((a, b) => {
        if (sortBy === 'Date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'Amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

export default getVisibleExpenses