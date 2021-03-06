import "../css/Navbar.css";
import { Link } from "react-router-dom";
import img from "../img/logo-2.png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul>
           <div id="logo">
              <li>
                <Link to="/" className="navbar-logo">
                  <img src={img} width={120} height={120} />
                </Link>
              </li>
           </div>

            <div id="list-wrapper">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
     
    </>
  );
}

export default Navbar;
