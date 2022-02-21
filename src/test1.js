import React from "react";

const test = ({ my_name, changeFunc }) => {
  return (
    <>
      <h1>This is test component!!</h1>
      <h1>{my_name}</h1>
      <input
        type="text"
        value={my_name}
        onChange={(e) => {
          changeFunc(e.target.value);
        }}
      ></input>
    </>
  );
};

export default test;
