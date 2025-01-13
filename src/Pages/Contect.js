
import React, { useEffect, useState } from "react";

const Contect = () => {
  const initialFeatures = [
    { number: 0, targetNumber: 700, title: "Rural Youths", description: "Capacity Building on primary care in COVID-19 management", bgColor: "bg-white" },
    { number: 0, targetNumber: 500, title: "PHC / CHC", description: "Capacity Building on primary care in COVID-19 management", bgColor: "bg-white" },
    { number: 0, targetNumber: 20, title: "Doctors Trained", description: "Enhancing medical skills", bgColor: "bg-white" },
    { number: 0, targetNumber: 41500, title: "Health Workers", description: "Training on primary care and pandemic management", bgColor: "bg-white" },
    { number: 0, targetNumber: 700, title: "Rural Youths", description: "Capacity Building on primary care in COVID-19 management", bgColor: "bg-white" },
    { number: 0, targetNumber: 500, title: "PHC / CHC", description: "Capacity Building on primary care in COVID-19 management", bgColor: "bg-white" },
    { number: 0, targetNumber: 20, title: "Doctors Trained", description: "Enhancing medical skills", bgColor: "bg-white" },
    { number: 0, targetNumber: 41500, title: "Health Workers", description: "Training on primary care and pandemic management", bgColor: "bg-white" },
    { number: 0, targetNumber: 300000, title: "Rural Youths", description: "Capacity Building on primary care in COVID-19 management", bgColor: "bg-white" },
    { number: 0, targetNumber: 500, title: "PHC / CHC", description: "Capacity Building on primary care in COVID-19 management", bgColor: "bg-white" },
    { number: 0, targetNumber: 800, title: "Doctors Trained", description: "Enhancing medical skills", bgColor: "bg-white" },
    { number: 0, targetNumber: 3000, title: "Health Workers", description: "Training on primary care and pandemic management", bgColor: "bg-white" },
    { number: 0, targetNumber: 235200, title: "Rural Youths", description: "Capacity Building on primary care in COVID-19 management", bgColor: "bg-white" },
    { number: 0, targetNumber: 19800, title: "PHC / CHC", description: "Capacity Building on primary care in COVID-19 management", bgColor: "bg-white" },
    { number: 0, targetNumber: 20, title: "Doctors Trained", description: "Enhancing medical skills", bgColor: "bg-white" },
    { number: 0, targetNumber: 750, title: "Health Workers", description: "Training on primary care and pandemic management", bgColor: "bg-white" },
  ];

  const [features, setFeatures] = useState(initialFeatures);

  useEffect(() => {
    features.forEach((feature, index) => {
      const interval = setInterval(() => {
        setFeatures((prevFeatures) => {
          const updatedFeatures = [...prevFeatures];
          const currentFeature = updatedFeatures[index];
          if (currentFeature.number < currentFeature.targetNumber) {
            currentFeature.number += Math.ceil(currentFeature.targetNumber / 100); // Adjust speed here
          } else {
            clearInterval(interval);
          }
          return updatedFeatures;
        });
      }, 50); // Speed of number update
    });
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center flex-wrap "
      style={{ backgroundImage: "linear-gradient(to right, #0073B0, #16589D)" }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-2">
        Last Mile
      </h1>

     






<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-6">
  {features.map((feature, index) => (
    <div
      key={index}
      className="relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-10 rounded-2xl"></div>
      <div className="relative z-10 text-center">
        <h3 className="text-2xl font-extrabold text-blue-800">
          {feature.number.toLocaleString()}
        </h3>
        <h4 className="text-lg font-semibold text-gray-700 mt-2">
          {feature.title}
        </h4>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default Contect;





