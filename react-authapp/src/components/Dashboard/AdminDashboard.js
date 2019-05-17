import React, { Component } from 'react';
import "../../static/css/style.css"
import Banner1 from '../../static/images/bg_1.jpg'

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
    }

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
            <div className="navbar navbar-fixed-top navbar-default">
              <div className="container">
                <div className="row">
                    <h3>Admin Dashboard</h3>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
export default AdminDashboard;
