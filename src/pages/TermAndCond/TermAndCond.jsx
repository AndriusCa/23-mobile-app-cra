import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import style from "../../pages/TermAndCond/TermAndCond.module.css";

export function TermAndCond() {
  return (
    <div className={style.terms}>
      <h1>Terms of Service</h1>
      <h2>First topic</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo consequatur perspiciatis quis quas labore impedit voluptate nobis rerum doloribus itaque debitis, harum sit.</p>
      <h2>Second topic</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit totam atque minima numquam amet? Sapiente natus dicta ducimus similique alias blanditiis eveniet itaque!</p>
      <Link to="/register">
        <Button text="Back" />
      </Link>
    </div>
  )
};
