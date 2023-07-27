import { Link } from "react-router-dom";
import style from "../../pages/feature/Feature.module.css";

export function Skip() {
  return (
    <div className={style.skip}>
      <Link to="/register">Skip</Link>
    </div>
  )
};
