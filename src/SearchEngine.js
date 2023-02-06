import React from "react";
import "./SearchEngine.css";

export default function (SearchEngine) {
  return (
    <div className="SearchEngine">
      <div className="container">
        <div className="row">
          <div className="col">
            <form>
              <input type="text" placeholder="Type a city" />
              <input type="submit" value="Search" />
            </form>
          </div>
          <div className="col">
            <span>Time</span>
            <br />
            <span>Date</span>
          </div>
        </div>
      </div>
    </div>
  );
}
