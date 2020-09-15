import React, { Component } from 'react';
import './App.css';
import List from './components/List';

export class App extends Component {
  
  state = {
    lists: [
      {
        id:1,
        title:'rice',
        completed: false
      },
      {
        id:2,
        title:'egg',
        completed: true
      },
      {
        id:3,
        title:'lemon',
        completed: false
      },
    ]
  }
  
  render() {
      return (
          <div>
           <List lists={this.state.lists} /> 
          </div>
      )
  }
}
export default App
