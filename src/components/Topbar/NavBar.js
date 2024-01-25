import React from "react";

import { Link } from "react-router-dom";
import "./NavBar.css";
import { Nav, Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant=""
      style={{ height: "80px", position: "fixed", width: "100%", zIndex: "3" }}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ width: "100%", height: "auto", backgroundColor: "dimgray" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            style={{ width: "100%" }}
            className="d-flex align-items-center justify-content-between"
          >
            <Link to={"/"} className="logo">
              Eslam Studio
            </Link>

            <div className="d-flex align-items-center justify-content-between gap-2">
              <Link to={"/"} className="logo">
                Home
              </Link>
              <Link to={"/about"} className="logo">
                About
              </Link>
              <Link to={"/services"} className="logo">
                Serices
              </Link>
              <Link to={"/blog"} className="logo">
                Blog
              </Link>
              <Link to={"/works"} className="logo">
                Works
              </Link>
            </div>

            <Link to={"/login"} className="btn btn-warning sign logo">
              Log in
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
