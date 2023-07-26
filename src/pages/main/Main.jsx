import { Link } from "react-router-dom";
import logo from "../../assets/img/veegoo.png";

export function Main() {
  return (
    <div>
      <img src={logo} alt="shopLogo" />
      <h1>Shopping app</h1>
      <Link  to="/feature1">
        Get started
      </Link>
    </div>
  )
};