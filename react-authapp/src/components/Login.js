import React, { Component } from 'react';
import "../static/css/style.css"

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  inputChangeHandleHandler = (e) => {
    e.preventDefault();
    let store = this.state;
    store[e.target.name] = e.target.value;
    this.setState(store);
  }

  handleFormSubmit = (e) => {
    console.log("data=>", JSON.stringify(this.state))
    e.preventDefault();
    fetch('https://ayye5kp8pj.execute-api.us-east-1.amazonaws.com/staging/signinuser', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(this.state) 
    }).then((response) => {
      // console.log(response.json())
      return response.json()
      // .then((json) => {
      //   if (response.ok) {
      //     return Promise.resolve(json)
      //   }
      //   return Promise.reject(json)
      // })            
    });


  }

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleFormSubmit}>
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <input type="text" 
              className="form-control" 
              placeholder="Username" 
              required="required" 
              name="username"
              value={this.state.username}
              onChange={this.inputChangeHandleHandler} />
          </div>
          <div className="form-group">
            <input type="password" 
            className="form-control" 
            placeholder="Password" 
            required="required"  
            name="password"
            value={this.state.password}
            onChange={this.inputChangeHandleHandler} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">Log in</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Login;
