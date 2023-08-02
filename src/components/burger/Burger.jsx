import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { UserMenu } from "../../pages/userMenu/UserMenu";
import style from "../../components/burger/Burger.module.css";

export function Burger() {

    const [burgerActive, setBurgerActive] = useState(false);

    const handleBurger = () => {
        setBurgerActive(!burgerActive);
    }

    return (
        <button className={style.burger} onClick={handleBurger}>
            {burgerActive ? <RxCross2 /> : <GiHamburgerMenu />}
            <UserMenu active={burgerActive} />
        </button>
    );
}