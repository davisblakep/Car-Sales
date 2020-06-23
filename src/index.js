import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import { vehicleReducer } from './reducers/vehicleReducer';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(vehicleReducer);
console.log("Initial State from index", store.getState())

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, rootElement);
