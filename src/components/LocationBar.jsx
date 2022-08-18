import { useState } from "react";

export const LocationBar = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAlert = () => {
    setMessage("Please enter your location!");
  };

  setTimeout(() => {
    setMessage("");
  }, 4000);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <img src="src/icons/placeholder.png" alt="location" width="20px" />
        <input
          type="text"
          name="location"
          placeholder="Select location..."
          onClick={handleAlert}
        />
        <img src="src/icons/menu.png" alt="menu" width="20px" id="menu-2" />
      </form>
      <div className="alert" style={{ display: message ? "" : "none" }}>
        {message}
      </div>
    </>
  );
};
