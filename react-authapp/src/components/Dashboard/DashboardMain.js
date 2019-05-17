import React, { Component } from 'react';
import "../../static/css/style.css"
import CommonFooter from '../CommonFooter';
import CommonHeader from '../CommonHeader';
import StudentDashboard from './StudentDashboard';
import TeacherDashboard from './TeacherDashboard';
import ParentDashboard from './ParentDashboard';
import AdminDashboard from './AdminDashboard';


class DashboardMain extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   groupName: this.props.location.state.groupName ? this.props.location.state.groupName : "",
    //   routeName: this.props.location.state.routeName ? this.props.location.state.routeName : ""
    // }
  }
  // onLogout = () => {
  //   console.log("================this.props", this.props)
  //   this.props.history.push('/school-one');
  // }


  componentWillUpdate(nextProps, nextState) {
    console.log('Component will update!');
 }

  render() {
    console.log("===>>..this.props", this.props)
    return (
      <div>
        <CommonHeader
          pathname={this.props.location.pathname}
        />
        {this.props.location.state.groupName == "student" ?
          <StudentDashboard />
          :
          this.props.location.state.groupName == "teacher" ?
            <TeacherDashboard />
            :
            this.props.location.state.groupName == "parent" ?
              <ParentDashboard />
              :
              this.props.location.state.groupName == "admin" ?
                <AdminDashboard />
                :
                null
        }
        <CommonFooter />
      </div>
    )
  }
}
export default DashboardMain;
