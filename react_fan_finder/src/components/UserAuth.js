import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

class UserAuth extends Component {
  constructor(){
    super();
    // set up state
    this.state = {
      mode: 'login' 
    }
  }

  toggleMode(e){ 
    e.preventDefault();
    this.setState(prev => { 
      prev.mode = prev.mode === "login" ? 'signup' : 'login';
      return prev
    })
  }

  render(){
    return this.state.mode === "login" ? (
      <Login {...this.props} toggleMode={this.toggleMode.bind(this)} />
    ) : (
      <Signup {...this.props} toggleMode={this.toggleMode.bind(this)} />
    )
  }
}
export default UserAuth;