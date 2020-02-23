import React from 'react';
//import ReactDOM from 'react-dom';

class Counter extends React.Component {
  state = {
    count: 0
  };

  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = {
      count: 0,
      step: 1
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  //alternative
  /* render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button
          onClick={function() { console.log('clicked!') }}
        >
          Add 1
        </button>
      </div>
    )
  } */

/*   handleButtonClick() {
    console.log('clicked!');
    console.log(this.state.count);
  } */
  //fix 3
  handleButtonClick = () => {
    console.log(this.state.count)
    //updating the count
     const newCount = this.state.count + 1
     const newStep = this.state.step + 1
     console.log('props in handleButtonClick', this.props)
    console.log('state in handleButtonClick', this.state)
     this.setState({
        count: newCount,
        state: newStep
      })
  }
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>
          Add 1
        </button>
      </div>
    )
  }

 
  //Fix 2
 /*  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={() => this.handleButtonClick()}>
          Add 1
        </button>
      </div>
    )
  } */
}

export default Counter;