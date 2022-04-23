import React from "react";

function useDebounce(value, delay) {
  const [state, setState] = React.useState(value);

  React.useEffect(() => {
    let timer;
    timer = setTimeout(() => setState(value), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return state;
}

export default useDebounce;
