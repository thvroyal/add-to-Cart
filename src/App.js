import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavTop from "./components/NavTop";
import Products from "./pages/Products";
import { CartProvider } from "./contexts/Cart";

const Home = () => <h2>Home</h2>;

export default function App() {
  return (
    <CartProvider>
      <Router>
        <NavTop />
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
      </Router>
    </CartProvider>
  );
}
