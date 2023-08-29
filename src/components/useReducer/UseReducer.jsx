import React, { useReducer, useState } from "react";
// useState
// + khai bao gia tri khoi tao
// + bat su kien tang giam va xu ly

// useReducer
// + khai bao gia tri khoi tao
// + bat su kien tang giam va xu ly
// + tao reducer de xu ly logic
// + truyen dispath

// b1: khai bao gia tri khoi tao.
const initialValue = 0;
// b2: tao cac hanh dong
const UP_ACTION = "up";
const DOWN_ACTION = "down";
export default function UseReducer() {
  // b3: tao reducer
  /**
   * ham reducer
   * @param {*} state state hien tai
   * @param {*} action hanh dong
   */
  const reducer = (state, action) => {
    switch (action) {
      case UP_ACTION:
        return state + 1;
      case DOWN_ACTION:
        return state - 1;

      default:
        return state;
    }
  };
  // ham xu ly tang
  //   const handleIncrease = () => {
  //     setCount(count + 1);
  //   };

  // ham xu ly giam
  //   const handleDecrease = () => {
  //     setCount(count - 1);
  //   };
  // b4: goi ra useReducer
    const [count, dispatch] = useReducer(reducer, initialValue);
    
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Tang</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Giam</button>
    </>
  );
}
