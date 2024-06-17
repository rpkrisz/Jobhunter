import {Outlet} from "react-router-dom";
import Menu from "./menu";

export default function Layout() {
  return (
    <>
      <Menu />
      <main className="container flex flex-col justify-center content-center flex-wrap px-6 mx-auto min-h-[87svh] overflow-auto w-9/12 ">
        <Outlet />
      </main>
      <footer className="footer footer-center p-4 bg-base-100 text-base-content">
        <aside>
          <p>
            Copyright © 2024 Réthey-Prikkel Kriszsztián - Elte IK Progremtervező informatika -
            Kliensoldali webprogramozás beadandó
          </p>
        </aside>
      </footer>
    </>
  );
}
