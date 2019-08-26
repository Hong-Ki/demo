import React from "react";
import "./App.css";

import Floating from "./components/Floating/Floating";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import { Add_1, Add_2 } from "./pages/Add";

const App = () => {
  return (
    <BrowserRouter>
      <Floating menus={["HOME", "TEST1", "TEST2"]} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/TEST1" component={Add_1} />
        <Route exact path="/TEST2" component={Add_2} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
