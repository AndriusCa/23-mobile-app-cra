import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { NavDots } from "../../components/navDots/NavDots";
import { Skip } from "../../components/skip/Skip";
import logo from "../../assets/img/veggie.png";
import style from "../feature/Feature.module.css";

export function Feature2() {
  return (
    <div className={style.feature}>
      <Skip />
      <img className={style.featureImg} src={logo} alt="organicVeg" />
      <h1>Feature2</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <div>
        <NavDots />
      </div>
      <Link to="/feature3">
        <Button text="Continue" />
      </Link>
    </div>
  )
};
