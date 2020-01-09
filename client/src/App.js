import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Zomato from "./containers/zomato";
// import Review from "./containers/review";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Zomato} />
        {/* <Route path="/review" component={Review} /> */}
      </Switch>
    </div>
  );
}

export default App;
