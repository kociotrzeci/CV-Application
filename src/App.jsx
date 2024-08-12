import React, { useState } from "react";
import "./App.css";
import "./UserInfo.jsx";
import UserInfo from "./UserInfo.jsx";

function App() {
  return (
    <div className="App">
      <UserInfo />
      {UserInfo.output}
    </div>
  );
}

export default App;
