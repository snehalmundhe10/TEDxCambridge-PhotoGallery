import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main'
import './Styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './redux/reducer'

const store=createStore(rootReducer)

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>,document.getElementById('root'));
