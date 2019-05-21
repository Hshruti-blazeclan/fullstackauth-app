import React, { Component } from 'react';
import Login from "./Login.js"
import "../static/css/style.css"
import CommonFooter from './CommonFooter.js';
import CommonHeader from './CommonHeader.js';


class School1Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                userName: "",
                password: "",
                hostName: this.props.urlParams ? this.props.urlParams : ""
            }
        }
    }
    render() {
        return (
            <div>
                <CommonHeader
                    pathname={this.props.urlParams}
                />
                <section className="ftco-services ftco-no-pb">
                    <div className="container-wrap">
                        <Login form={this.state.form}
                            pathname={this.props.urlParams}
                        />
                    </div>
                </section>
                <CommonFooter />
            </div>
        )
    }
}
export default School1Home;
