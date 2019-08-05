import React from 'react';

class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  }

  render(){
    return(
      <form>
        <input placeholder='Enter first name' value={this.state.firstName}
        onChange={e => this.setState({firstName: e.target.value})/>
        <input placeholder='Enter last name' value={this.state.lastName} />
        <input placeholder='Enter username' value={this.state.username} />
        <input placeholder='Enter email' value={this.state.email} />
        <input placeholder='Enter password' value={this.state.password} />

      </form>
    );
  }
}

export default Form;
