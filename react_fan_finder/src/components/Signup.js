import React, { Component } from 'react';
import axios from 'axios';


class SignUp extends Component {
  constructor(){
    super();

    this.state = { 
      inputs: {
        name: '',
        email: '',
        password: ''
      }
    }
  }

  
  signUp(e){
    e.preventDefault(); 
    
    axios.post(`${this.props.url}/users`, this.state.inputs)
      .then(res => { 
    
        this.props.setUser(res.data);
      })
  }


  changeInput(e, input){
    const val = e.target.value;
    this.setState(prev => { 
      prev.inputs[input] = val;
      return prev;
    });
  }

  render(){
    return(
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={this.signUp.bind(this)}>

          <label htmlFor='name'>Name</label>
          <input value={this.state.inputs.name}
            id='signup-name' name='name' type='text'
            onChange={e => this.changeInput(e, 'name')}
          />

          <label htmlFor='email'>Email</label>
          <input value={this.state.inputs.email}
            id='signup-email' name='email' type='email'
            onChange={e => this.changeInput(e, 'email')}
          />

          <label htmlFor='password'>Password</label>
          <input value={this.state.inputs.password}
            id='signup-password' name='password' type='password'
            onChange={e => this.changeInput(e, 'password')}
          />

          <label htmlFor='password_confirmation'>Password Confirmation</label>
          <input value={this.state.inputs.password_confirmation}
            id='signup_password_confirmation'
            name='password_confirmation' type='password'
            onChange={e => this.changeInput(e, 'password_confirmation')}
          />

          <div className="form-buttons">
            <button type="submit" className="form-button">Sign Up</button>
            <button onClick={this.props.toggleMode} className="form-button">Log In</button>
          </div>

        </form>
      </div>
    )
  }
}

export default SignUp;