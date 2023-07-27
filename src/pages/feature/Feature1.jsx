import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import logo from "../../assets/img/organic.png";
import style from "../feature/Feature.module.css";

export function Feature1() {
  return (
    <div className={style.feature}>
      <Link to="/register">Skip</Link>
      <img className={style.featureImg} src={logo} alt="organicVeg"/>
      <h1>Feature1</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <div>
        <Link to="/register">0</Link>
        <Link to="/register">0</Link>
        <Link to="/register">0</Link>
      </div>
      <Link to="/feature2">
        <Button text="Continue"/>
      </Link>
    </div>
  )
};
