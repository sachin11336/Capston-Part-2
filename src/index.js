import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
=======
import { BrowserRouter } from "react-router-dom";
import App from "./App";
>>>>>>> cec88d1d74bee6f32a12b9e025af1c99ee887285

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Router>
      <App />
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/" element={<Login></Login>}></Route>
      </Routes>
    </Router>
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> cec88d1d74bee6f32a12b9e025af1c99ee887285
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals