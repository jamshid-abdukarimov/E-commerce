import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./components/OneProduct/Product";
import Modal from "./components/Modal/Modal";
import { useSelector } from "react-redux";

function App() {
  const modalWindow = useSelector((state) => state.products.modalWindow);
  const overflow = useSelector((state) => state.products.overflow);
  if (overflow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/item/:id" component={Product} />
      </Switch>
      {modalWindow && <Modal />}
    </>
  );
}

export default App;
