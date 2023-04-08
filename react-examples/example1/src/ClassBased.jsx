import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      str: ''
    }
    this.time = null;
  }

  componentDidMount() {
    console.log('component mounted!');
    this.setState({ value: 1 });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update');
    console.log('prevState: ', prevState);
    console.log('prevProps: ', prevProps);
    if (this.state.value === 1) {
      this.setState({ value: 2 });
    }
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }

  render() {
    return(
      <div>
        <div className="value-container">
          { this.state.value }
        </div>
        <div className="string-container">
          { this.state.str }
        </div>
      </div>
    )
  }
}

export default App;
