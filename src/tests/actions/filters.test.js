import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../../actions/filters';
import moment from 'moment';

test('should generate set Start Date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set End Date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate set TEXT filter object with provided value', () => {
  const filter = setTextFilter('Rent');
  expect(filter).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Rent'
  });
});

test('should generate set TEXT filter object with default value', () => {
  const filter = setTextFilter();
  expect(filter).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should setup DATE filter object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should setup AMOUNT filter object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});
