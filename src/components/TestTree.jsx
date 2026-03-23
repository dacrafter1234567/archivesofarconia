import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./css/Trees.css";
import DiscordSection from "./DiscordSection";
import StaffSection from "./StaffSection";
import UnderNavText from "./UnderNavText";
import TestTreeContent from "./TestTreeContent";

const TestTree = () => {
  const location = useLocation();
  return (
    <main className="main-content">
      <div className="undernavtext">
        <UnderNavText />
      </div>

      <div className="flex-container">
        <div className="bigleft">
          <TestTreeContent />
          <Outlet />
        </div>

        <div className="smallright">
          <div className="flex-container">
            <div className="pageportal">
              <DiscordSection />
              <StaffSection />
            </div>
          </div>
        </div>
      </div>
    </main>
    
  );
};

export default TestTree;
