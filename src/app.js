import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { startSetExpenses } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import './firebase/firebase';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';


const store = configureStore();

// store.dispatch(addExpense( { description: 'Water bill', amount: 4500 }));
// store.dispatch(addExpense( { description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addExpense( { description: 'Rent', amount: 109500 }));
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

const state = store.getState();
console.log('Hello');
const visibleExpenses = getVisibleExpenses(state.expenses,  state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

