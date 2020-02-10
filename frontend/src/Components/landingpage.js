import React from 'react';
import '../App.css';
import Input from './input'
import make_request from '../APIcall';
import ClientData from './ClientData';


export default class Landingpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showData: true,
      openCmdForm: false,
    };
  }

  msgSuccess = (result) => {
    this.setState({msg: result.data})
  }

  handleError = (error) => {
    this.setState({error});
  }

  handleSuccess = (result) => {
    this.setState({data: result.data})
  }

  openCommandForm = () => {
    this.setState({openCmdForm: true});
  }

  getClientById = (clientId) => {
    console.log("inside ClientbyID function");
    let route = `/client/${clientId}`
    make_request(route, this.handleSuccess, this.handleError)
  }

  updateClientIdInput = (evt) => {
    this.setState({
      clientId: evt.target.value
    });
  }

  componentDidMount(prevProps, prevState) {
    make_request('/', this.msgSuccess, this.handleError)
  }

  renderAddCommandBtn() {
    return (
      <button onClick={this.openCommandForm}>Add New Command</button>
    );
  }
  renderCommandForm() {
    return (
      <div>
        <p><strong>You can add commands for this client here</strong></p><br></br>

        <label>Command Name </label>
        <input/><br></br>

        <p><i>Add params for this client (optional)</i></p>
        <label>Parameter Name </label>
        <input ></input><br></br>

        <label>Parameter Type </label>
        <select>
          <option value="int">int</option>
          <option value="bigint">bigint</option>
          <option value="float">float</option>
          <option value="bool">bool</option>
          <option value="string">string</option>
        </select>
        <button>Add a parameter</button><br></br>
      </div>
    )
  }



  render() {
    let msg = this.state.msg;
    return (
      <div className="App">
        <strong>
          <p>{!this.state.error ? msg : 'Something went wrong loading the page...'}</p>
        </strong><br></br>
        <label>Enter a client ID you wish to view data for: </label>
        <Input onSubmit={this.getClientById}/>
        {this.state.data && this.state.showData ? <ClientData data={this.state.data}/> : ''}
        {this.state.data ? this.renderCommandForm() : ''}
        {this.state.data ? this.renderAddCommandBtn() : ''}
      </div>
    );
  }
}