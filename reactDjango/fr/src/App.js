import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      <Nav />
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={Main} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
