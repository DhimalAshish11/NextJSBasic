"use client";

import React, { useState } from "react";
const initialState = {
  name: "",
  city: "",
};

const LearnHooks = () => {
  const [formData, setformData] = useState(initialState);
  console.log(initialState);

  const handleOnNameChange = (e) => {
    setformData({
      ...formData,
      name: e.target.value,
    });
  };

  const handleOnCityChange = (e) => {
    setformData({
      ...formData,
      city: e.target.value,
    });
  };
  console.log(formData);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/*  <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Learn Hooks</h1>
        <button
          onClick={handleOnClick}
          className="font-bold bg-blue-500 text-white py-2 px-4 rounded"
        >
          Click Me
        </button>

        {showText ? <p className="mt-4">Hello, my name is Ashish</p> : null}
      </div> */}

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Name:
          </label>
          <input
            onChange={handleOnNameChange}
            id="name"
            type="text"
            className="border p-2 rounded"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-lg font-medium">
            City:
          </label>
          <select
            onChange={handleOnCityChange}
            id="city"
            className="border p-2 rounded"
          >
            <option value="">Select a city</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
          </select>
          <div>
            <p>
              Name is {formData.name} <br />
              City is {formData.city}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LearnHooks;
