import React, { Component } from 'react'

class CommonHeader extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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
                                            {this.props.pathname.includes("schoolone") ?
                                                <span className="text">school1_aus@email.com</span>
                                                :
                                                <span className="text">school2_aus@email.com</span>
                                            }
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

                    <div className="nav-down-container d-flex align-items-center">
                        {this.props.pathname == "/schoolone/about" || this.props.pathname == "/schooltwo/about" ?
                            <a className="navbar-brand" href="/schoole-one/about">About Us<br></br>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                            </a>
                            :
                            <a className="navbar-brand">Welcome to {`${/[^/]*$/.exec(this.props.pathname)}`.toUpperCase()}
                            </a>

                        }
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="oi oi-menu" /> Menu
                        </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            {this.props.pathname == "schoolone" || this.props.pathname == "schooltwo" ||
                                this.props.pathname == "/schoolone/about" || this.props.pathname == "/schooltwo/about" || this.props.pathname == "/schoolone/courses" || this.props.pathname == "/schooltwo/courses" ?
                                <ul className="navbar-nav ml-auto">
                                    <li className={this.props.pathname == "schoolone" || this.props.pathname == "schooltwo" ? "nav-item active" : "nav-item"}><a href={this.props.pathname.includes("schoolone") ? "/schoolone" : "/schooltwo"} className="nav-link pl-0">Home</a></li>

                                    <li className={this.props.pathname == "/schoolone/about" || this.props.pathname == "/schooltwo/about" ? "nav-item active" : "nav-item"}><a href={this.props.pathname.includes("schoolone") || this.props.pathname == "/schoolone/about" ? "/schoolone/about" : "/schooltwo/about"}
                                        className="nav-link">About</a></li>
                                </ul>
                                :
                                <ul className="navbar-nav ml-auto">
                                    <li className={this.props.pathname == "/schoolone/dashboard" || this.props.pathname == "/schooltwo/dashboard" ? "nav-item active" : "nav-item"}><a href={this.props.pathname.includes("schoolone") || this.props.pathname == "/schoolone/dashboard" ? "/schoolone/dashboard" : "/schooltwo/dashboard"} className="nav-link">Dashboard</a></li>

                                    <li className={this.props.pathname == "/schoolone/profile" || this.props.pathname == "/schooltwo/profile" ? "nav-item active" : "nav-item"}><a href={this.props.pathname.includes("schoolone") || this.props.pathname == "/schoolone/profile" ? "/schoolone/profile" : "/schooltwo/profile"} className="nav-link">Profile</a></li>

                                    <li className="nav-item"><a href={this.props.pathname.includes("schoolone") ? "/schoolone" : "/schooltwo"} className="nav-link">Logout</a></li>
                                </ul>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default CommonHeader