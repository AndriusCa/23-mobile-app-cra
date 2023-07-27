import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import logo from "../../assets/img/veegoo.png";
import style from "../main/Main.module.css";

export function Main() {
  return (
    <div className={style.main}>
      <img className={style.mainLogo} src={logo} alt="shopLogo" />
      <h1>Shopping app</h1>
      <Link className={style.link} to="/feature1">
        <Button text="Get started" />
      </Link>
    </div>
  )
};