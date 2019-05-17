import React, { Component } from 'react';
import "../../static/css/style.css"
import TeacherImg from '../../static/images/course-3.jpg'

class TeacherDashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <section className="home-slider owl-carousel">
            {/* <div className="slider-item" style={{ backgroundImage: `url(${TeacherImg})` }}>
              <div className="overlay" />
              <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                  <div className="col-md-8 text-center ftco-animate">
                    <h1 className="mb-4">Kids Are The Best <span>Explorers In The World</span></h1>
                    <p><a href="#" className="btn btn-secondary px-4 py-3 mt-3">Read More</a></p>
                  </div>
                </div>
              </div>
            </div> */}
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
            <div className="navbar navbar-fixed-top navbar-default">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="sidebar-nav-fixed affix">
                      <div className="well">
                        <ul className="nav ">
                          <li className="nav-header">Sidebar</li>
                          <li className="active"><a href="#">Link</a>
                          </li>
                          <li><a href="#">Link</a>
                          </li>
                          <li><a href="#">Link</a>
                          </li>
                          <li><a href="#">Link</a>
                          </li>
                          <li><a href="#">Link</a>
                          </li>
                          <li><a href="#">Link</a>
                          </li>
                          <li><a href="#">Link</a>
                          </li>
                          <li><a href="#">Link</a>
                          </li>
                          <li><a href="#">Link</a>
                          </li>
                          <li><a href="#">Link</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="jumbotron">
                      <h1>Hello, Students!</h1>
                      <p>What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software 
                        like Aldus PageMaker including versions of Lorem Ipsum.
    
                        Why do we use it?
                        It is a long established fact that a reader will be distracted by the 
                        readable content of a page when looking at its layout. The point of using Lorem 
                        Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
                        to using 'Content here, content here', making it look like readable English. 
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as 
                        their default model text, and a search for 'lorem ipsum' will uncover many web 
                        sites still in their infancy. Various versions have evolved over the years, 
                        sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                      <p><a className="btn btn-primary btn-lg">Learn more »</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
export default TeacherDashboard;
