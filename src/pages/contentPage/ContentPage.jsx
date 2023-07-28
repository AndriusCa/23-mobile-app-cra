import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import style from "../../pages/contentPage/ContentPage.module.css";
import { Burger } from "../../components/burger/Burger";
import { useNavigate } from "react-router-dom";

export function ContentPage() {
  const navigate = useNavigate()
  
   function handleSignOut() {
     window.localStorage.removeItem("isLoggedIn")
     navigate("/")
   }

  return (
    <div className={style.content}>
      <Burger />
      <div>HEADER</div>
      <div>MAIN CONTENT</div>
      <Link to="/" onClick={handleSignOut}>
        <Button text="Sign Out" />
      </Link>
    </div>
  )
};
