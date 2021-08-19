import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Base from "./Components/Base";

function App() {
  return (
    <Router>
      <Link to="/homepage">Go_to_the_homepage</Link>
      <br></br>
      <Link to="/">Go_to_the_main_page</Link>

      <Switch>
        <Route path="/homepage">
          <Homepage></Homepage>
        </Route>
        <Route exact path="/">
          <Base></Base>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
