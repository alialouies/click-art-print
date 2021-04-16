import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Photography from "./Photography";
import Maya from "./Maya";
import Gege from "./Gege";
import Angel from "./Angel";

function Categories() {
  // In here we do our API query to test things out,
  // we display only 10 items, and appear on clicking of category button
  let {url} = useRouteMatch();

  return (
    <>
      <Router>
          <div>
                  <button>
                      <Link to={`${url}/Photography`}>Photography</Link>
                  </button>
                  <button>
                      <Link to={`${url}/Angel`}>Angel</Link>
                  </button>
                  <button>
                      <Link to={`${url}/Gege`}>Gege</Link>
                  </button>
                  <button>
                    <Link to={`${url}/Maya`}>Maya</Link>
                  </button>
          </div>
        <Switch>
          <Route path={`${url}/Photography`} component={Photography}></Route>
          <Route path={`${url}/Angel`} component={Angel}></Route>
          <Route path={`${url}/Gege`} component={Gege}></Route>
          <Route path={`${url}/Maya`} component={Maya}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default Categories;