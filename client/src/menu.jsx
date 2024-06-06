import {Link} from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export default function Menu() {
  return (
    <>
      <Navbar shouldHideOnScroll>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">JobHunter</p>
          </NavbarBrand>
          <NavbarItem>
            <Link className="btn btn-ghost text-xl" to="/registration">
              Registration
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="btn btn-ghost text-xl" to="/login">
              LogIn
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="btn btn-ghost text-xl" to="/logout">
              LogOut
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="btn btn-ghost text-xl" to="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="btn btn-ghost text-xl" to="/profile">
              Profile
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="btn btn-ghost text-xl" to="/jobs">
              Jobs
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
