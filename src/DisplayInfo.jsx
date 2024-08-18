function DisplayInfo(output) {
  return (
    <div key="userInfo" className="userInfo">
      <h1>{output.firstName + " " + output.lastName}</h1>
      <h5>{output.occupation}</h5>
      {output.phone && (
        <div>
          <p>Phone:</p>
          <p>{output.phone}</p>
        </div>
      )}
      {output.email && (
        <div>
          <p>Email:</p>
          <p>{output.email}</p>
        </div>
      )}
      {output.github && (
        <div>
          <p>GitHub</p>
          <p>{output.github}</p>
        </div>
      )}
      {output.linkedin && (
        <div>
          <p>LinkedIn</p>
          <p>{output.linkedin}</p>
        </div>
      )}
    </div>
  );
}

export default DisplayInfo;
