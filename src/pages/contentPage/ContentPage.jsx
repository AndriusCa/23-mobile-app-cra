import { Link } from "react-router-dom"
import { Button } from "../../components/button/Button"
import style from "../../pages/contentPage/ContentPage.module.css"

export function ContentPage() {
  return (
    <div className={style.content}>
      <div>HEADER</div>
      <div>MAIN CONTENT</div>
      <Link to="/">
        <Button text="Back" />
      </Link>
    </div>
  )
};
