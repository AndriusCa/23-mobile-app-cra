import { Link } from "react-router-dom";
import logo from "../../assets/img/organic.png";

export function Feature1() {
  return (
    <div>
      <Link to="/register">
        Skip
      </Link>
      <img src={logo} alt="organicVeg"/>
      <h1>Feature1</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <div>
        <Link to="/register">0</Link>
        <Link to="/register">0</Link>
        <Link to="/register">0</Link>
      </div>
      <Link to="/feature2" >
        Continue
      </Link>
    </div>
  )
};
