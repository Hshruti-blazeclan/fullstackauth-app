import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import DashboardMain from "./components/Dashboard/DashboardMain"
import PageNotFound from "./components/PageNotFound"
import Courses from "./components/Courses"
import School1Home from "./components/School1Home"
import School2Home from "./components/School2Home"
import Profile from './components/Profile';
import About from './components/About';


class App extends Component {
  render(){
    const urlParams = window.location.href.split( '/' )[3]
    // console.log("=>urlParams",/[^/]*$/.exec(window.location.href))
    console.log("urlParamsurlParamsurlParamsurlParams", urlParams)
    return(
      <BrowserRouter>
      {/* <Router basename={/[^/]*$/.exec(window.location.href)[0]}></Router> */}
      <div>
        <Switch>
          {/* <Redirect exact from="/" to="/schoolone" component={School1Home} />         */}
          {urlParams === "schoolone" ?
          <Route path="/schoolone" render={(props) => <School1Home {...props} urlParams={urlParams}/>} exact/> 
          : 
          <Route path="/schooltwo" render={(props) => <School2Home {...props} urlParams={urlParams}/>} exact/>}

            {/* <Route path="/schoolone" component={School1Home} exact/>
            <Route path="/schooltwo" component={School2Home} exact/> */}
            <Route exact path={`/${urlParams}/dashboard`} component={DashboardMain} />
            <Route exact path={`/${urlParams}/profile`} component={Profile} />
            <Route exact path={`/${urlParams}/about`} component={About} />
            <Route exact path={`/${urlParams}/courses`} component={Courses} />
            <Route component={PageNotFound}/>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
export default App;
