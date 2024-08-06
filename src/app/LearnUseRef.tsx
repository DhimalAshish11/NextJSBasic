"use client";

import React, { useEffect, useRef } from "react";

const LearnUseRef = () => {
  const countValue = useRef(0);
  const DivRef = useRef();
  const inputRef = useRef();

  const handleOnClick = () => {
    countValue.current++;

    console.log(countValue.current);
  };

  useEffect(() => {
    const getDIvRef = DivRef.current;
    console.log(getDIvRef);
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="text-center mt-4">
      <button
        onClick={handleOnClick}
        className="font-bold bg-blue-500 text-white py-2 px-4 rounded"
      >
        Click me
      </button>

      <div ref={DivRef} className="hello">
        Hello World
      </div>

      <input ref={inputRef} type="text" placeholder="Enter some points" />
    </div>
  );
};

export default LearnUseRef;
