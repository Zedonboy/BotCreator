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
import Signin from "./pages/SignIn";
import BotCreator from "./pages/dashboard/BotCreator";
import {RecoilRoot} from "recoil"

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Signin />}/>
      <Route path="/dashboard" element={<DW/>}>
        <Route index element={<HomeDashboard/>}/>
        <Route path="/dashboard/bot-creator" element={<BotCreator/>}/>
      </Route>
      <Route path="/signin" element={<SignIn/>}/>
    </Routes>
      
    </HashRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
