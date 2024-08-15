function HandleInputs({ input, update, labels, visible }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    update((prev) => ({ ...prev, [name]: value }));
  };
  const handleVisible = () => {
    console.log("click");
    update((prev) => ({ ...prev, visible: !visible }));
  };

  return (
    <div className="inputCard">
      <p onClick={handleVisible}>{labels["header"]}</p>
      {visible &&
        Object.keys(input).map((key) => (
          <div key={key} className="row">
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
