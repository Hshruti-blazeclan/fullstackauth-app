import React, { Component } from 'react';
import "../../static/css/style.css"
import TeacherImg from '../../static/images/course-3.jpg'

class TeacherDashboard extends Component {

    render() {
        return (
          <section className="home-slider owl-carousel">
            <section className="ftco-intro slider-item"  style={{ backgroundImage: `url(${TeacherImg})` }} data-stellar-background-ratio="0.5">
              <div className="overlay" />
              <div className="container">
                <div className="row">
                  <div className="col-md-9">
                    <h2>Teaching Your Child Some Good Manners</h2>
                    <p className="mb-0">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <p className="mb-0"><a href="#" className="btn btn-secondary px-4 py-3">Take a Course</a></p>
                  </div>
                </div>
              </div>
            </section>
            <h2>Welcome to Teacher Dashboard</h2>
          </section>
        )
    }
}
export default TeacherDashboard;
