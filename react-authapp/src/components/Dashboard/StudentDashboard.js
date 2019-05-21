import React, { Component } from 'react';
import "../../static/css/style.css"
import Banner1 from '../../static/images/bg_1.jpg'
import emailIcon from '../../static/images/email_386x288.jpg'
import attendenceIcon from '../../static/images/attendance_386x288.jpg'
import calenderIcon from '../../static/images/calendar_386x288.jpg'
import moodleIcon from '../../static/images/moodle_386x288.jpg'


class StudentDashboard extends Component {

  render() {
    return (
      <section className="home-slider owl-carousel">
        <div className="slider-item" style={{ backgroundImage: `url(${Banner1})` }}>
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
              <div className="col-md-8 text-center ftco-animate">
                <h1 className="mb-4">Kids Are The Best <span>Explorers In The World</span></h1>
                <p><a href="#" className="btn btn-secondary px-4 py-3 mt-3">Read More</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 stud-sidebar">
              <div className="sidebar-nav-fixed affix">
                  <ul className="sidebar-nav-ul-fixed">
                    <p>Sidebar</p><hr/>
                    <li className="active"><a href="#">My Emails</a>
                    </li><br/>
                    <li><a href="#">Moodles</a>
                    </li><br/>
                    <li><a href="#">My Attendence</a>
                    </li><br/>
                    <li><a href="#">My Calender</a>
                    </li><br/>
                    <li><a href="#">My Courses</a>
                    </li><br/>
                    <li><a href="#">Communications</a>
                    </li><br/>
                    <li><a href="#">My Fundings</a>
                    </li>
                  </ul>
              </div>
            </div>
            <div className="col-sm-9 col-md-10 main">
              <div className="left-container">
                <h1 className="page-header">
                  STUDENT DASHBOARD
                </h1>
                <div className="row placeholders">
                  <div className="col-xs-6 col-sm-3 placeholder text-center">
                    <img src={emailIcon} className="center-block img-responsive img-circle" alt="Generic placeholder thumbnail" />
                    <h4>My Email</h4>
                    <span className="text-muted">Access your personal college email account.</span>
                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder text-center">
                    <img src={moodleIcon} className="center-block img-responsive img-circle" alt="Generic placeholder thumbnail" />
                    <h4>Moodle</h4>
                    <span className="text-muted">Access your course documentation and more.</span>
                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder text-center">
                    <img src={attendenceIcon} className="center-block img-responsive img-circle" alt="Generic placeholder thumbnail" />
                    <h4>My Attendance</h4>
                    <span className="text-muted">Update your attendance records.</span>
                  </div>
                  <div className="col-xs-6 col-sm-3 placeholder text-center">
                    <img src={calenderIcon} className="center-block img-responsive img-circle" alt="Generic placeholder thumbnail" />
                    <h4>Student Calendar</h4>
                    <span className="text-muted">Term dates and holidays for the academic year.</span>
                  </div>
                </div>
                <hr />
              </div>{/*/row*/}
              <div id="student-policies-7518" className="content-block" anchor="anc-7518">
                <div className="container container--max">
                  <div className="animate fadeIn" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                    <div className="highlight-block highlight-block--bg-blue">
                      <div className="highlight-block_lead animate fadeIn" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeIn' }}>
                        <div className="block-inner">
                          <h1 className="script-text" style={{ textAlign: 'center' }}>Student Policies</h1>
                        </div>
                      </div>
                      <div className="highlight-block_content animate fadeIn" data-wow-delay="0.7s" style={{ visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeIn' }}>
                        <p style={{ textAlign: 'center' }}><span>Find a list of the relevant academic and codes of conduct policies, which are designed to protect and maintain both academic quality and your rights and responsibilities as a student at New College Lanarkshire.<br /></span><br /><a data-id={7013} href="/students/student-policies" title="STUDENT POLICIES (1)"><span className="btn">View All Student Policies.</span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>{/*/.container*/}


      </section>
    )
  }
}
export default StudentDashboard;
