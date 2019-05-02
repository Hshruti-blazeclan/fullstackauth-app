import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import "../static/css/style.css"

class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        username: "",
        password: "",
      },
      toDashboard: false
    }
  }

  inputChangeHandleHandler = (e) => {
    e.preventDefault();
    let store = this.state.form;
    store[e.target.name] = e.target.value;
    this.setState(store);
  }

  handleFormSubmit = (e) => {
    console.log("data=>", JSON.stringify(this.state.form))
    e.preventDefault();
    fetch('https://ayye5kp8pj.execute-api.us-east-1.amazonaws.com/staging/signinuser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.form)
    }).then(response => response.json())
      .then((data) => {
        var dataObj = JSON.parse(data);
        sessionStorage.setItem('token', dataObj.token)
        sessionStorage.setItem('groupName', dataObj.groupName)
        this.setState({ toDashboard: true })
        // window.open('/home', '_self');
      }).catch((error) => {
        console.log('There has been a problem with your fetch operation: ' + error);
      });
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/home' />
    }
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
              value={this.state.form.username}
              onChange={this.inputChangeHandleHandler} />
          </div>
          <div className="form-group">
            <input type="password"
              className="form-control"
              placeholder="Password"
              required="required"
              name="password"
              value={this.state.form.password}
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
