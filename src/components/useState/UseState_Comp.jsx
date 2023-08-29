import React, { useState } from "react";

const total = [100, 200, 400, 300];
export default function UseState_Comp() {
  // phạm vi viết code JS
  const [count, setCount] = useState(() => {
    console.log("initial running...");
    // Đối với initialState là 1 callback thì nó sẽ lấy giá trị được return từ callback là intialState
    const totalCount = total.reduce((prevValue, currentValue) => {
      return prevValue + currentValue;
    }, 0);
    return totalCount;
  });

  console.log("re-render");

  // hàm xử lý tăng
  const handleCount = () => {
    // cập nhật lại giá trị của state
    setCount(count + 1);
  };

  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={handleCount}>Count</button>
    </>
  );
}
