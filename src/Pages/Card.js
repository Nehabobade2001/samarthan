


import React, { useEffect, useState } from "react";

const Card = () => {
  const initialFeatures = [
    {
      number: "Manuals",
      title: "Read more..",
      description: "Capacity Building on primary care in COVID-19 management",
      
    },
    {
      number: "Research Reports",
     
      title: "Read more..",
      description: "Capacity Building on primary care in COVID-19 management",
     
    },
    {
      number: "Our Projects",
    
      title: "Read more..",
      description: "Capacity Building on primary care in COVID-19 management",
      bgColor: "",
    },
  ];

  const [features, setFeatures] = useState(initialFeatures);

  useEffect(() => {
    features.forEach((feature, index) => {
      const interval = setInterval(() => {
        setFeatures((prevFeatures) => {
          const updatedFeatures = [...prevFeatures];
          const currentFeature = updatedFeatures[index];
          if (currentFeature.number < currentFeature.targetNumber) {
            currentFeature.number += Math.ceil(currentFeature.targetNumber / 100);
          } else {
            clearInterval(interval);
          }
          return updatedFeatures;
        });
      }, 50);
    });
  }, []);

  return (
    <div className=" flex flex-col items-center  justify-center flex-wrap bg-white px-6 py-12">
    

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative  bg-[#16589D] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 bg-[#16589D] opacity-10 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.number}
              </h3>
             
              <p className="text-white mt-4 text-sm leading-relaxed">
                {feature.description}
              </p>
              <h4 className="text-lg font-semibold mt-2 py-2 bg-blue-950 rounded-full text-white">
                {feature.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
