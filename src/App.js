import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
//import Modal from "react-modal";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Department from "./components/Department";
import Employee from "./components/Employee";
import Navigation from "./components/Navigation";

function App() {
  //const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <h3 variant="primary">Employee Management Portal</h3>
      <br />
      <br />

      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/department" component={Department} exact></Route>
          <Route path="/employee" component={Employee} exact></Route>
        </Switch>
      </BrowserRouter>
      {/* <Button variant="primary">Boostrap Button</Button> */}
      {/* <button onClick={() => setModalIsOpen(true)}>Open Modal</button> */}
      {/* onRequestClose ----> is used to hide the Modal when we click outside of the model area
          shouldCloseOnEsc ----> is used to hide the Modal on click on the ESC button in keyboard
       */}
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnEsc={() => setModalIsOpen(false)}
      >
        <h3>Modal Title</h3>
        <div>
          <h5> Model Body</h5>
        </div>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal> */}
    </div>
  );
}

export default App;
