import React from "react";
import TestTree from "../components/TestTree";
import "../global.css";
import { Outlet } from "react-router-dom";

const Test = () => {
  return <TestTree />;
  <Outlet />
};

export default Test;