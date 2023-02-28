import React from "react";

const ErrorMessage = ({ name, errors, touched }) => {
  if (errors && typeof errors[name] === "string" && touched[name]) {
    return (
      <label style={{ color: "red" }}>
        {errors[name]}
      </label>
    );
  }
  return null;
};
export default ErrorMessage;
