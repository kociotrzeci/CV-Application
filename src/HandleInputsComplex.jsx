function HandleInputsComplex({
  input,
  update,
  labels,
  visible,
  type = "text",
}) {
  const handleChange = (index, key, value) => {
    update((prev) => ({
      ...prev,
      data: prev.data.map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      ),
    }));
  };
  const handleVisible = () => {
    console.log(`Toggling ${labels["header"]} visibility: ${visible}`);
    update((prev) => ({ ...prev, visible: !visible }));
  };
  const addWorkplace = () => {
    update((prev) => ({
      ...prev,
      data: [...prev.data, labels.template],
    }));
  };
  const removeWorkplace = (index) => {
    update((prev) => ({
      ...prev,
      data: prev.data.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className={`inputCard ${labels["objectName"]}`}>
      <h5 onClick={handleVisible}>{labels["header"]}</h5>
      {visible &&
        input.map((element, index) => (
          <div key={[element, index]} className="advancedContainer">
            <div key={index} className="advanced">
              {Object.keys(element).map((key) => (
                <div key={key}>
                  <div className="row">
                    <p>{labels[key]}</p>
                    <input
                      type={type}
                      name={key}
                      value={element[key]}
                      onChange={(e) => handleChange(index, key, e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => removeWorkplace(index)} className="remove">
              X
            </button>
          </div>
        ))}
      {visible && (
        <button onClick={addWorkplace} className="add">
          +
        </button>
      )}
    </div>
  );
}

export default HandleInputsComplex;
