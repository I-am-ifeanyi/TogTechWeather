import React from "react";
import { useState } from "react";
import main from "./main.css";
import morning from "../images/morning.png";
import cloud from "../images/sky.jpg";
import mapLine from "../images/MapPinLine.png";

const MainComponent = () => {
  const [lightMode, setLightMode] = useState(true);
  const changeMode = () => setLightMode((current) => !current);

  return (
    <section className="main-component">
      <div className="first-section">
        <div>
          <h1>07:32 AM</h1>
          <p>Wednesday, 14 April, 2022</p>
          <div className="greetings">
            <img src={morning} alt="weather-image" />
            <span>
              Good Morning, <b>Florish!</b>
            </span>
          </div>
        </div>
        <div
          className={lightMode ? "light-mode" : "light-mode2"}
          onClick={changeMode}
        >
          <div
            className={lightMode ? "dark-mode" : "dark-mode2"}
            onClick={changeMode}
          ></div>
        </div>
      </div>
      <div className="week-days">
        <div>
          <img src="icons/01d.png" alt="weather-image" />
          <h4>Today</h4>
          <h4>17&deg;C</h4>
        </div>
        <div>
          <img src="icons/01n.png" alt="weather-image" />
          <h4>Sun</h4>
          <h4>17&deg;C</h4>
        </div>
        <div>
          <img src="icons/02d.png" alt="weather-image" />
          <h4>Sun</h4>
          <h4>17&deg;C</h4>
        </div>
        <div>
          <img src="icons/02n.png" alt="weather-image" />
          <h4>Sun</h4>
          <h4>17&deg;C</h4>
        </div>
        <div>
          <img src="icons/03d.png" alt="weather-image" />
          <h4>Sun</h4>
          <h4>17&deg;C</h4>
        </div>
        <div>
          <img src="icons/11n.png" alt="weather-image" />
          <h4>Sun</h4>
          <h4>17&deg;C</h4>
        </div>
        <div>
          <img src="icons/10n.png" alt="weather-image" />
          <h4>Sun</h4>
          <h4>17&deg;C</h4>
        </div>
      </div>
      <div className="weather-description">
        <div className="first-description">
          <div>
            <span className="what-does-it-look-like">Looks sunny</span>
            <div>
              <div>
                <h6>Pressure</h6>
                <p>18pns</p>
              </div>
              <div>
                <h6>Pressure</h6>
                <p>18pns</p>
              </div>
              <div>
                <h6>Pressure</h6>
                <p>18pns</p>
              </div>
            </div>
            <div>
              <div>
                <h6>Pressure</h6>
                <p>18pns</p>
              </div>
              <div>
                <h6>Pressure</h6>
                <p>18pns</p>
              </div>
              <div>
                <h6>Pressure</h6>
                <p>18pns</p>
              </div>
            </div>
          </div>
          <div>
            <img src={cloud} alt="cloud image" />
          </div>
        </div>
        <div className="second-description">
          <h1>Cities Around You</h1>
          <div>
            <div>
              <img src={mapLine} alt="location icon" />
              <p>Abuja</p>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <img src={mapLine} alt="location icon" />
              <p>Abuja</p>
            </div>
          </div>
          <div>
            <div>
              <img src={mapLine} alt="location icon" />
              <p>Abuja</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainComponent;
