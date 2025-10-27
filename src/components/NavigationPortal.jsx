import React from "react";
import { Link } from "react-router-dom"; 
import ItemsIcon from "../assets/ItemsIcon.png";
import GalleryIcon from "../assets/GalleryIcon.jpg";
import CharacterIcon from "../assets/CharacterIcon.png";
import AffinityIcon from "../assets/AffinityIcon.jpg";
import SkillTreesIcon from "../assets/SkillTreesIcon.png";

const NavigationPortal = () => (
  <div className="pageportal">
    <table>
      <thead>
        <tr>
          <th>Navigation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="column example">

              {/* Navigation Item */}
              <section className="portal">
                <Link to="items">
                  <img src={ItemsIcon} alt="Items" />
                  <p>Items</p>
                </Link>
              </section>

              <section className="portal">
                <Link to="/locations">
                  <img src={GalleryIcon} alt="Locations" />
                  <p>Locations</p>
                </Link>
              </section>

              <section className="portal">
                <Link to="/characters">
                  <img src={CharacterIcon} alt="Characters" />
                  <p>Characters</p>
                </Link>
              </section>

              <section className="portal">
                <Link to="/affinities">
                  <img src={AffinityIcon} alt="Affinities" />
                  <p>Affinities</p>
                </Link>
              </section>

              <section className="portal">
                <Link to="/trees">
                  <img src={SkillTreesIcon} alt="Skill Trees" />
                  <p>Skill Trees</p>
                </Link>
              </section>

            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default NavigationPortal;
