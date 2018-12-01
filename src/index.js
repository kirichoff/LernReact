import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AdminMenu from './components/AdminMenu';
import * as serviceWorker from './serviceWorker';
import  ImagBoxRender from './components/ImagBoxRender';
//mport App from './App';
import PropTypes from 'prop-types';
import rootReducer from './reducers'
import { createStore } from 'redux'
import {Provider} from 'react-redux'



//const store = createStore(counter)

const store = createStore(rootReducer)

 ReactDOM.render(
    <Provider store = {store}>
        <AdminMenu/>
    </Provider>,
    document.getElementById('test'))

ReactDOM.render(
    <Provider store = {store}>
        <ImagBoxRender/>
    </Provider>,
    document.getElementById('imr'));



serviceWorker.unregister();
