import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import SignIn from "./pages/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";

import MyPageScene from "./appScenes/myPage";
import RunzScene from "./appScenes/runz";
import ProcedureScene from "./appScenes/procedure";
import SettingScene from "./appScenes/setting";
import SupportScene from "./appScenes/support";
import ProfileScene from "./appScenes/profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyPageScene />} />
          <Route path="runz" element={<RunzScene />} />
          <Route path="procedures" element={<ProcedureScene />} />
          <Route path="setting" element={<SettingScene />} />
          <Route path="support" element={<SupportScene />} />
          <Route path="profile" element={<ProfileScene />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
