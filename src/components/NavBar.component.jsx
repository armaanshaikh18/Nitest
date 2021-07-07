import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="navbar navbar-expand-sm bg-dark navbar-dark">
        <LinkContainer className="navbar-brand" to="/">
          <Navbar.Brand>React</Navbar.Brand>
        </LinkContainer>
        <div className="container">
          <Nav className="mr-auto">
            <LinkContainer
              className="nav-item"
              exact
              to="/"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer
              className="nav-item"
              to="/tasks"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <Nav.Link>Tasks</Nav.Link>
            </LinkContainer>
            <LinkContainer
              className="nav-item"
              to="/user"
              style={{ color: "white", fontWeight: "bold" }}
            >
              <Nav.Link>User</Nav.Link>
            </LinkContainer>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
