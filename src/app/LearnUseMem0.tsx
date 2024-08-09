"use client";

import React, { useEffect, useMemo, useState } from "react";

const LearnUseMem0 = () => {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState(false);

  const fetchallData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();

      if (result && result.products) setData(result.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchallData();
  }, []);

  console.log(data);

  const getfilteredProducts = (getProducts) => {
    return getProducts && getProducts.length > 0
      ? getProducts.filter((item) => item.price > 50)
      : [];
  };
  const memorisefilteredproducts = useMemo(
    () => getfilteredProducts(data),
    [data]
  );

  return (
    <div>
      <div className="text-center">
        <h1>Hello UseMemeo</h1>
        <ul>
          {memorisefilteredproducts.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>

        <button className="bg-yellow-400" onClick={() => setTheme(!theme)}>
          Toogle Theme
        </button>
        <h2>{theme ? "light" : "dark"}</h2>
      </div>
    </div>
  );
};

export default LearnUseMem0;
