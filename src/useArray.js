import React from "react";

const throwError = (msg) => {
  throw new Error(msg);
};
const useArray = (defaultArray) => {
  const [array, setArray] = React.useState(defaultArray);

  const push = (elm) => {
    setArray((prev) => [...prev, elm]);
  };

  const filter = (func) => {
    try {
      if (!(typeof func === "function"))
        throwError(`${func} is not a function`);
      setArray((prev) => prev.filter(func));
    } catch (err) {
      console.error(err);
    }
  };

  const remove = (index) => {
    try {
      if (index >= array.length || index < 0)
        throwError(
          " Index was out of range. Must be non-negative and less than the size of the array"
        );
      setArray((prev) => [
        ...prev.slice(0, index),
        ...prev.slice(index + 1, prev.length),
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  const removeElement = (value) => {
    try {
      const index = array.findIndex((elm) => elm === value);
      if (index === -1)
        throwError("the element with the given value doesn't exist");
      remove(index);
    } catch (err) {
      console.error(err);
    }
  };

  const removeObject = (attribute, value) => {
    try {
      if (!array.every((elm) => typeof elm === "object"))
        throwError("The given array must be an array of objects");
      filter((elm) => {
        elm[attribute] !== value;
      });
    } catch (err) {
      console.error(err);
    }
  };

  const update = (index, element) => {
    setArray((prev) => [
      ...prev.slice(0, index),
      element,
      ...prev.slice(index + 1, prev.length),
    ]);
  };

  const clear = () => {
    setArray([]);
  };

  return {
    array,
    push,
    filter,
    remove,
    update,
    removeElement,
    removeObject,
    clear,
  };
};

export default useArray;
