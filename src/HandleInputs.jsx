function HandleInputs({ input, update, labels }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    update((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {Object.keys(input).map((key) => (
        <div key={key}>
          <p>{labels[key]}</p>
          <input
            type="text"
            name={key}
            value={input[key]}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
}

export default HandleInputs;
