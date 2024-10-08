import React, { useState } from "react";
import "./App.scss";
import HandleInputs from "./HandleInputs.jsx";
import HandleInputsComplex from "./HandleInputsComplex.jsx";
import HandleInputSummary from "./HandleInputSummary.jsx";
import DisplayElement from "./DisplayElement.jsx";
import DisplayInfo from "./DisplayInfo.jsx";
import DisplayExperience from "./DisplayExperience.jsx";
import DisplaySkills from "./DisplaySkills.jsx";
import DisplayEducation from "./DisplayEducation.jsx";
import * as dataset from "./Dataset.js";

function App() {
  const [userInfo, userInfoUpdate] = useState(dataset.userInfo);
  const [summary, summaryUpdate] = useState(dataset.summary);
  const [experience, experienceUpdate] = useState(dataset.experience);
  const [education, educationUpdate] = useState(dataset.education);
  const [skills, skillsUpdate] = useState(dataset.skills);
  return (
    <div className="App">
      <header>CV generator</header>
      <div className="contentContainer">
        <div className="input">
          <div>
            <HandleInputs
              input={userInfo.data}
              update={userInfoUpdate}
              labels={userInfo.label}
              visible={userInfo.visible}
            />
            <HandleInputSummary
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
            <HandleInputsComplex
              input={skills.data}
              update={skillsUpdate}
              labels={skills.label}
              visible={skills.visible}
            />
          </div>
        </div>
        <div className="output">
          <DisplayInfo {...userInfo.data} />
          <DisplayElement input={summary.data} outputClass="summary" />
          <DisplayExperience {...experience.data} />
          <DisplayEducation {...education.data} />
          <DisplaySkills {...skills.data} />
        </div>
      </div>
    </div>
  );
}
export default App;
