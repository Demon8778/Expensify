import filtersRedcuer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', () => {
    const state = filtersRedcuer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersRedcuer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const state = filtersRedcuer(currState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'This is my text filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersRedcuer(undefined, action);
    expect(state.text).toBe('This is my text filter');
});

test('should set startDate filter', () => {
    const startDate = moment(0);
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersRedcuer(undefined, action);
    expect(state.startDate).toEqual(moment(0));
});

test('should set endDate filter', () => {
    const endDate = moment(0);
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersRedcuer(undefined, action);
    expect(state.endDate).toEqual(moment(0));
});
