import React, { useState } from "react";
import "./App.scss";
import HandleInputs from "./HandleInputs.jsx";
import HandleInputsComplex from "./HandleInputsComplex.jsx";
import DisplayElement from "./DisplayElement.jsx";
import * as dataset from "./Dataset.js";
function App() {
  const [userInfo, userInfoUpdate] = useState(dataset.userInfo);
  const [summary, summaryUpdate] = useState(dataset.summary);
  const [experience, experienceUpdate] = useState(dataset.experience);
  const [education, educationUpdate] = useState(dataset.education);

  return (
    <div className="App">
      <div>
        <HandleInputs
          input={userInfo.data}
          iiiii
          update={userInfoUpdate}
          labels={userInfo.label}
          visible={userInfo.visible}
        />
        <HandleInputs
          input={summary.data}
          update={summaryUpdate}
          labels={summary.label}
          visible={summary.visible}
        />
        <HandleInputsComplex
          input={experience.data}
          update={experienceUpdate}
          labels={experience.label}
          visible={experience.visible}
        />
        <HandleInputsComplex
          input={education.data}
          update={educationUpdate}
          labels={education.label}
          visible={education.visible}
        />
        <DisplayElement input={userInfo.data} />
      </div>
    </div>
  );
}
export default App;
