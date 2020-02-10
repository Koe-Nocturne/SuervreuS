import React, {useState} from 'react';
import CommandBtn from './commandbtn';
import Parameter from './parameters';

function CommandForm(props) {
  const [parameters, setParameters] = useState('');

  return (
    <form>
      <p><strong>You can add commands for this client here</strong></p><br></br>

      <label>Command Name </label>
      <input/><br></br>
      <Parameter addParameters={setParameters} params={parameters}/>
      <button onClick={props.openform}>Add New Command</button>
    </form>
  )
}

export default CommandForm;