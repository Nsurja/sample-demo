import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MainPage from "./MainPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/show" element={<MainPage />} />
    </Routes>
  );
}
