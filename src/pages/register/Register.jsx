import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import style from "../register/Form.module.css";

export function Register() {
  return (
    <div className={style.formBase}>
      <h1>Create your account</h1>
      <form >
        <div className={style.row}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Name" />
        </div>
        <div className={style.row}>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder="Email" />
        </div>
        <div className={style.row}>
          <label htmlFor="password">Password</label>
          <input id="password" type="text" placeholder="Password" />
        </div>
        <div className={style.row}>
          <Link to="/">
            <Button text="Register" />
          </Link>
          <p>or</p>
          <Link to="/login">
            <Button text="Login" />
          </Link>
        </div>
      </form>
    </div>
  )
};