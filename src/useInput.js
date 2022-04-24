import React from "react";
import useDebounce from "./useDebounce";

const useInput = (validate) => {
  const [value, setValue] = React.useState("");
  const state = useDebounce(value, 500);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const isValid = validate && Boolean(state) ? validate(value) : true;

  return [state, handleChange, isValid];
};

export default useInput;
