import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with an expense', () => {
    const expenseItem = expenses[1];
    const wrapper = shallow(
        <ExpenseListItem 
            description={expenseItem.description}
            amount={expenseItem.amount}
            createdAt={expenseItem.createdAt}
            id={expenseItem.id} /> );
    expect(wrapper).toMatchSnapshot();
});