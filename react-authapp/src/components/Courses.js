import React, { Component } from 'react';
import CommonFooter from './CommonFooter';
import CommonHeader from './CommonHeader';
import "../static/css/style.css"

class Courses extends Component {
  render() {
    return (
      <div>
        <CommonHeader
          pathname={this.props.location.pathname}
        />
        <h2>List of School One Courses..!!!</h2>
        <CommonFooter />
      </div>
    )
  }
}
export default Courses;
