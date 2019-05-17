import React, { Component } from 'react';
import Login from "./Login.js"
import "../static/css/style.css"
import CommonFooter from './CommonFooter.js';
import CommonHeader from './CommonHeader.js';


class School1Home extends Component {
    constructor() {
        super();
        this.state = {
            form: {
                username: "",
                password: "",
                // url: "schooltwo"
            }
        }
    }
    render() {
        console.log("-==================school2=+>>props", this.props)

        return (
            <div>
               <CommonHeader
                    pathname={this.props.urlParams}
                />
                <section className="ftco-services ftco-no-pb">
                    <div className="container-wrap">
                        <Login form={this.state.form}
                        />
                    </div>
                </section>
                <CommonFooter/>
            </div>
        )
    }
}
export default School1Home;
