import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import ReactSwitch from "react-switch";
import logo_light from "../../../assets/logo_light.svg";
import logo_dark from "../../../assets/logo_dark.svg";
import { themeContextMode } from "../../../context/ThemeContext";
import { Link } from "react-router-dom";
import { NavItem } from "react-bootstrap";

const NavMenu = () => {
  const { handleClick, theme } = useContext(themeContextMode);
  return (
    <>
      <Navbar expand="lg" className="mb-3">
        <Container fluid className="navbar_container">
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <NavItem>
            <Link to="/home">
              <button className="nav_user_button">
                <img
                  src={theme === "dark" ? logo_dark : logo_light}
                  alt="logo_home"
                />
              </button>
            </Link>
          </NavItem>
          <div className="right_icons">
              <Link to="/user_profile">
                <button className="nav_user_button">
                  <i class="bx bx-user-circle"></i>
                </button>
                </Link>
          </div>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <i class="bx bx-user-circle user_offcanvas"></i>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 pe-3">
                <NavItem>
                  <Link to="/home">
                    <i class="bx bx-home-alt"></i>
                    <span className="nav_span">Home</span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/movies">
                    <i class="bx bx-movie"></i>
                    <span className="nav_span">Movies</span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/series">
                    <i class="bx bx-tv"></i>
                    <span className="nav_span">Series</span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/login">
                    <i class="bx bx-log-in"></i>
                    <span className="nav_span">Login</span>
                  </Link>
                </NavItem>
                {/*                 
                <NavItem>
                  <Link to="/register">
                    <i class="bx bx-edit"></i>
                    <span className="nav_span">Register</span>
                  </Link>
                </NavItem> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <span className="nav_switch">
        <ReactSwitch
          onChange={handleClick}
          checked={theme === "dark"}
          className="mode_switch"
          offColor="#024F59" //x
          onColor="#C5E1E4" //check
          offHandleColor="#C5E1E4"
          onHandleColor="#024F59"
        />
      </span>
    </>
  );
};

export default NavMenu;
