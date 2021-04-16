import "../css/Navbar.css";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul>
            <li>
              <Link to="/Home" className="navbar-logo">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;