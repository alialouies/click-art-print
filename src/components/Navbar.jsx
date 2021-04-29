import "../css/Navbar.css";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul>
            <li>
              <Link to="/" className="navbar-logo">Home</Link>
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
      <footer className="footer">
       <ul>
              <Link to="/footer1">Our Service</Link>
            </ul>
      </footer>
    </>
  );
}

export default Navbar;