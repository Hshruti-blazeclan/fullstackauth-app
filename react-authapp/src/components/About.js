import React, { Component } from 'react';
import "../static/css/style.css"
import CommonFooter from './CommonFooter';
import CommonHeader from './CommonHeader';
import courseImg from "../static/images/onlineCourse.jpg"
import bookLibraryImg from "../static/images/libraryBooks.jpg"
import industrialBusiness from "../static/images/industrialBusiness.jpg"
import scalable from "../static/images/scalable.jpg"
import easySetup from "../static/images/easySetup.jpg"
import cultureImg from "../static/images/cultureImg.jpg"
import topComm from "../static/images/topComm.jpg"


class About extends Component {
  render() {
    return (
      <div>
        <CommonHeader
          pathname={this.props.location.pathname}
        />
        <div className="container marketing text-center">
          {/* Three columns of text below the carousel */}
          <h3>ABOUT US</h3>
          <p className="market-header"><em>Work with heart and have great support</em></p>
          <p className="market-content">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
          <br />
          <div className="row">
            <div className="col-lg-4">
              <img className="rounded-circle" src={courseImg} alt="Generic placeholder image" width={140} height={140} />
              <h2>ONLINE COURSE FACILITIES</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <img className="rounded-circle" src={bookLibraryImg} alt="Generic placeholder image" width={140} height={140} />
              <h2>MODERN BOOK LIBRARY</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias..</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <img className="rounded-circle" src={industrialBusiness} alt="Generic placeholder image" width={140} height={140} />
              <h2>BE INDUSTRIAL LEADER</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>{/* /.col-lg-4 */}
          </div>{/* /.row */}
          {/* START THE FEATURETTES */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">EASY SET UP<span className="text-muted">It'll blow your mind.</span></h2>
              <p className="lead">Your team works from our headquarters and is ready to go within weeks.</p>
            </div>
            <div className="col-md-5">
              <img alt="Generic placeholder image" className="featurette-image img-fluid mx-auto" src={easySetup} />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">TOP COMMUNICATION  <span className="text-muted">Great Network</span></h2>
              <p className="lead">12 years of experience and a large network of English speaking professionals.</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" src={topComm} alt="Generic placeholder image" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 push-md-5">
              <h2 className="featurette-heading">SCALEABLE <span className="text-muted">See for yourself.</span></h2>
              <p className="lead">Start nimble and grow yourself and your team as your school does.</p>
            </div>
            <div className="col-md-5 pull-md-7">
              <img className="featurette-image img-fluid mx-auto" src={scalable} alt="Generic placeholder image" />
            </div>
          </div>
           <hr className="featurette-divider" />
           <div className="row featurette">
            <div className="col-md-7 push-md-5">
              <h2 className="featurette-heading">OUR CULTURE <span className="text-muted">Explore your extra activities</span></h2>
              <p className="lead">Our culture presenters share their knowledge of how the artefacts are used, the production of these artefacts and their significance.</p>
            </div>
            <div className="col-md-5 pull-md-7">
              <img className="featurette-image img-fluid mx-auto" src={cultureImg} alt="Generic placeholder image" />
            </div>
          </div>
          <hr className="featurette-divider" />
        </div>
        <CommonFooter />
      </div >
    )
  }
}
export default About;
