import moment from 'moment';

//Get visible expenses
export default (expenses, { text, sortByCategory, sortBy, startDate, endDate }) => {
    return expenses
        .filter((expense) => {
            const createdAtMoment = moment(expense.createdAt);
            const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
            const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
            return startDateMatch && endDateMatch && textMatch;
        })
        .filter((expense) => {
            if (sortByCategory === 'any') {
                return true;
            }
            else {
                const categoryMatch = expense.category == undefined || expense.category.includes(sortByCategory);
                return categoryMatch;
            }
        })
        .sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};
