import React, { useEffect } from 'react';

const PropsComponent = props => {

  useEffect(() => {
    console.log('Props Component mounted!');
  }, [])

  useEffect(() => {
    console.log('Props Title has changed!');
  }, [props.title])

  return (
    <div>
      <p>{ props.title }</p>
    </div>
  )
}

export default PropsComponent;