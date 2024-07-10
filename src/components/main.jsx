import React from "react"
import {useState} from "react"

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0
    }
    this.updateState = this.updateState.bind(this);
  }
  
  updateState() {
    this.setState({
      count : this.state.count + 1
    })
  }
  render() {
    
    
    
    
    return (
      <div>
        <button onClick={this.updateState}>Click me</button>
        <p>You clicked {this.state.count} times</p>
      </div>
    );
  }
}