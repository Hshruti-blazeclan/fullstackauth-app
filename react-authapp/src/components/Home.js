import React, { Component } from 'react';
import "../static/css/style.css"

class Home extends Component {
  render() {
    return (
      <div>
        <div className="py-2 bg-primary">
          <div className="container">
            <div className="row no-gutters d-flex align-items-start align-items-center px-3 px-md-0">
              <div className="col-lg-12 d-block">
                <div className="row d-flex">
                  <div className="col-md-5 pr-4 d-flex topper align-items-center">
                    <div className="icon bg-fifth mr-2 d-flex justify-content-center align-items-center"><span className="icon-map" /></div>
                    <span className="text">198 West 21th Street, Suite 721 Australia 10016</span>
                  </div>
                  <div className="col-md pr-4 d-flex topper align-items-center">
                    <div className="icon bg-secondary mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane" /></div>
                    <span className="text">school1_aus@email.com</span>
                  </div>
                  <div className="col-md pr-4 d-flex topper align-items-center">
                    <div className="icon bg-tertiary mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2" /></div>
                    <span className="text">+ 1235 2355 98</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
          <div className="container d-flex align-items-center">
            <a className="navbar-brand" href="index.html">Welcome to Student Dashboard</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><a href="/" className="nav-link pl-0">Home</a></li>
                <li className="nav-item"><a href="/profile" className="nav-link">Profile</a></li>
                <li className="nav-item"><a href="/teachers" className="nav-link">Teacher</a></li>
                <li className="nav-item"><a href="/courses" className="nav-link">Courses</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END nav */}
        <section className="home-slider owl-carousel">
          <div className="slider-item" style={{ backgroundImage: 'url(../static/media/bg_1.97a35c31.jpg)' }}>
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
          <div className="slider-item" style={{ backgroundImage: 'url(/static/media/bg_2.18772550.jpg)' }}>
            <div className="overlay" />
            <div className="container">
              <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                <div className="col-md-8 text-center ftco-animate">
                  <h1 className="mb-4">Perfect Learned<span> For Your Child</span></h1>
                  <p><a href="#" className="btn btn-secondary px-4 py-3 mt-3">Read More</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-services ftco-no-pb">
          <div className="container-wrap">
            <div className="row no-gutters">
              <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-primary">
                <div className="media block-6 d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-teacher" />
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">Certified Teachers</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-tertiary">
                <div className="media block-6 d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-reading" />
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">Special Education</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-fifth">
                <div className="media block-6 d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-books" />
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">Book &amp; Library</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex services align-self-stretch pb-4 px-4 ftco-animate bg-quarternary">
                <div className="media block-6 d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="flaticon-diploma" />
                  </div>
                  <div className="media-body p-2 mt-3">
                    <h3 className="heading">Certification</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-intro" style={{ backgroundImage: 'url(../static/images/bg_3.jpg)' }} data-stellar-background-ratio="0.5">
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

        <section className="ftco-intro box-section" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2>Teaching Your Child Some Good Manners</h2>
                <p className="mb-0">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              </div>
              {/* <div className="col-md-3 d-flex align-items-center">
                <p className="mb-0"><a href="#" className="btn btn-secondary px-4 py-3">Take a Course</a></p>
              </div> */}
              <div className="col-md-4">
                <h2>Teaching Your Child Some Good Manners</h2>
                <p className="mb-0">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              </div>
              {/* <div className="col-md-3 d-flex align-items-center">
                <p className="mb-0"><a href="#" className="btn btn-secondary px-4 py-3">Take a Course</a></p>
              </div>
               */}
               <div className="col-md-4">
                <h2>Teaching Your Child Some Good Manners</h2>
                <p className="mb-0">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              </div>
            </div>
          </div>
        </section>


        <section className="ftco-intro" data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-9 text-col">
                <h2 className="text-h2-color">Teaching Your Child Some Good Manners</h2>
                <p className="mb-0">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              </div>
            </div>
          </div>
        </section>
        <footer className="ftco-footer ftco-bg-dark ftco-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-6 col-lg-3">
                <div className="ftco-footer-widget mb-5">
                  <h2 className="ftco-heading-2">Have a Questions?</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, Austin, Australia</span></li>
                      <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                      <li><a href="#"><span className="icon icon-envelope" /><span className="text">school1_aus@email.com</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="ftco-footer-widget mb-5">
                  <h2 className="ftco-heading-2">Recent Blog</h2>
                  <div className="block-21 mb-4 d-flex">
                    <a className="blog-img mr-4" style={{ backgroundImage: 'url(../static/images/image_1.jpg)' }} />
                    <div className="text">
                      <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                      <div className="meta">
                        <div><a href="#"><span className="icon-calendar" /> Dec 25, 2018</a></div>
                        <div><a href="#"><span className="icon-person" /> Admin</a></div>
                        <div><a href="#"><span className="icon-chat" /> 19</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="block-21 mb-5 d-flex">
                    <a className="blog-img mr-4" style={{ backgroundImage: 'url(../static/images/image_2.jpg)' }} />
                    <div className="text">
                      <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                      <div className="meta">
                        <div><a href="#"><span className="icon-calendar" /> Dec 25, 2018</a></div>
                        <div><a href="#"><span className="icon-person" /> Admin</a></div>
                        <div><a href="#"><span className="icon-chat" /> 19</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="ftco-footer-widget mb-5 ml-md-4">
                  <h2 className="ftco-heading-2">Links</h2>
                  <ul className="list-unstyled">
                    <li><a href="/"><span className="ion-ios-arrow-round-forward mr-2" />Home</a></li>
                    <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2" />About</a></li>
                    <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2" />Services</a></li>
                    <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2" />Login</a></li>
                    <li><a href="#"><span className="ion-ios-arrow-round-forward mr-2" />Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="ftco-footer-widget mb-5">
                  <h2 className="ftco-heading-2">Subscribe Us!</h2>
                  <form action="#" className="subscribe-form">
                    <div className="form-group">
                      <input type="text" className="form-control mb-2 text-center" placeholder="Enter email address" />
                      <input type="submit" defaultValue="Subscribe" className="form-control submit px-3" />
                    </div>
                  </form>
                </div>
                <div className="ftco-footer-widget mb-5">
                  <h2 className="ftco-heading-2 mb-0">Connect With Us</h2>
                  <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                    <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-md-12 text-center">
                <p>
                  Copyright © All rights reserved <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                </p>
              </div>
            </div> */}
          </div>
        </footer>


      </div>
    )
  }
}
export default Home;
