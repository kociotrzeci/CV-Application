import { useState } from "react";

function UserInfo() {
  function handleFirstNameChange(e) {
    updateFirstName(e.target.value);
  }

  const [userInfo, setUserInfo] = useState({
    firstName: "Andrzej",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const output = `${userInfo.firstName} ${userInfo.lastName} ${userInfo.email} ${userInfo.phone}`;

  return (
    <div>
      {Object.keys(userInfo).map((key) => (
        <input
          key={key}
          type="text"
          name={key}
          value={userInfo[key]}
          onChange={handleChange}
        />
      ))}
      {output}
    </div>
  );
}

export default UserInfo;
