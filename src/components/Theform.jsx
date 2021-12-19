import React, { useState } from "react";
import mainLogo from "../assets/cloudbg.png";
import { Link } from "react-router-dom";

const Theform = ({ loader }) => {
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState("");

  const lenCheck = (e) => {
    if (e.target.value.length > 0) {
      setValue(e.target.value);
      setDisabled(false);
    } else {
      setValue(e.target.value);
      setDisabled(true);
    }
  };
  return (
    <form className="form-group">
      <img src={mainLogo} alt="" />

      <input
        type="text"
        value={value}
        placeholder="Country Name"
        onChange={lenCheck}
      />
      <Link
        to="/CountryDetails"
        id="link"
        className={disabled ? "disabled" : "enabled"}
        onClick={() => {
          if (disabled === false) loader(value);
        }}
      >
        Check
      </Link>
    </form>
  );
};

export default Theform;
