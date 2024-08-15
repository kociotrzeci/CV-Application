function DisplayElement({ input }) {
  return (
    <div>
      {Object.values(input).map((value, index) =>
        value ? <p key={index}>{value}</p> : null
      )}
    </div>
  );
}

export default DisplayElement;
