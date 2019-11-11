import React, { Component } from 'react';
import './styles.scss'
export default class App extends Component{
  constructor(){
      super()
      this.state = {

      }
  }
  render(){
      console.log('inside Home')
      return(
          <div className="app">
            <h2>Hello World !</h2>
          </div>
      )
  }
}