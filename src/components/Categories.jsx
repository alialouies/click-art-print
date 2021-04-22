import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Photography from "./Photography";
import PrintArt from "./PrintArt";
import KeySearch from "./KeySearch";
import Pictures from "./Pictures";
import "../css/Button.css"

function Categories(props) {
  const {addCart} = props;
  // In here we do our API query to test things out,
  // we display only 10 items, and appear on clicking of category button
  let {url} = useRouteMatch();

  return (
    <>
    <div className="intro">
      <h1>Our hottest four Art Collections, chosen by us for you.</h1>
      <h2>click a button and find your favs or search by keyword.</h2>
    </div>
    
      <Router>
          <div className="button-row">
                   <button>
                      <Link to={`${url}/keysearch`}>Search</Link>
                  </button>
                  <button>
                      <Link to={`${url}/photography`}>Photography</Link>
                  </button>
                  <button>
                      <Link to={`${url}/pictures`}>Pictures</Link>
                  </button>
               
                  <button>
                    <Link to={`${url}/printart`}>Print Art</Link>
                  </button>
          </div>
        <Switch>

          <Route path={`${url}/photography`}><Photography addCart={addCart}/></Route>
          <Route path={`${url}/pictures`}><Pictures addCart={addCart}/></Route>
          <Route path={`${url}/keysearch`} component={KeySearch}></Route>
          <Route path={`${url}/printart`}><PrintArt addCart={addCart}/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default Categories;