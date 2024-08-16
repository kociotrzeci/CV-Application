function HandleInputs({ input, update, labels, visible, type = "text" }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    update((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      },
    }));
  };
  const handleVisible = () => {
    console.log("click");
    update((prev) => ({ ...prev, visible: !visible }));
  };

  return (
    <div className={`inputCard ${labels["objectName"]}`}>
      <p onClick={handleVisible}>{labels["header"]}</p>
      {visible &&
        Object.keys(input).map((key) => (
          <div key={key} className="row">
            <p>{labels[key]}</p>
            <input
              type={type}
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
