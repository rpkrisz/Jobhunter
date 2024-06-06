import {Outlet} from "react-router-dom";
import Menu from "./menu";

export default function Layout() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main className="flex flex-row justify-center w-full h-[90dvh] p-6 ">
        <Outlet />
      </main>
      <footer className="flex justify-center h-auto">
        <p>
          © 2024 Réthey-Prikkel Kriszsztián - Elte IK Progremtervező informatika
          - Kliensoldali webprogramozás beadandó
        </p>
      </footer>
    </>
  );
}
