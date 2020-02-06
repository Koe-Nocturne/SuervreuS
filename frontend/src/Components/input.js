import React, {useState, Fragment} from 'react';

function Input(props) {
  const [input, setInput] = useState('')

  return (
    <Fragment>
      <input value={input} onChange={event => setInput(event.target.value)}></input>
      <button onClick={() => props.onSubmit(input)}>Submit</button>
    </Fragment>
  )

}

export default Input;