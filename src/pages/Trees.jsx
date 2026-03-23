import React from "react";
import TreesPage from "../components/TreesPage";
import "../global.css";
import { Outlet } from "react-router-dom";

const Trees = () => {
  return <TreesPage />;
  <Outlet />
};

export default Trees;
