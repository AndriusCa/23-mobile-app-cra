import { Link } from "react-router-dom";
import style from "../register/Form.module.css";

export function Register() {
  return (
    <div>
      <h1>Create your account</h1>
      <form className={style.form}>
        <div className={style.row}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Name..." />
        </div>
        <div className={style.row}>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder="Email..." />
        </div>
        <div className={style.row}>
          <label htmlFor="password">Password</label>
          <input id="password" type="text" placeholder="Password..." />
        </div>
        <div className={style.row}>
          <Link to="/">Register</Link>
          <p>or</p>
          <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  )
};