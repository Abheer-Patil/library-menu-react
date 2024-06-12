import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownMenu,
} from "shadan-ui";
import { useMediaQuery } from "react-responsive"; // Install react-responsive for media queries

const ResponsiveNavbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" }); // Adjust breakpoint as needed

  return (
    <Navbar>
      <Nav>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        {/* Add more navigation items here */}
        {isMobile && (
          <NavItem>
            <Dropdown>
              <DropdownTrigger>
                <NavLink>More</NavLink>
              </DropdownTrigger>
              <DropdownContent>
                <DropdownMenu>
                  <NavItem>
                    <NavLink to="/contact">Contact</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/services">Services</NavLink>
                  </NavItem>
                  {/* Add more dropdown items here */}
                </DropdownMenu>
              </DropdownContent>
            </Dropdown>
          </NavItem>
        )}
      </Nav>
    </Navbar>
  );
};

export default ResponsiveNavbar;
