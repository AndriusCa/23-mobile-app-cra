import React from "react";
import style from "../button/Button.module.css"

export function Button({ text }) {
  return (
    <div className={style.buttonGroup}>
      <a className={style.button} href="/">
        {text}
      </a>
    </div>
  )
};
