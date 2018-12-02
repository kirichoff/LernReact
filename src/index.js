import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AdminMenu from './components/AdminMenu';
import * as serviceWorker from './serviceWorker';
import  ImagBoxRender from './components/ImagBoxRender';
//mport App from './App';
import PropTypes from 'prop-types';

import store from './Store'
import {Provider} from 'react-redux'



//const store = createStore(counter)
 ReactDOM.render(
    <Provider store = {store}>
        <AdminMenu store = {store} />
    </Provider>,
    document.getElementById('test'))

ReactDOM.render(
    <Provider store = {store}>
        <ImagBoxRender store = {store} />
    </Provider>,
    document.getElementById('imr'));
store.subscribe(()=>{
    console.log('suscribe',store.getState());
})


serviceWorker.unregister();
