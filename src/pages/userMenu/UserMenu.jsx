import React from "react";
import { BiCircle } from "react-icons/bi"
import style from "../../pages/userMenu/UserMenu.module.css";
import { Link } from "react-router-dom";



const userMenuData1 = [
  {
    id: 1,
    title: "Shopping carts",
    link: "/shoppingcarts",
    icon: <BiCircle />,
  },
  {
    id: 2,
    title: "Product catalog",
    link: "/productcatalog",
    icon: <BiCircle />,
  },
  {
    id: 3,
    title: "Shops",
    link: "/shops",
    icon: <BiCircle />,
  },
]

const userMenuData2 = [
  {
    id: 1,
    title: "New shopping cart",
    link: "/shops",
    icon: <BiCircle />,
  },
  {
    id: 2,
    title: "New product",
    link: "/shops",
    icon: <BiCircle />,
  },
  {
    id: 3,
    title: "New shop",
    link: "/shops",
    icon: <BiCircle />,
  },
]

const userMenuData3 = [
  {
    id: 1,
    title: " Account",
    link: "/account",
    icon: <BiCircle />,
  },
  {
    id: 2,
    title: "Settings",
    link: "/settings",
    icon: <BiCircle />,
  },
  {
    id: 3, //id ir icon po apacia
    title: "Sign out", //title
    link: "/signout", //url
    icon: <BiCircle />,
  },
]

export function UserMenu({ active }) {
  return (
    <div className={`${style.menu} ${active ? style.active : ""}`}>
      {userMenuData1.map((item) => (
        <Link className={style.link} to={item.link} key={item.id}>
          {item.icon} {item.title}
        </Link>
      ))}
      <hr />
      {userMenuData2.map((item) => (
        <Link className={style.link} to={item.link} key={item.id}>
          {item.icon}
          {item.title}
        </Link>
      ))}
      <hr />
      {userMenuData3.map((item) => (
        <Link className={style.link} to={item.link} key={item.id}>
          {item.icon}
          {item.title}
        </Link>
      ))}
    </div>
  )
}