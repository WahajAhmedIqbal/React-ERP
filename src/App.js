import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routers";

import "./App.scss";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <h1>hello world</h1> */}
        <Router />
      </div>
    </BrowserRouter>
  );
};

export default App;
