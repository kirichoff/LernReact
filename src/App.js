import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ImagBoxRender from './components/ImagBoxRender'
import AdminMenu from "./components/AdminMenu"
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import counter from './reducers'
import {Provider} from 'react-redux'
import {store} from  './store'


class App extends Component{

    render () {
        ReactDOM.render(<AdminMenu/>, document.getElementById('test'));
        ReactDOM.render(<ImagBoxRender/>, document.getElementById('imr'));
        return(
            <Provider store ={store}>

            </Provider>

        );
    }

}


export default App;