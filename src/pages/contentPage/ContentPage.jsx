import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import style from "../../pages/contentPage/ContentPage.module.css";
import { useNavigate } from "react-router-dom";

export function ContentPage() {
  const navigate = useNavigate()
  
   function handleSignOut() {
     window.localStorage.removeItem("isLoggedIn")
     navigate("/")
   }

  return (
    <>
      <div className={style.content}>
        <div>MAIN PAGE</div>
        <Link to="/" onClick={handleSignOut}>
          <Button text="Sign Out" />
        </Link>
      </div>
    </>
  )
};
