import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import SignIn from "./pages/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProcedureOuter from "./pages/ProcedureOuter/ProcedureOuter";
import RunzOuter from "./pages/RunzOuter/RunzOuter";
import MyPageScene from "./appScenes/myPage";
import RunzScene from "./appScenes/runz";
import RunzPlay from "./appScenes/runz/Runz";
import ProcedureScene from "./appScenes/procedure";
import ProcedurePlay from "./appScenes/procedure/Procedure";
import SettingScene from "./appScenes/setting";
import SupportScene from "./appScenes/support";
import ProfileScene from "./appScenes/profile";
import store from "./reudx/store";
import ProtectedRoutes from "./utilities/ProtectedRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<MyPageScene />} />
            <Route path="runz" element={<RunzScene />} />
            <Route path="procedures" element={<ProcedureScene />} />
            <Route path="setting" element={<SettingScene />} />
            <Route path="support" element={<SupportScene />} />
            <Route path="profile" element={<ProfileScene />} />
          </Route>
          <Route path="/procedure" element={<ProcedureOuter />}>
            <Route index element={<ProcedurePlay />} />
          </Route>
          <Route path="/runz" element={<RunzOuter />}>
            <Route index element={<RunzPlay />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);
