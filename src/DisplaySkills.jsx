function DisplaySkills(output) {
  const inputArray = Object.values(output);
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {inputArray.map((element) => {
          return <li key={element.skill}>{element.skill}</li>;
        })}
      </ul>
    </div>
  );
}
export default DisplaySkills;
