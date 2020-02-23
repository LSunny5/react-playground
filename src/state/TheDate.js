import React from 'react';
//import ReactDOM from 'react-dom';

class TheDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = { datetime: new Date() };
        console.log('constructor')
    }
    /* componentDidMount() {
      this.interval = setInterval(() => {
        console.log('tick')
      }, 1000)
    } */
    //does not work 
    /*     componentDidMount() {
            this.interval = setInterval(() => {
              this.state.datetime = new Date()
            }, 1000)
          } */
    //change state works
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
            console.log('setInterval')
            this.setState({
                datetime: new Date()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        console.log('render')
        return (
            <div>{this.state.datetime.toLocaleString()}</div>
        )
    }
}


export default TheDate;
//ReactDOM.render(<TheDate />, document.getElementById('app'));