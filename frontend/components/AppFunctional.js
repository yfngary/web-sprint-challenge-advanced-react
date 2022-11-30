import React, { useState } from 'react'
import axios from 'axios'

export default function AppFunctional(props) {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
  const [state, setState] = useState({
    message: '',
    email: '',
    index: 4,
    steps: 0,
    x: 2,
    y: 2
  })


  const reset = () => {
    setState({
      message: '',
      email: '',
      index: 4,
      steps: 0,
      x: 2,
      y: 2
    })
    const emailInput = document.getElementById('email');
    emailInput.value = '';
  }

  // rightMoveFunction = (index) => {
  //   if(index === 2){
  //     setState({message: "You can't go right"})
  //   }
  //   else if(index === 5){
  //     setState({message: "You can't go right"})
  //   }
  //   else if(index === 8){
  //     setState({message: "You can't go right"})
  //   }
  //   else {
  //   setState({index: state.index + 1})
  //   setState({steps: state.steps + 1})
  //   setState({x: state.x + 1})
  //   setState({message: ' '})
  //   }
  // }

  const rightMove = () => {
    if (state.index === 2) {
      setState({
        index: state.index,
        steps: state.steps,
        y: state.y,
        x: state.x,
        message: "You can't go right"
      });
    }
    else if (state.index === 5) {
      setState({
        index: state.index,
        steps: state.steps,
        y: state.y,
        x: state.x,
        message: "You can't go right"
      });
    }
    else if (state.index === 8) {
      setState({
        index: state.index,
        steps: state.steps,
        y: state.y,
        x: state.x,
        message: "You can't go right"
      });
    }

    else {
      setState({
        index: state.index + 1,
        steps: state.steps + 1,
        x: state.x + 1,
        y: state.y,
        message: ""
      })
    }
  }

  const leftMove = () => {
    if (state.index === 0) {
      setState({
        index: state.index,
        steps: state.steps,
        y: state.y,
        x: state.x,
        message: "You can't go left"
      })
    }
    else if (state.index === 3) {
      setState({
        index: state.index,
        steps: state.steps,
        y: state.y,
        x: state.x,
        message: "You can't go left"
      })
    }
    else if (state.index === 6) {
      setState({
        index: state.index,
        steps: state.steps,
        y: state.y,
        x: state.x,
        message: "You can't go left"
      })
    }

    else {
      setState({
        index: state.index - 1,
        steps: state.steps + 1,
        x: state.x - 1,
        y: state.y,
        message: ""
      })
    }
  }

  const upMove = () => {
    if (state.index === 0) {
      setState({
        index: state.index,
        steps: state.steps,
        y: state.y,
        x: state.x,
        message: "You can't go up"
      })
    }
    else if (state.index === 1) {
      setState({
        index: state.index,
        steps: state.steps,
        y: state.y,
        x: state.x,
        message: "You can't go up"
      })
    }
    else if (state.index === 2) {
      setState({
        index: state.index,
        steps: state.steps,
        y: state.y,
        x: state.x,
        message: "You can't go up"
      })
    }
    else {
      setState({
        index: state.index - 3,
        steps: state.steps + 1,
        y: state.y - 1,
        x: state.x,
        message: ""
      })
    }
  }

  const downMove = () => {
    if (state.index === 6) {
      setState({
        index: state.index,
        steps: state.steps,
        y: state.y,
        x: state.x,
        message: "You can't go down"
      })
    }
    else if (state.index === 7) {
      setState({
        index: state.index,
        steps: state.steps,
        y: state.y,
        x: state.x,
        message: "You can't go down"
      })
    }
    else if (state.index === 8) {
      setState({
        index: state.index,
        steps: state.steps,
        y: state.y,
        x: state.x,
        message: "You can't go down"
      })
    }

    else {
      setState({
        index: state.index + 3,
        steps: state.steps + 1,
        y: state.y + 1,
        x: state.x,
        message: ""
      })

    }
  }

  const onChange = (evt) => {
    setState({
      index: state.index,
      steps: state.steps,
      y: state.y,
      x: state.x,
      message: "",
      email: evt.target.value
    })
  }

  const onSubmit = (evt) => {
    // Use a POST request to send a payload to the server.
    evt.preventDefault();
    const userData = {
      x: state.x,
      y: state.y,
      steps: state.steps,
      email: state.email
    }

    axios.post("http://localhost:9000/api/result", userData)
      .then(res => {
        setState({
          index: state.index,
          steps: state.steps,
          y: state.y,
          x: state.x,
          message: res.data.message
        });
        const emailInput = document.getElementById('email');
        emailInput.value = '';
      })
      .catch(err => console.error(err));
  }


  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({state.x}, {state.y})</h3>
        <h3 id="steps">You moved {state.steps} times</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === state.index ? ' active' : ''}`}>
              {idx === state.index ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{state.message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={leftMove}>LEFT</button>
        <button id="up" onClick={upMove}>UP</button>
        <button id="right" onClick={rightMove}>RIGHT</button>
        <button id="down" onClick={downMove}>DOWN</button>
        <button id="reset" onClick={reset}>reset</button>
      </div>
      <form onSubmit={onSubmit}>
        <input id="email" type="email" placeholder="type email" onChange={onChange}></input>
        <input id="submit" type="submit" onSubmit={onSubmit}></input>
      </form>
    </div>
  )
}
