import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import style from "../../pages/register/Form.module.css";

export function Login() {
  return (
    <div className={style.formBase}>
      <h1>Log in to your account</h1>
      <form>
        <div className={style.row}>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder="Email" />
        </div>
        <div className={style.row}>
          <label htmlFor="password">Password</label>
          <input id="password" type="text" placeholder="Password" />
        </div>
        <div className={style.row}>
          <Link to="/loggedIn">
            <Button text="Login" />
          </Link>
          <p>or</p>
          <Link to="/register">
            <Button text="Register" />
          </Link>
        </div>
      </form>
    </div>
  )
};