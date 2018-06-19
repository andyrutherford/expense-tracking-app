import totalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should totalExpense with expense list of 0', () => {
    const total = totalExpenses([]);
    expect(total).toBe(0);
});

test('should totalExpense with expense list length of 1', () => {
    const total = totalExpenses([expenses[0]]);
    expect(total).toBe(199);
});

test('should totalExpense with expense list length greater than 1', () => {
    const total = totalExpenses(expenses);
    expect(total).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});