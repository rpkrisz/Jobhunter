import {Outlet} from "react-router-dom";
import Menu from "./menu";

export default function Layout() {
  return (
    <>
      <header className="header ">
        <Menu />
      </header>
      <main className="flex flex-row justify-center w-full h-[87dvh] p-6 ">
        <Outlet />
      </main>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>
            Copyright © 2024 Réthey-Prikkel Kriszsztián - Elte IK Progremtervező
            informatika - Kliensoldali webprogramozás beadandó
          </p>
        </aside>
      </footer>
    </>
  );
}
