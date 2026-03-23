import React from "react";
import "./css/Trees.css";  // ✅ Make sure your styles are correct
import { Link } from "react-router-dom"; 
import ArcanaIcon from "../assets/ArcanaIcon.png";
import CreationIcon from "../assets/CreationIcon.png";
import DarknessIcon from "../assets/DarknessIcon.png";
import DestructionIcon from "../assets/DestructionIcon.png";
import EarthIcon from "../assets/EarthIcon.png";
import EnergyIcon from "../assets/EnergyIcon.png";
import FireIcon from "../assets/FireIcon.png";
import FormIcon from "../assets/FormIcon.png";
import GravityIcon from "../assets/GravityIcon.png";
import IceIcon from "../assets/IceIcon.png";
import IllusionIcon from "../assets/IllusionIcon.png";
import LightIcon from "../assets/LightIcon.png";
import LightningIcon from "../assets/LightningIcon.png";
import MetalIcon from "../assets/MetalIcon.png";
import MindIcon from "../assets/MindIcon.png";
import NatureIcon from "../assets/NatureIcon.png";
import PoisonIcon from "../assets/PoisonIcon.png";
import ShadowIcon from "../assets/ShadowIcon.png";
import SmokeIcon from "../assets/SmokeIcon.png";
import SoulIcon from "../assets/SoulIcon.png";
import SoundIcon from "../assets/SoundIcon.png";
import SpeedIcon from "../assets/SpeedIcon.png";
import WaterIcon from "../assets/WaterIcon.png";
import WindIcon from "../assets/WindIcon.png";
import TestIcon from "../assets/TestIcon.png";

const TreesContent = () => {
  return (
    <div className="pageportal">
      <table>
        <tr><th>Affinities</th></tr>
        <tr>
          <td>
            <div className="column example">

              <section className="elementportal">
                <Link to="/items">
                  <img src={ArcanaIcon} alt="Items" />
                  <p>Arcana</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={CreationIcon} alt="Items" />
                  <p>Creation</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={DarknessIcon} alt="Items" />
                  <p>Darkness</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={DestructionIcon} alt="Items" />
                  <p>Destruction</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={EarthIcon} alt="Items" />
                  <p>Earth</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={EnergyIcon} alt="Items" />
                  <p>Energy</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={FireIcon} alt="Items" />
                  <p>Fire</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={FormIcon} alt="Items" />
                  <p>Form</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={GravityIcon} alt="Items" />
                  <p>Gravity</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={IceIcon} alt="Items" />
                  <p>Ice</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={IllusionIcon} alt="Items" />
                  <p>Illusion</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={LightIcon} alt="Items" />
                  <p>Light</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={LightningIcon} alt="Items" />
                  <p>Lightning</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={MetalIcon} alt="Items" />
                  <p>Metal</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={MindIcon} alt="Items" />
                  <p>Mind</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={NatureIcon} alt="Items" />
                  <p>Nature</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={PoisonIcon} alt="Items" />
                  <p>Poison</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={ShadowIcon} alt="Items" />
                  <p>Shadow</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={SmokeIcon} alt="Items" />
                  <p>Smoke</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={SoulIcon} alt="Items" />
                  <p>Soul</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={SoundIcon} alt="Items" />
                  <p>Sound</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={SpeedIcon} alt="Items" />
                  <p>Speed</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={WaterIcon} alt="Items" />
                  <p>Water</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="items">
                  <img src={WindIcon} alt="Items" />
                  <p>Wind</p>
                </Link>
              </section>

              <section className="elementportal">
                <Link to="/test">
                  <img src={TestIcon} alt="Test Tree" />
                  <p>Test Tree</p>
                </Link>
              </section>


            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TreesContent;
