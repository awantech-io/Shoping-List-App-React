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
        completed: false
      },
      {
        id:3,
        title:'lemon',
        completed: false
      },
    ]
  }

  // Toggle checked List Item
  markComplete = (id) => {
    this.setState({ lists: this.state.lists.map(
      list => {
        if (list.id === id) {
          list.completed = !list.completed
        }
        return list;
      }
    )})
  }
  
  render() {
      return (
          <div>
           <List lists={this.state.lists} markComplete={this.markComplete} /> 
          </div>
      )
  }
}
export default App
