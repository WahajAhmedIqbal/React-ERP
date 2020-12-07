import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { Logincontainer, PageNotFoundContainer } from "../containers";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Logincontainer} />
      <Route exact path="/404" component={PageNotFoundContainer} />
      <Route exact path="/*" component={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default index;
