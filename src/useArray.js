import React from "react";

const throwError = (msg) => {
  throw new Error(msg);
};
const useArray = (defaultArray) => {
  const [array, setArray] = React.useState(defaultArray);

  const push = React.useCallback(
    (elm) => {
      setArray((prev) => [...prev, elm]);
    },
    [elm]
  );

  const filter = React.useCallback(
    (func) => {
      try {
        if (!(typeof func === "function"))
          throwError(`${func} is not a function`);
        setArray((prev) => prev.filter(func));
      } catch (err) {
        console.error(err);
      }
    },
    [func]
  );

  const remove = React.useCallback(
    (index) => {
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
    },
    [index]
  );

  const removeElement = React.useCallback(
    (value) => {
      try {
        const index = array.findIndex((elm) => elm === value);
        if (index === -1)
          throwError("the element with the given value doesn't exist");
        remove(index);
      } catch (err) {
        console.error(err);
      }
    },
    [value]
  );

  const removeObject = React.useCallback(
    (attribute, value) => {
      try {
        if (!array.every((elm) => typeof elm === "object"))
          throwError("The given array must be an array of objects");
        filter((elm) => {
          elm[attribute] !== value;
        });
      } catch (err) {
        console.error(err);
      }
    },
    [attribute, value]
  );

  const update = React.useCallback(
    (index, element) => {
      try {
        if (index >= array.length || index < 0)
          throwError(
            " Index was out of range. Must be non-negative and less than the size of the array"
          );
        setArray((prev) => [
          ...prev.slice(0, index),
          element,
          ...prev.slice(index + 1, prev.length),
        ]);
      } catch (err) {
        console.error(err);
      }
    },
    [index, element]
  );

  const clear = React.useCallback(() => {
    setArray([]);
  }, []);

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
