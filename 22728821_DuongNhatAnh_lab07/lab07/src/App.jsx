import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Analytics from "./page/Analytics/Analytics";
import Dashboard from "./page/Dashboard/Dashboard";
import Intergrations from "./page/Intergrations/Intergrations";
import Messages from "./page/Messages/Messages";
import Projects from "./page/Projects/Projects";
import Teams from "./page/Teams/Teams";

function App() {
  return (
    <>
      <div className="main_app">
        <Routes>
          <Route path="/analytics" element={<Analytics></Analytics>}></Route>
          <Route path="/intergrations" element={<Intergrations />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/teams" element={<Teams />}></Route>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
