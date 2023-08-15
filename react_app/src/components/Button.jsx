const Button = function(props) {

  return (
    <button onClick={props.onClick}>
      { props.text }
    </button>
  )
}

export default Button;