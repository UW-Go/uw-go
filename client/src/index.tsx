import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "views/home/home";
import { Navigation } from "views/navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/route" element={<Navigation />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
