import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary correctly with a single expense', () => {
  const wrapper = shallow(<ExpensesSummary  expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary  expenseCount={3} expensesTotal={195050} />);
  expect(wrapper).toMatchSnapshot();
});