import { Link } from "react-router-dom";
import { BiCircle } from "react-icons/bi"
import style from "../../pages/feature/Feature.module.css"

export function NavDots() {
  return (
    <div className={style.NavDots}>
      <Link to="/feature1">
        <BiCircle size="1.5rem" />
      </Link>
      <Link to="/feature2">
        <BiCircle size="1.5rem" />
      </Link>
      <Link to="/feature3">
        <BiCircle size="1.5rem" />
      </Link>
    </div>
  )
};
