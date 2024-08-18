function DisplayElement({ input, outputClass }) {
  return (
    <div className={outputClass}>
      {Object.values(input).map((value, index) =>
        value ? <p key={index}>{value}</p> : null
      )}
    </div>
  );
}

export default DisplayElement;
