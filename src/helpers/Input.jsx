import React from "react";
import "./helper.css";
const Input = ({
  id,
  type,
  value,
  onChange,
  onBlur,
  label,
  error,
  touched,
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        className="inputfield_css peer"
        required="required"
        autoComplete="off"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={id} className="labelfeild_css">
        {label}
      </label>
      {error && touched && (
        <span className="text-[12px] text-red-700">{error}</span>
      )}
    </div>
  );
};

export default Input;
