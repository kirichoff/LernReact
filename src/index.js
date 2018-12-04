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
import CommponentsRend from "./components/CommponentsRend";



//\const store = createStore(counter)
 ReactDOM.render(

        <AdminMenu store = {store} />,

    document.getElementById('test'))
ReactDOM.render(
    <CommponentsRend store = {store}/>,
    document.getElementById('re')
);

ReactDOM.render(

        <ImagBoxRender store = {store} />,

    document.getElementById('imr'));

store.subscribe(()=>{
    console.log('suscribe',store.getState());
})


serviceWorker.unregister();
