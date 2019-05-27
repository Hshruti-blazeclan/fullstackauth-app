import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import "../static/css/style.css"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDashboard: false,
      errorMsg: "",
      isActive: true,
      groupName: sessionStorage.getItem('groupName') ? sessionStorage.getItem('groupName') : "",
    }
  }

  hideAlert() {
    this.setState({
      isActive: false,
    });
  }

  inputChangeHandleHandler = (e) => {
    // e.preventDefault();
    if(this.state.errorMsg){
      this.setState({
        isActive: true,
      });
    }
    let store = this.props.form;
    store[e.target.name] = e.target.value;
    this.setState(store);
  }


  handleFormSubmit = (e) => {
    e.preventDefault();
    if(!this.state.errorMsg){
      this.setState({
        isActive: true,
      });
    }
    fetch('https://ayye5kp8pj.execute-api.us-east-1.amazonaws.com/staging/signinuser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.props.form)
    }).then(response => response.json())
    .then((data) => {
        let dataObj = "";
        console.log("=++++>>>>>>>>>>>>>>data", data)
        if (data.success === "false") {
          dataObj = "Invalid Username and Password..!!!";
          this.setState({ errorMsg: dataObj })
        } else {
          dataObj = data;
          sessionStorage.setItem('token', dataObj.token)
          sessionStorage.setItem('groupName', dataObj.groupName)
          sessionStorage.setItem('userName', this.props.form.userName)
          this.setState({ toDashboard: true, groupName: dataObj.groupName })
        }
        // window.open('/home', '_self');
      }).catch((error) => {
        console.log("Something went wrong", + error)
      });
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to={{
        pathname: this.props.pathname === "schoolone" ? "/schoolone/dashboard" : "/schooltwo/dashboard",
        state: { 
          groupName: this.state.groupName, 
          routeName : this.props.pathname
        } 
      }}
      />
    }
    return (
      <div className="login-form">
        <form onSubmit={this.handleFormSubmit}>
          <h2 className="text-center">Log in</h2>
          <br />
          <div>
          {this.state.isActive && this.state.errorMsg && <div className="alert alert-danger alert-dismissible" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => this.hideAlert()}><span aria-hidden="true">&times;</span></button>
            {this.state.errorMsg}
          </div>}
        </div>
 
          <div className="form-group">
            <input type="text"
              className="form-control"
              placeholder="Username"
              required="required"
              name="userName"
              value={this.props.form.userName}
              onChange={this.inputChangeHandleHandler} />
          </div>
          <div className="form-group">
            <input type="password"
              className="form-control"
              placeholder="Password"
              required="required"
              name="password"
              value={this.props.form.password}
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
