import React from 'react';

class LifeCycleMethods extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: 0,
      string1: '',
      text: 'Life Cycle Methods'
    }

  }

  changeText(text) {
    this.setState({ text: text })
  }

  // called only once when component gets rendered first time on the screen
  componentDidMount() {
    // console.log('Component mounted!');
    // console.log('value1 ', this.state.value1 );
    // console.log('string1: ', this.state.string1);
    this.setState({ value1: 1, string1: 'String' });
  }

  // called every time when component gets re-rendered
  componentDidUpdate() {
    // console.log('Component got new props or state was updated');
    // console.log('updated value1 ', this.state.value1 );
    // console.log('updated string1: ', this.state.string1);
  }

  // called once the component gets removed from the screen
  componentWillUnmount() {
    // console.log('Life Cycle Method component will be unmounted');
  }

  // draws component on the screen
  render() {
    // console.log('render!');
    return (
      <div id="life-cycle-methods">
        <p>{ this.state.text }</p>
        <button
          onClick={e => this.changeText('Life Cycle Methods updated text')}>
          Change text
        </button>
      </div>
    )
  }
}

export default LifeCycleMethods;