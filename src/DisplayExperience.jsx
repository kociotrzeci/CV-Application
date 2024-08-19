function DisplayExperience(output) {
  const arrayOutput = Object.values(output);

  return (
    <div className="experience">
      <h2>Experience</h2>
      {arrayOutput.map((item) => {
        return (
          <div key={item.place} className="workplace">
            <h4>{item.dates}</h4>
            <div className="workInfo">
              <h3>{item.place}</h3>
              <h5>{item.position}</h5>
              <li>{item.duties}</li>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayExperience;
