import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length > 0 && (
        props.expenses.map((expense, index) => (
            <ExpenseListItem 
                key={expense.id}
                {...expense} />
        ))
    )}
  </div>  
);

//Allow ExpenseList to have access to redux store and pass in as props

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
