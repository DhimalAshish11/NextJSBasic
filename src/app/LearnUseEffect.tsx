"use client";
import { link } from "fs";
import React, { useEffect, useState } from "react";

const LearnUseEffect = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);

  const [productList, setProductList] = useState([]);

  const fetchAllProduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();

      if (result && result.products) setProductList(result.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    /* fetchAllProduct(); */
  }, []);

  useEffect(() => {
    if (count === 10) fetchAllProduct();
  }, [count]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="font-bold">Learn UseEffect</h1> <br />
        <p>Count is {count}</p> <br />
        {showText ? <p>Hello World</p> : null}
        <button
          className="font-bold bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increase Number
        </button>
        <ul>
          {productList && productList.length > 0
            ? productList.map((item) => <li>{item.title}</li>)
            : null}
        </ul>
      </div>
    </div>
  );
};

export default LearnUseEffect;
