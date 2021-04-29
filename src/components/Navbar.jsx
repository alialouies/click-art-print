import "../css/Navbar.css";
import {Link} from 'react-router-dom';
import img from "../img/logo-2.png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul>
          <li>
              <Link to="/" className="navbar-logo"><img src={img} width={120} height={120}/></Link>
            </li>
           
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
         
            {/* <li>
              <Link to="/checkout">Checkout</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;