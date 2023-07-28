import { useNavigate } from "react-router-dom";
import { BiCircle } from "react-icons/bi"
import style from "../../pages/feature/Feature.module.css"

export function NavDots() {
  const navigate = useNavigate();

  return (
    <div className={style.NavDots}>
      <BiCircle size="1.5rem" onClick={() => navigate("/feature1")} />
      <BiCircle size="1.5rem" onClick={() => navigate("/feature2")} />
      <BiCircle size="1.5rem" onClick={() => navigate("/feature3")} />
    </div>
  )
};
