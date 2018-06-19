import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';


export const ExpenseSummary = ({ expenseCount, expensesTotal }) => (
    <div>
        {expenseCount === 0 ? (
            <p>No expenses to display.</p>
        ) : (
            <p>Showing {expenseCount} {expenseCount === 1 ? ("expense") : ("expenses")} totalling {numeral(expensesTotal / 100).format('$0,0.00')}.</p>
        ) }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenseCount: selectExpenses(state.expenses, state.filters).length,
        expensesTotal: totalExpenses(selectExpenses(state.expenses, state.filters))
    };
};

export default connect(mapStateToProps)(ExpenseSummary);