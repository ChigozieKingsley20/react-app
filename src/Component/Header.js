import React from "react";
import {Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse, NavLink, Nav} from 'reactstrap';
import { useState } from 'react';


export default function Header() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
    return(
    <div>
      <p>
     <Navbar color="dark" dark>
        <NavbarBrand href="/" className="me-auto">
          Reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/form">Feedback</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Gozie
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </p>
      </div>
    )
}