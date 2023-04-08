import React, { Component } from 'react';
import ClassBased from './ClassBased';
import FuncBased from './FuncBased';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ClassBased x={ this.state.x } />
        <FuncBased x={ this.state.x } />
      </div>
    )
  }
}

export default App;
