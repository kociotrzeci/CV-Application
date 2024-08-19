import { experience } from "./Dataset";

function DisplayEducation(output) {
  const arrayOutput = Object.values(output);
  return (
    <div key="education" className="experience">
      <h2>Education</h2>
      {arrayOutput.map((item) => {
        return (
          <div key={item} className="workplace">
            <h4>{item.dates}</h4>
            <div className="workInfo">
              <h3>{item.place}</h3>
              <h5>{item.fieldOfStudy}</h5>
              <li>{item.duties}</li>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default DisplayEducation;
