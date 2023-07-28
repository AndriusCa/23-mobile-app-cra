import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import style from "../../pages/contentPage/ContentPage.module.css";
import { Burger } from "../../components/burger/Burger";

export function ContentPage() {
  return (
    <div className={style.content}>
      <Burger />
      <div>HEADER</div>
      <div>MAIN CONTENT</div>
      <Link to="/">
        <Button text="Back" />
      </Link>
    </div>
  )
};
