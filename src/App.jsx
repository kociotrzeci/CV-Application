import React, { useState } from "react";
import "./App.css";
import HandleInputs from "./HandleInputs.jsx";
import DisplayElement from "./DisplayElement.jsx";
import * as dataset from "./Dataset.js";
function App() {
  const [userInfo, userInfoUpdate] = useState(dataset.userInfo.data);
  const userInfoLabel = dataset.userInfo.label;
  // const [summary, summaryUpdate] = useState(dataset.summary);
  //  const summaryLabel = dataset.summaryLabel;
  return (
    <div className="App">
      <div>
        <HandleInputs
          input={userInfo}
          update={userInfoUpdate}
          labels={userInfoLabel}
        />

        <DisplayElement input={userInfo} />
      </div>
    </div>
  );
}
export default App;
