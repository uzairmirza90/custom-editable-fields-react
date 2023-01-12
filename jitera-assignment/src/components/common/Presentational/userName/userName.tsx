import React, { useState } from "react";

interface UserNameProps {
  name: string;
  editable: boolean;
}

const UserName = ({ name, editable }: UserNameProps) => {
  const [userName, setUserName] = useState(name);
  return (
    <>
      {editable ? (
        <input
          style={{
            height: "35px",
            fontSize: "18px",
            marginTop: "10px",
            width: "90%",
          }}
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      ) : (
        <p style={{ fontSize: 18, fontWeight: 600 }}>{userName}</p>
      )}
    </>
  );
};

export default UserName;
