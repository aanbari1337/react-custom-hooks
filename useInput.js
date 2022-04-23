import { useReducer } from "react";

const initialState = {
  value: "",
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value };
    default:
      return initialState;
  }
};

const useInput = (validate) => {
  const [state, dispatch] = useReducer(inputReducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const isValid =
    validate && Boolean(state.value) ? validate(state.value) : true;

  return [state.value, handleChange, isValid];
};

export default useInput;
