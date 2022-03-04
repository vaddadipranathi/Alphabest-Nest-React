import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Route } from "react-router-dom";
import { Provider } from "react-redux";
import DisplayallAlphaBets from "./components/DisplayallAlphaBets";
import HeaderComponent from './components/headerComponent';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderComponent/>
        <Route exact path="/allAlphabets" component={DisplayallAlphaBets} />
      </Router>
    </Provider>
  );
}

export default App;
