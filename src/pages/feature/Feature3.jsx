import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { NavDots } from "../../components/navDots/NavDots";
import { Skip } from "../../components/skip/Skip";
import logo from "../../assets/img/marketFresh.png";
import style from "../feature/Feature.module.css";

export function Feature3() {
  return (
    <div className={style.feature}>
      <Skip />
      <img className={style.featureImg} src={logo} alt="freshProduce" />
      <h1>Feature3</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <div>
        <NavDots />
      </div>
      <Link to="/register">
        <Button text="Register" />
      </Link>
    </div>
  )
};
