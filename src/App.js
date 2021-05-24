import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Product from "./Product";
import Favourite from "./Favourite";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      

      <Route path="/" component={Product} exact />
      <Route path="/favorites" component={Favourite} />
      </Switch>
    </Router>
  );
}
