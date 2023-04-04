import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Blog from "../components/blog/Blog";

function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default Router;
