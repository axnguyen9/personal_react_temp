import Reach from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomeScreen } from "../screens/homeScreen";
import { AboutScreen } from "../screens/aboutScreen";
import "../App.js";

function Routes(props) {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <nav>
            <NavBar></NavBar>
          </nav>
          <Switch>
            <Route exact path={"/"} component={HomeScreen} />
            <Route exact path={"/about"} component={AboutScreen} />
          </Switch>
        </Router>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Routes;