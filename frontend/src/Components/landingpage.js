import React from 'react';
import '../App.css';
import Input from './input'
import make_request from '../APIcall';
import ClientData from './clientdata';
import CommandForm from './commandform';


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
    let route = `/client/${clientId}`
    make_request(route, this.handleSuccess, this.handleError)
  }

  updateClientIdInput = (evt) => {
    this.setState({
      clientId: evt.target.value
    });
  }

  addCommand = (obj) => {
    let route = `/client/${this.state.data.id}}`;
    let data = {...obj, id: this.state.data.id}
    // make_request(route, this.handleSuccess, this.handleError, data , 'POST');
    console.log(data);
  }

  componentDidMount(prevProps, prevState) {
    make_request('/', this.msgSuccess, this.handleError)
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
        {this.state.data ? <CommandForm addCommand={this.addCommand}/> : ''}
      </div>
    );
  }
}