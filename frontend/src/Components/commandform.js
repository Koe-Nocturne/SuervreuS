import React, {useState} from 'react';
import Parameter from './parameters';

function CommandForm(props) {
  const [parameters, setParameters] = useState('');
  const [name, setName] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    props.addCommand({name, parameters});
  }
 
  return (
    <form>
      <p><strong>You can add commands for this client here</strong></p><br></br>

      <label>Command Name </label>
      <input 
        onChange={e => setName(e.target.value)} 
        value={name}
      /><br></br>
      <Parameter addParameters={setParameters} params={parameters}/>
      <button onClick={e => handleClick(e)}>Add New Command</button>
    </form>
  )
}

export default CommandForm;