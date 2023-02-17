import React from "react";

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project is created by{" "}
          <a
            href="https://cool-entremet-69e2c9.netlify.app/"
            target="blank"
            rel="noopener noreferrer"
            title="my website"
          >
            {" "}
            Sarolta Hegyi
          </a>{" "}
          and is open source on{" "}
          <a
            href="https://github.com/saroltah/react-weather-app"
            target="blank"
            rel="noopener noreferrer"
            title="github account"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
