import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import DW from "./pages/Dashboard"
import SignIn from "./pages/SignIn"
import BotCreator from "./pages/dashboard/BotCreator";
import {RecoilRoot} from "recoil"

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
    <HashRouter>
    <Routes>
      <Route path="/" element={<DW />}>
      <Route index element={<BotCreator/>}/>
      </Route>
     
      {/* <Route path="/signin" element={<SignIn/>}/> */}
    </Routes>
      
    </HashRouter>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
