import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Home, About } from "./pages";
import { Product, Modal } from "./components";
import { useSelector } from "react-redux";

function App() {
  const { modalWindow, overflow } = useSelector((state) => state.products);
  overflow
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

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
