import { useEffect } from "react";
import { useState } from "react";

function PasswordInput() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function onClickHandler() {
    setShowPassword(!showPassword);
  }

  useEffect(() => {
    console.log("password = ", password);
  }, [password]);

  return (
    <>
      <div>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={onClickHandler}>
          {showPassword ? "hide" : "show"}
        </button>
      </div>
    </>
  );
}

export default PasswordInput;
