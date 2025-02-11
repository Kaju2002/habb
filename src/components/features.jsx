import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container mx-auto px-4">

      <div className="section-title text-center mb-12">
  <h2 className="text-3xl font-bold text-gray-800">Features</h2>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {props.data
    ? props.data.map((d, i) => (
        <div key={`${d.title}-${i}`} className="text-center p-6 bg-white shadow-lg rounded-lg">
          <i className={`${d.icon} text-4xl sm:text-5xl md:text-6xl text-blue-500 mb-4`}></i>
          <h3 className="text-xl font-semibold text-gray-700">{d.title}</h3>
          <p className="text-gray-600 text-sm">{d.text}</p>
        </div>
      ))
    : "Loading..."}
</div>

      </div>
    </div>
  );
};
