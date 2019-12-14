import React from "react";

import "./App.css";
import FetchData from "./components/FetchData";

function App() {
  return (
    <div className="App">
      <p>Players</p>
      <FetchData />
    </div>
  );
}

export default App;