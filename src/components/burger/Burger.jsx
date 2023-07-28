import React from 'react';
import style from "../../components/burger/Burger.module.css";

export function Burger() {
    return (
        <button className={style.burger}>
            <div className={style.line}></div>
            <div className={style.line}></div>
            <div className={style.line}></div>
        </button>
    );
}