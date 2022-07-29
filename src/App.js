import "./App.css";
import Contact from "./pages/contact.js";
import About from "./pages/about.js";
import Home from "./pages/home.js";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Home />
//     </div>
//   );
// }



export default function App() {
  return (
    <div>
      <h1>hello world</h1>
      <Router>
      <div>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="contact">Contact</Link>
            </li>
        </ul>
      <Routes>
        <Route path="/" exact element={<Home/>}>
          {/* <Home /> */}
        </Route>
        <Route path="/about" exact element={<About/>}>
          {/* <About /> */}
        </Route>
        <Route path="contact" exact element={<Contact/>}>
          {/* <Contact /> */}
        </Route>
      </Routes>
      </div>
      </Router>
    </div>


    
  );
}










{/* export default App; */}
