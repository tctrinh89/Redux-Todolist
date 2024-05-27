import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div
      style={{
        margin: "auto",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
