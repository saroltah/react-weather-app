import React from "react";
import "./Weather.css";

import SearchEngine from "./SearchEngine";
import CurrentData from "./CurrentData";
import Forecast from "./Forecast";

export default function Weather() {
  return (
    <div className="Weather">
      <SearchEngine />
      <CurrentData />
    </div>
  );
}
