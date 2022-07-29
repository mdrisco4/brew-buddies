import Home from "./pages/home.js";
import Brands from "./pages/brands.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Footer from "./components/footer.js";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  font-size: 24px;
  background-color: rgb(154, 157, 159);
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
  justify-content: space-between;
  @media (min-width: 650px) {
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

const MenuLinks = styled.div`
  font-size: 15px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 3.5%;
  /* color: rgb(154, 157, 159); */
  font-weight: bold;
  width: 20%;
  @media (min-width: 550px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    /* width: 25%; */
  }
  @media (min-width: 800px) {
    font-size: 24px;
  }
  @media (min-width: 1150px) {
    font-size: 32px;
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
      {/* <Header /> */}
      <Router>
        <HeaderContainer>
          <MenuLinksContainer>
            <MenuLinks>
              <Link to="/">Home</Link>
            </MenuLinks>

            <MenuLinks>
              <Link to="/brands">Brands</Link>
            </MenuLinks>

            <MenuLinks>
              <Link to="/">
                <Logo src="https://i.imgur.com/rpLw26n.png" />
              </Link>
            </MenuLinks>

            <MenuLinks>
              <Link to="/about">About Us</Link>
            </MenuLinks>

            <MenuLinks>
              <Link to="/contact">Contact Us</Link>
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
