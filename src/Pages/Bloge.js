import React from "react";
import blog from "../assets/blog.webp";

const Bloge = () => {
  return (
    <div className="bg-blue-50 py-10 px-5 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Blogs Section */}
        <div className="bg-white shadow-xl rounded-lg border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
            <span className="w-5 h-5 bg-red-500 rounded-full flex-shrink-0"></span>
            Our Blogs
          </h2>
          <div className="mt-5">
            <img
              src={blog}
              alt="Blog"
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Local Governments: Assessing Their Role in National Politics After
              Three Decades
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              The commemoration of the 24th April as Panchayati Raj Divas, amid
              ongoing Parliamentary elections, prompts a reflection on Mahatma
              Gandhi's vision for post-independence India...
              <a
                href="#readmore"
                className="text-red-500 font-semibold hover:underline"
              >
                {" "}
                [read more]
              </a>
            </p>
          </div>
        </div>

        {/* Events Section */}
        <div className="bg-white shadow-xl rounded-lg border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
            <span className="w-5 h-5 bg-red-500 rounded-full flex-shrink-0"></span>
            Upcoming Events
          </h2>
          <div className="mt-5 space-y-6">
            <div>
              <h3 className="text-blue-800 text-lg font-semibold">
                Jal Manthan - Join Our Mission for Safe and Healthy Water for
                All!
              </h3>
              <p className="text-sm font-sarif font-semibold text-gray-700 mt-2">
                We invite you to participate in our collaborative effort with
                the Government Medical College Raipur, the Department of
                Community Medicine, UNICEF, Health and PHED, and Samarthan. Your
                participation and insights are crucial in shaping a healthier
                future for our communities. 
              </p>
              <h3 className="text-lg font-semibold">
              Objectives
              </h3>
              <p className="text-sm font-sarif font-semibold text-gray-700 mt-2">
              Sanitation Promotion: Advocate for proper sanitation practices to minimize microbial contamination in water, aiming to decrease the incidence of acute diarrheal diseases.
              </p>
              <p className="text-sm font-sarif font-semibold text-gray-700 mt-2">
              Collaborative Efforts: Promote integration, convergence, and collaboration among Health, PHED, P&RD, other departments, Civil Society Organizations (CSOs), and related agencies to create safe water communities.
              </p>
              <p className="text-sm font-sarif font-semibold text-gray-700 mt-2">
              Join us in this vital mission. Together, we can make a difference!
              </p>
              
              <p className="text-sm font-sarif font-semibold text-gray-700 mt-2">
              Venue - The Govt Medical College Raipur, Department of Community Medicine 
              </p>
              
              <p className="text-sm mt-2">
                <span className="font-semibold">Date:</span> 30-May-2024 |
                <span className="ml-2 font-semibold">Time:</span> 10:00:00 AM
              </p>
            </div>
            <div>
              <h3 className="text-blue-800 font-semibold">
                Join us for a Transformative Training on UPGOG – FSSM Module
              </h3>
              <p className="text-sm font-sarif font-semibold text-gray-700 mt-2">
              Sanitation Promotion: Advocate for proper sanitation practices to minimize microbial contamination in water, aiming to decrease the incidence of acute diarrheal diseases.
              </p>
              <p className="text-sm font-sarif font-semibold text-gray-700 mt-2">
              Collaborative Efforts: Promote integration, convergence, and collaboration among Health, PHED, P&RD, other departments, Civil Society Organizations (CSOs), and related agencies to create safe water communities.
              </p>
              <p className="text-sm font-sarif font-semibold text-gray-700 mt-2">
              Join us in this vital mission. Together, we can make a difference!
              </p>
              
              <p className="text-sm font-sarif font-semibold text-gray-700 mt-2">
              Venue - The Govt Medical College Raipur, Department of Community Medicine 
              </p>
              
              <p className="text-sm mt-2">
                <span className="font-semibold">Date:</span> 30-May-2024 |
                <span className="ml-2 font-semibold">Time:</span> 10:00:00 AM
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bloge;
