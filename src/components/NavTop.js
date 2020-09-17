import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

import { CartContext } from "../contexts/Cart";

const NavTop = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand href="/">shop-bee</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/products">
                <NavLink>Products</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/products">
                <CartContext.Consumer>
                  {({ cartItems }) => (
                    <NavLink>Cart ({cartItems.length})</NavLink>
                  )}
                </CartContext.Consumer>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavTop;
