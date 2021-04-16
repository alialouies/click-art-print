import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Aliki from "./Aliki";
import PrintArt from "./PrintArt";
import Gege from "./Gege";
import Angel from "./Pictures";
import "../css/Button.css"

function Categories() {
  // In here we do our API query to test things out,
  // we display only 10 items, and appear on clicking of category button
  let {path, url} = useRouteMatch();

  return (
    <>
    <div className="intro">
      <h1>Our hottest five Art Collections, chosen by us for you.</h1>
      <h2>click a button and find your favs!</h2>
    </div>
    
      <Router>
          <div className="button-row">
                  <button>
                      <Link to={`${url}/Aliki`}>Aliki</Link>
                  </button>
                  <button>
                      <Link to={`${url}/pictures`}>Pictures</Link>
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
          <Route path={`${url}/pictures`} component={Angel}></Route>
          <Route path={`${url}/Gege`} component={Gege}></Route>
          <Route path={`${url}/printart`} component={PrintArt}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default Categories;
