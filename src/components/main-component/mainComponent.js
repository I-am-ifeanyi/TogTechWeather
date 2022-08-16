import React from "react";
import main from "./main.css";
import morning from "../images/morning.png"
import { useState } from "react";

const MainComponent = () => {



const [lightMode, setLightMode] = useState(true);
const changeMode = () => {
  setLightMode(current => !current)
}




  return (
    <section className="main-component">
      <div className="first-section">
        <div>
          <h1>07:32 AM</h1>
          <p>Wednesday, 14 April, 2022</p>
          <div className="greetings">
            <img src={morning} alt="weather-image" />
            <span>Good Morning, Florish!</span>
          </div>
        </div>
        <div className="light-mode">
          <div className="dark-mode"></div>
        </div>
        
      </div>
      <div>The days temperature</div>
      <div>THe details</div>
    </section>
  );
};

export default MainComponent;
