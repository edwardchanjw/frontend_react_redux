// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import AppContainer from './AppContainer';
import HelloReducer from './reducers/HelloReducer'
import HelloAction from './actions/HelloAction';

window.store = createStore(HelloReducer, {text: 'Initial value from createStore'});

//Simple Interaction from outside of React application
setInterval(function(){
window.store.dispatch({
    type: 'CHANGE_TEXT',
    text: "AB"
});
}, 300)

ReactDOM.render(
 <Provider store={window.store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);