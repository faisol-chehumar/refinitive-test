import { useReducer } from "react";

import { isPrime, isFibonacci } from "../utils";

const initialState = {
  calculateType: "IS_PRIME",
  isTrue: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "IS_PRIME":
      return isPrime(payload.number)
        ? {
            calculateType: type,
            isTrue: true,
          }
        : {
            calculateType: type,
            isTrue: false,
          };
    case "IS_FIBONACCI":
      const newState = { calculateType: type };
      return isFibonacci(payload.number)
        ? {
            ...newState,
            isTrue: true,
          }
        : {
            ...newState,
            isTrue: false,
          };
    default:
      return state;
  }
};

const useCalculateReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};

export default useCalculateReducer;
