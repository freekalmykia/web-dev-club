import React, { useState, useEffect } from 'react';

function HooksComponent() {

  const [value1, setValue1] = useState(0);
  const [string1, setString1] = useState('');
  const [text, setText] = useState('Hooks');

  useEffect(() => {
    // console.log('Hooks Component mounted!');

    return () => {
      // console.log('Hooks Component will be unmounted');
    }
  }, [])

  useEffect(() => {
    // console.log('Hooks Component got new props or state was updated');
  })

  useEffect(() => {
    // console.log('Hooks Component: text was updated');
  }, [text])

  useEffect(() => {
    // console.log('Hooks Component: value1 was updated');
  }, [value1]);

  const changeText = (text) => {
    setText(text);
  }

  // console.log('Hooks component renders!');
  return (
    <div>
      <p>{ text }</p>
      <button
        onClick={e => changeText('Hooks text updated')}
      >
        Change text (Hooks)
      </button>
    </div>
  )
}

export default HooksComponent;

// function useState(initialValue) {
//   let state = initialValue;

//   function setState(value) {
//     state = value;
//   }

//   return [state, setState];
// }

// [value1, setValue1] = [state, setState];