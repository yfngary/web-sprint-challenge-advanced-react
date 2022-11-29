import React from 'react';
import axios from 'axios';

// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at


export default class AppClass extends React.Component {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
  state = {
    message: '',
    email: '',
    index: 4,
    steps: 0,
    x: 2,
    y: 2
  }

  reset = () => {
    this.setState({
      message: '',
      email: '',
      index: 4,
      steps: 0,
      x: 2,
      y: 2
    })
  }

  // rightMoveFunction = (index) => {
  //   if(index === 2){
  //     this.setState({message: "You can't go right"})
  //   }
  //   else if(index === 5){
  //     this.setState({message: "You can't go right"})
  //   }
  //   else if(index === 8){
  //     this.setState({message: "You can't go right"})
  //   }
  //   else {
  //   this.setState({index: this.state.index + 1})
  //   this.setState({steps: this.state.steps + 1})
  //   this.setState({x: this.state.x + 1})
  //   this.setState({message: ' '})
  //   }
  // }

  rightMove = () => {
    if(this.state.index === 2){
      this.setState({message: "You can't go right"})
    }
    if(this.state.index === 5){
      this.setState({message: "You can't go right"})
    }
    if(this.state.index === 8){
      this.setState({message: "You can't go right"})
    }

    if(this.state.index === 4){
      this.setState({index: 4 + 1})
      this.setState({steps: this.state.steps + 1})
      this.setState({x: this.state.x + 1})
      this.setState({message: " "})
    }

    if(this.state.index === 0){
      this.setState({index: 0 + 1})
      this.setState({steps: this.state.steps + 1})
      this.setState({x: this.state.x + 1})
      this.setState({message: " "})
    }

    if(this.state.index === 1){
      this.setState({index: 1 + 1})
      this.setState({steps: this.state.steps + 1})
      this.setState({x: this.state.x + 1})
      this.setState({message: " "})
    }

    if(this.state.index === 3){
      this.setState({index: 3 + 1})
      this.setState({steps: this.state.steps + 1})
      this.setState({x: this.state.x + 1})
      this.setState({message: " "})
    }

    if(this.state.index === 6){
      this.setState({index: 6 + 1})
      this.setState({steps: this.state.steps + 1})
      this.setState({x: this.state.x + 1})
      this.setState({message: " "})
    }

    if(this.state.index === 7){
      this.setState({index: 7 + 1})
      this.setState({steps: this.state.steps + 1})
      this.setState({x: this.state.x + 1})
      this.setState({message: " "})
    }
  }

  leftMove = () => {
    if(this.state.index === 0){
      this.setState({message: "You can't go left"})
    }
    if(this.state.index === 3){
      this.setState({message: "You can't go left"})
    }
    if(this.state.index === 6){
      this.setState({message: "You can't go left"})
    }

    if(this.state.index === 4){
      this.setState({index: 4 - 1})
      this.setState({steps: this.state.steps + 1})
      this.setState({x: this.state.x - 1})
      this.setState({message: " "})
    }

    if(this.state.index === 2){
      this.setState({index: 2 - 1})
      this.setState({steps: this.state.steps + 1})
      this.setState({x: this.state.x - 1})
      this.setState({message: " "})
    }

    if(this.state.index === 1){
      this.setState({index: 1 - 1})
      this.setState({steps: this.state.steps + 1})
      this.setState({x: this.state.x - 1})
      this.setState({message: " "})
    }

    if(this.state.index === 5){
      this.setState({index: 5 - 1})
      this.setState({steps: this.state.steps + 1})
      this.setState({x: this.state.x - 1})
      this.setState({message: " "})
    }

    if(this.state.index === 8){
      this.setState({index: 8 - 1})
      this.setState({steps: this.state.steps + 1})
      this.setState({x: this.state.x - 1})
      this.setState({message: " "})
    }

    if(this.state.index === 7){
      this.setState({index: 7 - 1})
      this.setState({steps: this.state.steps + 1})
      this.setState({x: this.state.x - 1})
      this.setState({message: " "})
    }

  }

  upMove = () => {
    if(this.state.index === 0){
      this.setState({message: "You can't go up"})
    }
    if(this.state.index === 1){
      this.setState({message: "You can't go up"})
    }
    if(this.state.index === 2){
      this.setState({message: "You can't go up"})
    }

    if(this.state.index === 4){
      this.setState({index: 4 - 3})
      this.setState({steps: this.state.steps + 1})
      this.setState({y: this.state.y - 1})
      this.setState({message: " "})
    }
    if(this.state.index === 7){
      this.setState({index: 7 - 3})
      this.setState({steps: this.state.steps + 1})
      this.setState({y: this.state.y - 1})
      this.setState({message: " "})
    }
    if(this.state.index === 3){
      this.setState({index: 3 - 3})
      this.setState({steps: this.state.steps + 1})
      this.setState({y: this.state.y - 1})
      this.setState({message: " "})
    }
    if(this.state.index === 5){
      this.setState({index: 5 - 3})
      this.setState({steps: this.state.steps + 1})
      this.setState({y: this.state.y - 1})
      this.setState({message: " "})
    }
    if(this.state.index === 6){
      this.setState({index: 6 - 3})
      this.setState({steps: this.state.steps + 1})
      this.setState({y: this.state.y - 1})
      this.setState({message: " "})
    }
    if(this.state.index === 8){
      this.setState({index: 8 - 3})
      this.setState({steps: this.state.steps - 1})
      this.setState({y: this.state.y + 1})
      this.setState({message: " "})
    }
  }

  downMove = () => {
    if(this.state.index === 6){
      this.setState({message: "You can't go down"})
    }
    if(this.state.index === 7){
      this.setState({message: "You can't go down"})
    }
    if(this.state.index === 8){
      this.setState({message: "You can't go down"})
    }

    if(this.state.index === 4){
      this.setState({index: 4 + 3})
      this.setState({steps: this.state.steps + 1})
      this.setState({y: this.state.y + 1})
      this.setState({message: " "})
    }
    if(this.state.index === 0){
      this.setState({index: 0 + 3})
      this.setState({steps: this.state.steps + 1})
      this.setState({y: this.state.y + 1})
      this.setState({message: " "})
    }
    if(this.state.index === 1){
      this.setState({index: 1 + 3})
      this.setState({steps: this.state.steps + 1})
      this.setState({y: this.state.y + 1})
      this.setState({message: " "})
    }
    if(this.state.index === 2){
      this.setState({index: 2 + 3})
      this.setState({steps: this.state.steps + 1})
      this.setState({y: this.state.y + 1})
      this.setState({message: " "})
    }
    if(this.state.index === 3){
      this.setState({index: 3 + 3})
      this.setState({steps: this.state.steps + 1})
      this.setState({y: this.state.y + 1})
      this.setState({message: " "})
    }
    if(this.state.index === 5){
      this.setState({index: 5 + 3})
      this.setState({steps: this.state.steps + 1})
      this.setState({y: this.state.y + 1})
      this.setState({message: " "})
    }
  }

  onChange = (evt) => {
    this.setState({ email: evt.target.value })
  }

  onSubmit = (evt) => {
    // Use a POST request to send a payload to the server.
    evt.preventDefault();
    const userData = {
      x: this.state.x,
      y: this.state.y,
      steps: this.state.steps,
      email: this.state.email 
    }

    axios.post("http://localhost:9000/api/result", userData)
      .then(res => {
        this.setState({message: res.data.message});
        const emailInput = document.getElementById('email');
        emailInput.value = '';
      })
      .catch(err => console.error(err));
  }

  render() {
    const { className } = this.props
    const { message, email, index, steps, x, y } = this.state;
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({x}, {y})</h3>
          <h3 id="steps">You moved {steps} times</h3>
        </div>
        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div key={idx} className={`square${idx === index ? ' active' : ''}`}>
                {idx === index ? 'B' : null}
              </div>
            ))
          }
        </div>
        <div className="info">
          <h3 id="message">{message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={this.leftMove}>LEFT</button>
          <button id="up" onClick={this.upMove}>UP</button>
          <button id="right" onClick={this.rightMove}>RIGHT</button>
          <button id="down" onClick={this.downMove}>DOWN</button>
          <button id="reset" onClick={this.reset}>reset</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input id="email" type="email" placeholder="type email" onChange={this.onChange}></input>
          <input id="submit" type="submit" onSubmit={this.onSubmit}></input>
        </form>
      </div>
    )
  }
}
