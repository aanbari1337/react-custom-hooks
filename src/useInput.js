import React from "react";
import useDebounce from "./useDebounce";

const useInput = (validate, debounce) => {
  const [value, setValue] = React.useState("");
  const debouncedValue = debounce ? useDebounce(value, 500) : undefined;

  const handleChange = (e) => {
    let type = e.target.type;
    let value = e.target.value;
    switch (type) {
      case "checkbox":
        value = e.target.checked;
        break;
      case "file":
        value = e.target.files;
        break;
      case "number":
        value = Number(e.target.value);
        break;
      default:
        break;
    }
    setValue(value);
  };
  const isValid = validate && Boolean(debouncedValue) ? validate(value) : true;

  return { debouncedValue, value, handleChange, isValid };
};

export default useInput;
