import React, { useState } from "react";
import "./App.scss";
import HandleInputs from "./HandleInputs.jsx";
import DisplayElement from "./DisplayElement.jsx";
import * as dataset from "./Dataset.js";
function App() {
  const [userInfo, userInfoUpdate] = useState(dataset.userInfo);
  // const [summary, summaryUpdate] = useState(dataset.summary);
  //  const summaryLabel = dataset.summaryLabel;
  return (
    <div className="App">
      <div>
        <HandleInputs
          input={userInfo.data}
          update={userInfoUpdate}
          labels={userInfo.label}
          visible={userInfo.visible}
        />
        <DisplayElement input={userInfo.data} />
      </div>
    </div>
  );
}
export default App;
