import React from 'react';

import './App.css'
import axios from 'axios';

class App extends React.Component {
  state = { advice: ' ' }

  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {

      const { advice } = response.data.slip
      this.setState({ advice })

      console.log(response.data.slip.advice);
    })
    .catch((error) => {
      console.log(this);
    })
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;