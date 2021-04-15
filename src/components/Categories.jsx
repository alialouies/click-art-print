import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Aliki from "./Aliki";
import PrintArt from "./PrintArt";
import Gege from "./Gege";
import Angel from "./Angel";
import "../css/Button.css"

function Categories() {
  // In here we do our API query to test things out,
  // we display only 10 items, and appear on clicking of category button
  let {path, url} = useRouteMatch();

  return (
    <>
    
      <Router>
          <div className="button-row">
                  <button>
                      <Link to={`${url}/Aliki`}>Aliki</Link>
                  </button>
                  <button>
                      <Link to={`${url}/Angel`}>Angel</Link>
                  </button>
                  <button>
                      <Link to={`${url}/Gege`}>Gege</Link>
                  </button>
                  <button>
                    <Link to={`${url}/printart`}>Print Art</Link>
                  </button>
          </div>
        <Switch>
          <Route path={`${url}/Aliki`} component={Aliki}></Route>
          <Route path={`${url}/Angel`} component={Angel}></Route>
          <Route path={`${url}/Gege`} component={Gege}></Route>
          <Route path={`${url}/printart`} component={PrintArt}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default Categories;
