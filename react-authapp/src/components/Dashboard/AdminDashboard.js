import React, { Component } from 'react';
import "../../static/css/style.css"


class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      token: sessionStorage.getItem('token'),
      errorMsg: ""
    }
  }

  componentDidMount = () => {
    fetch("https://ayye5kp8pj.execute-api.us-east-1.amazonaws.com/staging/getallusers", {
      method: 'GET',
      headers: {
        'Authorization': this.state.token,
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
      .then((data) => {
        if (data.status === 0) {
          this.setState({ errorMsg: data.data.message })
        }
        else {
          this.setState(Object.assign({}, this.state, {
            userList: data.data,
          }))
        }
      })
      .catch((error) => {
        console.log("Something went wrong", + error)
      });
  }

  render() {
    return (
      <div className="admin-container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Admin Dashboard</a>
          </li>
        </ol>

        <div className="row box-items">
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-primary o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fas fa-fw fa-comments"></i>
                </div>
                <div className="mr-5">26 New Messages!</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fas fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-warning o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fas fa-fw fa-list"></i>
                </div>
                <div className="mr-5">11 New Tasks!</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fas fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-success o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fas fa-fw fa-shopping-cart"></i>
                </div>
                <div className="mr-5">123 New Requests!</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fas fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-danger o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fas fa-fw fa-life-ring"></i>
                </div>
                <div className="mr-5">13 New Admissions!</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fas fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="card mb-3">
          <div className="card-header">
            <i className="fas fa-chart-area"></i>
            Area Chart Example</div>
          <div className="card-body">
            <canvas id="myAreaChart" width="100%" height="30"></canvas>
          </div>
          <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
        </div> */}

        <div className="card mb-3">
          <div className="card-header">
            <i className="fas fa-table"></i>
            List of All Users</div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.userList.length && this.state.userList.map((obj, index) => (
                    <tr key={index}>
                      <td>{obj.userId ? obj.userId : null}</td>
                      <td>{obj.firstName ? obj.firstName : null}</td>
                      <td>{obj.lastName ? obj.lastName : null}</td>
                      <td>{obj.email ? obj.email : null}</td>
                      <td>{obj.role ? obj.role : null}</td>
                      <td>{obj.phoneNumber ? obj.phoneNumber : null}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AdminDashboard;
