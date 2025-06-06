import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">contact us</Link></li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;