import React from "react";
import styled from "styled-components";
import { NavbarContainer, NavLogo, NavIcon } from "./Navbart.style";
import { useState } from "react";
export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <NavIcon />
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;
