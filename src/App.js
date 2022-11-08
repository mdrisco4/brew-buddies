import React, { useState } from "react";
import Home from "./pages/home.js";
import Brands from "./pages/brands.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Footer from "./components/footer.js";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styled from "styled-components";
import "./styles/fonts.css";
import Navbar from "./components/Nav/navbar.js";
import Burger from "./components/Nav/burger.js";

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
    background-color: ${({ open }) => (open ? "rgb(135, 180, 225)" : "rgb(220, 180, 180)")};
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
  /* display: none; */
  list-style: none;
  flex-flow: column nowrap;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 42%;
  width: 100%;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  /* justify-content: space-between; */ /*May re-add this styling*/
  /* padding-left: 10px;
  padding-right: 10px; */
  background-color: rgb(220, 180, 180);
  /* flex-direction: column; */
  /* margin-bottom: 12px; */
  /* align-items: center; */
  /* justify-content: center; */
  @media (min-width: 450px) {
    height: 45%;
  }
  @media (min-width: 575px) {
    height: 51%;
    width: 50%;
  }
  @media (min-width: 650px) {
    height: 54%;
  }
  @media (min-width: 768px) {
    height: 60%;
  }
  @media (min-width: 850px) {
    height: 64%;
  }
  @media (min-width: 980px) {
    height: 68%;
  }
  @media (min-width: 1150px) {
  }
  @media (min-width: 1280px) {
  }
`;

const MenuLinksMobile = styled.div`
  width: 70%;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuLinksBigScreen = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const MenuLinks = styled.li`
  font-size: 35px;
  font-family: "Comfortaa", cursive;
  margin-top: 3.5%;
  /* color: rgb(154, 157, 159); */
  font-weight: bold;
  text-decoration: none;
  @media (min-width: 575px) {
    font-size: 42px;
  }
  @media (min-width: 768px) {
    /* width: 20%; */
    /* margin-left: 10px;
    margin-right: 10px; */
    font-size: 45px;
  }
  @media (min-width: 850px) {
    font-size: 50px;
  }
  @media (min-width: 980px) {
    font-size: 54px;
  }
  @media (min-width: 1150px) {
    /* font-size: 42px; */
  }
  @media (min-width: 1280px) {
    /* font-size: 45px; */
  }
  :hover {
    background-color: rgb(135, 180, 225);
  }
`;

// const LogoLink = styled.div`
//   width: 0;
//   @media (min-width: 575px) {

//   }
//   @media (min-width: 768px) {

//   }
//   @media (min-width: 850px) {

//   }
//   @media (min-width: 1024px) {

//   }
//   @media (min-width: 1150px) {

//   }
// `;

const LogoFLexBox = styled.div`
  display: flex;
  flex-flow: row;
  /* width: 100%; */
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
