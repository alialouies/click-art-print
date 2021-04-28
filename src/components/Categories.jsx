import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Photography from "./Photography";
import PrintArt from "./PrintArt";
import KeySearch from "./KeySearch";
import Pictures from "./Pictures";
import MetSearch from "./metsearch"
import "../css/Button.css"

function Categories(props) {
  const {addCart, price} = props;
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
                  <button>
                    <Link to={`${url}/metsearch`}>MET search</Link>
                  </button>
          </div>
        <Switch>

          <Route path={`${url}/photography`}><Photography addCart={addCart} price={price}/></Route>
          <Route path={`${url}/pictures`}><Pictures addCart={addCart} price={price}/></Route>
          <Route path={`${url}/keysearch`} ><KeySearch addCart={addCart} price={price}/></Route>
          <Route path={`${url}/metsearch`} ><MetSearch addCart={addCart} price={price}/></Route>
          <Route path={`${url}/printart`}><PrintArt addCart={addCart} price={price}/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default Categories;