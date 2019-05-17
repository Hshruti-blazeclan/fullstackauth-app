import React from "react";
import { withRouter } from "react-router-dom";

const Back = ({ history }) =>
  history.length > 1 && (
    <button className="btn nav-link pl-0" onClick={() => history.goBack}>Logout</button>
  );

export default withRouter(Back);
