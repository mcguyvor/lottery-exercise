import React, { Component } from 'react'
import Lottery from './Lottery'
import './App.css'
import Mini from'./MiniLotto'
class App extends Component{
  render(){
    return(
      <div>
          <div className= 'App'>
          <Lottery/>
          <Lottery title='Mini Daily' maxNum={10} maxBall={4}  />
          </div>
      </div>
    );
  }
}

export default App;
