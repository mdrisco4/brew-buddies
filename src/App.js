import React, { useState } from "react";
import Home from "./pages/home.js";
import Brands from "./pages/brands.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Footer from "./components/footer.js";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styled from "styled-components";
import "./styles/fonts.css";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) =>
      open ? "rgb(135, 180, 225)" : "rgb(220, 180, 180)"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const HeaderContainer = styled.div`
  font-size: 24px;
  background-color: rgb(135, 180, 225);
  font-weight: bold;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 800px) {
    font-size: 30px;
  }
  @media (min-width: 1150px) {
  }
`;

const MenuLinksContainer = styled.ul`
  display: flex;
  /* display: none; */ /*May re-add this styling*/
  list-style: none;
  flex-flow: column nowrap;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 300px;
  width: 100%;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  /* justify-content: space-between; */ /*May re-add this styling*/
  background-color: rgb(220, 180, 180);
  @media (min-width: 450px) {
    height: 320px;
  }
  @media (min-width: 575px) {
    height: 240px;
    width: 20%;
  }
  @media (min-width: 650px) {
    height: 260px;
  }
  @media (min-width: 768px) {
    height: 294px;
  }
  @media (min-width: 850px) {
    height: 320px;
  }
  @media (min-width: 980px) {
    height: 348px;
  }
  @media (min-width: 1150px) {
    /* height: 420px; */
  }
  @media (min-width: 1280px) {
    /* height: 450px; */
  }
  @media (min-width: 1280px) {
    /* height: 450px; */
  }
`;

const MenuLinks = styled.li`
  font-size: 35px;
  font-family: "Comfortaa", cursive;
  margin-top: 3.5%;
  font-weight: bold;
  text-decoration: none;
  @media (min-width: 575px) {
    font-size: 27px;
  }
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 850px) {
    font-size: 36px;
  }
  @media (min-width: 980px) {
    font-size: 39px;
  }
  @media (min-width: 1150px) {
    /* font-size: 42px; */ /*May re-add this styling*/
  }
  @media (min-width: 1280px) {
    /* font-size: 45px; */ /*May re-add this styling*/
  }
  :hover {
    background-color: rgb(135, 180, 225);
  }
`;

const LogoFLexBox = styled.div`
  display: flex;
  flex-flow: row;
`;

const LogoBorders = styled.div`
  width: 500%;
  background-color: rgb(135, 180, 225);
  display: block;
  @media (min-width: 768px) {
  }
`;

const Logo = styled.img`
  width: 100%;
  background-color: rgb(135, 180, 225);
  padding-bottom: 20px;
  display: block;
  @media (min-width: 768px) {
  }
`;

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <Router>
        <LogoFLexBox>
          <LogoBorders />
          <Link to="/">
            <Logo src="https://i.imgur.com/rpLw26n.png" />
          </Link>
          <LogoBorders />
        </LogoFLexBox>
        <HeaderContainer>
          
          <MenuLinksContainer open={open}>
            <MenuLinks open={open} onClick={() => setOpen(!open)}>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </MenuLinks>

            <MenuLinks open={open} onClick={() => setOpen(!open)}>
              <Link
                to="/brands"
                style={{ textDecoration: "none", color: "black" }}
              >
                Brands
              </Link>
            </MenuLinks>

            <MenuLinks open={open} onClick={() => setOpen(!open)}>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </Link>
            </MenuLinks>

            <MenuLinks open={open} onClick={() => setOpen(!open)}>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "black" }}
              >
                Contact
              </Link>
            </MenuLinks>
          </MenuLinksContainer>

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/brands" exact element={<Brands />} />
          </Routes>
        </HeaderContainer>
      </Router>
      <Footer />
    </div>
  );
}
