import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ItemsContent from "./ItemsContent";
import DiscordSection from './DiscordSection';
import StaffSection from './StaffSection';
import UnderNavText from "./UnderNavText";
import SkillTreesContent from "./SkillTreesContent";

const MainContent = () => {
    return (
      <main className="main-content">
        <div className="undernavtext">
          <UnderNavText />
        </div>
  
        <div className="flex-container">
          <div className="bigleft">
            <SkillTreesContent />
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
  
        <div className="bottommobilestuff">
          <div className="flex-container">
            <div className="column example">
              <DiscordSection />
              <StaffSection />
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default MainContent;