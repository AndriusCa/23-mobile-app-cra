import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import logo from "../../assets/img/oops.png";
import style from "../page404/Page404.module.css";

export function Page404() {
  return (
    <div className={style.page404}>
      <img src={logo} alt="oopsImg" />
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/" >
        <Button text="Go home" />
      </Link>
    </div>
  )
};
