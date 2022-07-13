import "./App.css";
import Home from "./components/home";
import Header from "./components/header";
import { Route, Link } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          This route is for home component 
          with exact path "/", in component props 
          we passes the imported component
          <Route exact path="/" component={Home} />

          This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component
          <Route path="/about" component={About} />

          This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component
          <Route path="/contactus" component={ContactUs} />

          If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/"
          <Redirect to="/" />
        </Switch>
      </Router> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
