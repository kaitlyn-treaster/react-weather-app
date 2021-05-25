import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
  <div className="App">
    <div className="container">
    <Weather defaultCity="New York" />
    <br />
    <footer>
      This project was coded by {" "}
      <a 
      href="www.linkedin.com/in/kaitlyn-treaster"
      target="_blank"
      rel="noreferrer"
      >
        Kaitlyn Treaster {" "}
        </a> 
      and is {" "}
      <a
      href="https://github.com/kaitlyn-treaster/react-weather-app"
      target="_blank"
      rel="noreferrer"
      >
        open-sourced on GitHub {" "}
      </a>
      and 
      <a
      href="https://vigorous-kare-4aac5c.netlify.app/"
      target="_blank"
      rel="noreferrer"
      >
        {" "} hosted on Netlify
      </a>
    </footer>
    </div>
  </div>
  );
}


