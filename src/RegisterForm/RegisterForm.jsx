import React, { useState } from "react";
import "./register-form.css";

const InputStatus = {
  NORMAL: "normal",
  ERROR: "error",
  SUCCESS: "success",
};

function RegisterForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [nameError, setNameError] = useState(null);
  const [ageError, setAgeError] = useState(null);

  const [nameStatus, setnameStatus] = useState(InputStatus.NORMAL);
  const [ageStatus, setageStatus] = useState(InputStatus.NORMAL);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const validateName = (name) => {
    if (name.length < 1 || name.length > 10) {
      setNameError("The name must be at least 1 character and at most 10 characters.");
      setnameStatus(InputStatus.ERROR);
      return;
    }

    setnameStatus(InputStatus.SUCCESS);
  };

  const validateAge = (age) => {
    const numberedAge = Number(age);
    if (numberedAge < 1 || numberedAge > 100) {
      setAgeError("Age must be between 1 and 100.");
      setageStatus(InputStatus.ERROR);
      return;
    }

    setageStatus(InputStatus.SUCCESS);
  };

  const validateForm = (form) => {
    validateName(form.name);
    validateAge(form.age);
  };

  const handleSubmit = () => {
    const formData = { name, age };
    validateForm(formData);
  };

  const handleReset = () => {
    setName("");
    setAge("");
  };

  const getInputStatusStyle = (status) => {
    if (status === InputStatus.ERROR) {
      return "input-invalid";
    } else if (status === InputStatus.SUCCESS) {
      return "input-valid";
    }
    return "";
  };

  return (
    <form className="form-container">
      <fieldset className="form-fieldset">
        <label
          className={`form-label ${
            nameStatus === InputStatus.ERROR ? "text-error" : ""
          } `}
          htmlFor="name"
        >
          Name
        </label>
        <input
          value={name}
          id="name"
          onChange={handleNameChange}
          type="text"
          name="name"
          className={`form-input ${getInputStatusStyle(nameStatus)}`}
          placeholder="Please enter your name."
        />

        <div className="text-error form-error">
          {nameStatus === InputStatus.ERROR && nameError}
        </div>
      </fieldset>

      <fieldset className="form-fieldset">
        <label
          className={`form-label ${
            ageStatus === InputStatus.ERROR ? "text-error" : ""
          } `}
          htmlFor="age"
        >
          Age
        </label>
        <input
          id="age"
          value={age}
          onChange={handleAgeChange}
          type="number"
          name="age"
          className={`form-input ${getInputStatusStyle(ageStatus)}`}
          placeholder="Please enter your age."
        />

        <div className="text-error form-error">
          {ageStatus === InputStatus.ERROR && ageError}
        </div>
      </fieldset>

      <div className="button-container">
        <button
          onClick={handleReset}
          type="button"
          className="form-button reset-button"
        >
          Reset
        </button>

        <button
          onClick={handleSubmit}
          type="button"
          className="form-button submit-button"
        >
          Submit
        </button>
      </div>

      <pre className="debug">
        <code>{JSON.stringify({ name, age }, null, 2)}</code>
      </pre>
    </form>
  );
}

export default RegisterForm;