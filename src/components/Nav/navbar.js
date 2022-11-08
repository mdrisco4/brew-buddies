import React from "react";
import styled from "styled-components";
import Rightnav from "./rightnav";

const Nav = styled.nav`
    width: 100%auto;
    height: 55px;
    border-bottom: 2ps solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .logo {
        padding: 15px 0;
    }

`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
          Nav Bar
      </div>
      <Rightnav />
    </Nav>
  );
};

export default Navbar;
