"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

const LearnUseLayout = () => {
  const divRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = "John Doe";
    console.log("Useeffect called");
  }, []);

  useLayoutEffect(() => {
    const getdivRef = divRef.current;

    getdivRef.style.opacity = 0;

    setTimeout(() => {
      getdivRef.style.opacity = 1;
      getdivRef.style.color = "red";
    }, 1000);

    console.log(getdivRef);
  }, []);

  return (
    <div className="text-center mt-4">
      <h1 className="font-bold">Use layout</h1> <br />
      <div ref={divRef}>Hello World</div>
      <input ref={inputRef} type="text" value={"Ashish"} />
    </div>
  );
};

export default LearnUseLayout;
