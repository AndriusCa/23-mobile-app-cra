import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import style from "../../pages/register/Form.module.css";
import { useState } from "react";

export function Login() {
  
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const navigate = useNavigate();

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    const users = window.localStorage.getItem("users")
    if (users) {
      const usersArray = JSON.parse(users)
      const user = usersArray.find(
        (user) => user.email === email && user.password === password
      )
      if (user) {
        resolve()
      } else {
        reject()
      }
    } else {
      reject()
    }
  })
};

  const handleLogin = async (event) => {
    event.preventDefault()
    if (!email || !password) {
      setError("Please fill in all fields")
    } else {
      try {
        await login(email, password)
        window.localStorage.setItem("isLoggedIn", "true")
        navigate("/loggedIn")
      } catch {
        setError("Invalid credentials")
      }
    }
  };

   return (
    <div className={style.formBase}>
      <h1>Log in to your account</h1>
      <form onSubmit={handleLogin}>
        <div className={style.row}>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={style.row}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p>{error}</p>}
        <div className={style.row}>
          <Button type="submit" text="Login" />
          <p>or</p>
          <Link to="/register">
            <Button text="Register" />
          </Link>
        </div>
      </form>
    </div>
  )
};