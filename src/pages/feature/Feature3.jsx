import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import logo from "../../assets/img/marketFresh.png";
import style from "../feature/Feature.module.css";

export function Feature3() {
  return (
    <div className={style.feature}>
      <Link to="/register">Skip</Link>
      <img className={style.featureImg} src={logo} alt="freshProduce"/>
      <h1>Feature3</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <div>
        <Link to="/register">0</Link>
        <Link to="/register">0</Link>
        <Link to="/register">0</Link>
      </div>
      <Link to="/register">
        <Button text="Register" />
      </Link>
    </div>
  )
};
