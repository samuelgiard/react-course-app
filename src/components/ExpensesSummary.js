import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expense-total';

export const ExpensesSummary = (props) => (  
  <div>
    <p>
    Viewing {props.expenses.length} { props.expenses.length > 1 ? 'expenses' : 'expense'} totalling {numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')}
    </p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);