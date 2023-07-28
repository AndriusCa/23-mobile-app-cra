import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import logo from "../../assets/img/veegoo.png";
import style from "../main/Main.module.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function Main() {

let navigate = useNavigate()

const checkUserVisit = useCallback(
  function (event) {
    event.preventDefault()

    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (isLoggedIn === "true") {
      navigate("/contentpage")
    } else {
      const visited = localStorage.getItem("visited")
      if (visited !== null) {
        navigate("/login")
      } else {
        localStorage.setItem("visited", "true")
        navigate("/feature1")
      }
    }
  }, [navigate]);

  return (
    <div className={style.main}>
      <img className={style.mainLogo} src={logo} alt="shopLogo" />
      <h1>Shopping app</h1>
      <Link className={style.link} to="/feature1" onClick={checkUserVisit}>
        <Button text="Get started" />
      </Link>
    </div>
  )
};