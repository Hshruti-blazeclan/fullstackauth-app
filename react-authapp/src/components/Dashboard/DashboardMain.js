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
    this.state = {
      groupName: sessionStorage.getItem('groupName'),
      userName: sessionStorage.getItem('userName'),
    }
  }

  render() {
    const getGroupName = this.state.groupName ? this.state.groupName : this.props.location.state.groupName
    return (
      <div>
        <CommonHeader
          pathname={this.props.location.pathname}
          groupName={getGroupName}
        />
        {getGroupName === "student" ?
          <StudentDashboard />
          :
          getGroupName === "teacher" ?
            <TeacherDashboard />
            :
            getGroupName === "parent" ?
              <ParentDashboard />
              :
              getGroupName === "admin" ?
                <AdminDashboard 
                pathname={this.props.location.pathname}
                groupName={getGroupName} />
                :
                null
        }
        <CommonFooter />
      </div>
    )
  }
}
export default DashboardMain;
