import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import DW from "./pages/Dashboard"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import HomeDashboard from "./pages/dashboard/Home.dashboard";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dashboard" element={<DW/>}>
        <Route index element={<HomeDashboard/>}/>
      </Route>
      <Route path="/signin" element={<SignIn/>}/>
    </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
