import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import DW from "./pages/Dashboard"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import HomeDashboard from "./pages/dashboard/Home.dashboard";
import Templates from "./pages/dashboard/Templates.dashboard";
import History from "./pages/dashboard/History"
import Domains from "./pages/dashboard/Domains";
import Editor from "./pages/dashboard/Editor";
import GenerateContent from "./pages/dashboard/GenerateContent";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dashboard" element={<DW/>}>
        <Route index element={<HomeDashboard/>}/>
        <Route path="/dashboard/templates" element={<Templates/>}/>
        <Route path="/dashboard/history" element={<History/>}/>
        <Route path="/dashboard/domains" element={<Domains/>}/>
        <Route path="/dashboard/editor" element={<Editor/>}/>
        <Route path="/dashboard/generate" element={<GenerateContent/>}/>
      </Route>
      <Route path="/signin" element={<SignIn/>}/>
    </Routes>
      
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
