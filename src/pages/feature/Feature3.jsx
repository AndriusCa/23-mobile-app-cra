import { Link } from "react-router-dom";
import logo from "../../assets/img/marketFresh.png";

export function Feature3() {
  return (
    <div>
      <Link to="/register">Skip</Link>
      <img src={logo} alt="freshProduce" />
      <h1>Feature3</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <div>
        <Link to="/register">0</Link>
        <Link to="/register">0</Link>
        <Link to="/register">0</Link>
      </div>
      <Link to="/register">Register</Link>
    </div>
  )
};
