import {Outlet} from "react-router-dom";
import Menu from "./menu";

export default function Layout() {
  return (
    <div className="container">
      <header></header>
      <Menu />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
