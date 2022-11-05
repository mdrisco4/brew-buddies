import Home from "./pages/home.js";
import Brands from "./pages/brands.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Footer from "./components/footer.js";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styled from "styled-components";
import "./styles/fonts.css";

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

const MenuLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  align-items: center;
  justify-content: center;
  @media (min-width: 650px) {
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 800px) {
  }
  @media (min-width: 1150px) {
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

const MenuLinks = styled.div`
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
    width: 20%;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 24px;
  }
  @media (min-width: 850px) {
    font-size: 28px;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
  }
  @media (min-width: 1150px) {
    font-size: 35px;
  }
`;

const Logo = styled.img`
  width: 100%;
  /* padding-left: 180%; */
  @media (min-width: 768px) {
    /* margin-left: initial;
    margin-right: initial; */
  }
`;

export default function App() {
  return (
    <div>
      <Router>
        <HeaderContainer>
          <MenuLinksContainer>
            <MenuLinksMobile>
              <Link to="/">
                <Logo src="https://i.imgur.com/rpLw26n.png" />
              </Link>
            </MenuLinksMobile>

            <MenuLinks>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </MenuLinks>

            <MenuLinks>
              <Link
                to="/brands"
                style={{ textDecoration: "none", color: "black" }}
              >
                Brands
              </Link>
            </MenuLinks>

            <MenuLinksBigScreen>
              <Link to="/">
                <Logo src="https://i.imgur.com/rpLw26n.png" />
              </Link>
            </MenuLinksBigScreen>

            <MenuLinks>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </Link>
            </MenuLinks>

            <MenuLinks>
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
