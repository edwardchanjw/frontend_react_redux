import React, { Component } from 'react';
//Temporary not support file other than CSS and SVG
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  onChangeHandler(event) {
    console.log('from onChangeHandler App.js');
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hello World React JS, Redux</h2>
        </div>
        <p className="App-intro">
          Hello, {this.props.text}
          {' '}
          <input onChange={this.onChangeHandler.bind(this)}>
          </input>
        </p>
      </div>
    );
  }
}

export default App;