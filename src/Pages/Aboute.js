import React from "react";
import images from "../assets/about.webp";
import { GiMissileMech } from "react-icons/gi";
import { FaLowVision } from "react-icons/fa";

const Aboute = () => {
  return (
    <>
      <div className="bg-white text-gray-800 px-8 py-4 flex items-center flex-wrap justify-center">
        <div className="max-w-6xl mx-auto md:1/2 lg:w-1/2 bg-white rounded-2xl shadow-lg">
          <h1 className="text-3xl text-[#011842] font-bold mb-6">
            Who are we?
          </h1>
          <p className="text-sm font-semibold font-sans leading-relaxed mb-6">
            Samarthan-Centre for Development Support is a leading non-profit
            organisation working in the Indian states of Madhya Pradesh and
            Chhattisgarh since 1995. We believe that community participation is
            foundational for sustained and equitable development. Effective
            participation by all stakeholders, especially the marginalised,
            socially excluded and disadvantaged groups, is necessary for
            sustainable development.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
          <h3 className="text-xl font-semibold mb-2">
            Welcome to Samarthan-Centre for Development Support!
          </h3>
          <p className="text-xs font-semibold leading-relaxed mb-6">
            Samarthan-Centre for Development Support operates as a registered
            Public Charitable Trust under the Madhya Pradesh Public Trusts Act
            of 1951. 'Samarthan' embodies the essence of support, encapsulating
            our core mission of fostering people-centered development processes
            that are participatory, inclusive, and constructive.
          </p>
          <p className="text-xs font-semibold leading-relaxed mb-6">
            Initially, Samarthan worked to build small and medium-sized
            voluntary organisations to function as ‘vision and mission’ driven
            organisations. Effective management as non-profit organisations to
            maximise impact was one of the most critical capacity-building focus
            as a support organisation. It helped build a large informal network
            of grassroots-level voluntary organisations in undivided Madhya
            Pradesh.
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 "></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4">
          <img
            src={images}
            alt="Samarthan team"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
        <div className="flex items-center justify-between flex-col mt-8 bg-white rounded-2xl shadow-lg flex-wrap">
        <div className="mb-2">
          <span className="flex items-center space-x-2">
            <FaLowVision className="text-4xl text-blue-800" />
            <h4 className="text-xl font-bold mb-0">Our Vision</h4>
          </span>

          <p className="text-md font-sans font-semibold">
            Every citizen contributes meaningfully in shaping Welfare State of
            India and enjoys benefits based on the principles of equality and
            equity.shaping Welfare.
          </p>
        </div>
        <div>
          <span className="flex items-center space-x-2">
            <GiMissileMech className="text-4xl text-blue-800" />
            <h4 className="text-xl font-bold mb-0">Our Mission</h4>
          </span>

          <p className="text-md font-sans font-semibold">
            Every citizen contributes meaningfully in shaping Welfare State of
            India and enjoys benefits based on the principles of equality and
            equity shaping Welfare.
          </p>
        </div>
      </div>
      </div>

     
    </>
  );
};

export default Aboute;









