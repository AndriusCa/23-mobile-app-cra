import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../components/button/Button";
import style from "../register/Form.module.css";
import { useState, useEffect } from "react";

export function Register() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);
  const [isChecked, setChecked] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  function doesUserExist(userEmail) {
    return users.some(user => user.email === userEmail);
  }

  function updateCheckbox() {
      setChecked(!isChecked)
  }

  function updateName(e) {
      setName(e.target.value);
  }

  function updateEmail(e) {
      setEmail(e.target.value);
  }

  function updatePassword(e) {
      setPassword(e.target.value);
  }

  function registerUser(e) {
      const minNameLength = 2;
      const maxNameLength = 20;
      const minEmailLength = 6;
      const maxEmailLength = 30;
      const minPasswordLength = 8;
      const maxPasswordLength = 30;
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      e.preventDefault();

    const newErrors = [];

    if (name.length < minNameLength || name.length > maxNameLength) {
        newErrors.push('Not suitable username');
    }

    if (email.length < minEmailLength || email.length > maxEmailLength) {
        newErrors.push('Not suitable email');
    } else if (!emailRegex.test(email)) {
        newErrors.push('Invalid email format');
    }

    if (doesUserExist(email)) {
      newErrors.push('User already exists');
    }

    if (password.length < minPasswordLength || password.length > maxPasswordLength) {
        newErrors.push('Not suitable password');
    } else if (!passwordRegex.test(password)) {
        newErrors.push('Password must contain at least one letter and one number');
    }

     if (!isChecked) {
       newErrors.push("You must accept the terms and conditions");
     }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      setUsers((prev) => [...prev, { name, email, password }]);
      setIsRegistered(true);
      setErrors([]);
    }
  }

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))

    if (isRegistered) {
      setTimeout(() => {
        navigate("/login")
      }, 2000)
    }
  }, [users, isRegistered, navigate]);

  

  return (
    <div className={style.formBase}>
      <h1>Create your account</h1>
      <div className={`${style.error} ${errors.length ? style.show : ""}`}>
        {errors.map((err, index) => (
          <p key={index}>{err}</p>
        ))}
      </div>
      {isRegistered && (
        <div className={style.success}>Registration successful!</div>
      )}
      <form onSubmit={registerUser}>
        <div className={style.row}>
          <label htmlFor="name">Name</label>
          <input onChange={updateName} value={name} id="name" type="text" placeholder="Name"/>
        </div>
        <div className={style.row}>
          <label htmlFor="email">Email</label>
          <input onChange={updateEmail} value={email} id="email" type="text" placeholder="Email"  autoComplete="email"/>
        </div>
        <div className={style.row}>
          <label htmlFor="password">Password</label>
          <input onChange={updatePassword} value={password} id="password" type="password" placeholder="Password"/>
        </div>
        <div className={style.row}>
          <label htmlFor="terms">Accept<Link to="/termandcond"> Terms and Conditions</Link>
          </label>
          <input onChange={updateCheckbox} checked={isChecked} id="terms" type="checkbox"/>
        </div>
        <div className={style.row}>
          <Button type="submit" text="Register" />
          <p>or</p>
          <Link to="/login">
            <Button text="Login" />
          </Link>
        </div>
      </form>
    </div>
  )
};