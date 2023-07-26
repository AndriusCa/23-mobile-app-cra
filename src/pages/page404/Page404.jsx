import { Link } from "react-router-dom";
import logo from "../../assets/img/oops.png";

export function Page404() {
  return (
    <div>
      <img src={logo} alt="oopsImg" />
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/" >
        Go home
      </Link>
    </div>
  )
};
