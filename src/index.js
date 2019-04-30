import React from 'react';
import ComponentApp from './ComponentApp'

import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import MyReduser from './redux/MyReduser.js'

const store = createStore(combineReducers ({reducer: MyReduser}),);

ReactDOM.render(
    <Provider store ={store}>
        <ComponentApp />
    </Provider>,
    document.getElementById('root')
);