import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";


export function AccLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}