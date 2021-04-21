import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch> 
          <Route path='/Home' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
