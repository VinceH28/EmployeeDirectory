import React from "react";
import DirectoryHeader from "./components/title.js";
import Api from "../src/utils/API";

function App() {
  return (
    <div>
    <DirectoryHeader/>
      <Api/>
    </div>
  );
}

export default App;
