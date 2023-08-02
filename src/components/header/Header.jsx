import logo from "../../assets/img/veegoo.png";
import style from "../../components/header/Header.module.css";
import { Burger } from "../burger/Burger";

export function Header() {
  return (
    <div className={style.header}>
      <img className={style.headerImg} src={logo} alt="shopLogo" />
      <Burger />
    </div>
  );
}
