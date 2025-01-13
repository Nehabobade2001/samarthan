
// import React from "react";
// import map from '../assets/rb_31570.png';
// import maps from '../assets/2149377696.jpg';

// const Video = () => {
//   return (
//     <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-10 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {/* Left - Map Section */}
//           <div className="bg-white p-8 shadow-2xl rounded-lg border border-gray-200">
//             <h2 className="text-3xl font-extrabold text-blue-900 mb-6">Our Outreach</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h3 className="text-blue-700 font-semibold text-lg mb-2">Madhya Pradesh</h3>
//                 <img
//                   src={maps}
//                   alt="Map of Madhya Pradesh"
//                   className="w-full h-auto rounded-lg shadow-lg border border-gray-300"
//                 />
//                 <ul className="space-y-1 mt-4 text-gray-700">
//                   <li>1028 Gram Panchayats</li>
//                   <li>1781 Villages</li>
//                   <li>12 Districts</li>
//                   <li>1.28 lakh Households</li>
//                   <li>9.13 lakh Individuals</li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-pink-600 font-semibold text-lg mb-2">Chhattisgarh</h3>
//                 <img
//                   src={map}
//                   alt="Map of Chhattisgarh"
//                   className="w-full h-auto rounded-lg shadow-lg border border-gray-300"
//                 />
//                 <ul className="space-y-1 mt-4 text-gray-700">
//                   <li>1036 Gram Panchayats</li>
//                   <li>1826 Villages</li>
//                   <li>13 Districts</li>
//                   <li>2.26 lakh Households</li>
//                   <li>9.54 lakh Individuals</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="mt-8">
//               <p className="text-lg font-semibold text-blue-700 mb-1">Total (MP & CG)</p>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
//                 <p><span className="font-bold">2064</span> Gram Panchayats</p>
//                 <p><span className="font-bold">3607</span> Villages</p>
//                 <p><span className="font-bold">25</span> Districts</p>
//                 <p><span className="font-bold">3.54 lakh</span> Households</p>
//                 <p><span className="font-bold">18.67 lakh</span> Individuals</p>
//               </div>
//             </div>
//           </div>

//           {/* Right - Video Gallery */}
//           <div className="bg-white p-8 shadow-2xl rounded-lg border border-gray-200">
//             <h2 className="text-3xl font-extrabold text-blue-900 mb-6 flex items-center gap-3">
//               <span className="w-5 h-5 bg-red-600 rounded-full"></span> Video Gallery
//             </h2>
//             <div className="space-y-6">
//               <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-300 aspect-video">
//                 <iframe
//                   className="w-full h-full"
//                   src="https://www.youtube.com/embed/cmrPpjZFvkw"
//                   title="Outreach Video 1"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//               <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-300 aspect-video">
//                 <iframe
//                   className="w-full h-full"
//                   src="https://www.youtube.com/embed/Ntxr7mdmQco"
//                   title="Outreach Video 2"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </div>
//             <div className="text-right mt-6">
//               <a
//                 href="#more"
//                 className="text-blue-700 hover:underline text-base font-semibold"
//               >
//                 View more &rarr;
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Video;












import React from "react";
import map from '../assets/rb_31570.png';
import maps from '../assets/2149377696.jpg';

const Video = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Map Section */}
          <div className="bg-white p-6 lg:p-8 shadow-lg rounded-xl border border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-6">Our Outreach</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-blue-700 font-semibold text-lg mb-2">Madhya Pradesh</h3>
                <img
                  src={maps}
                  alt="Map of Madhya Pradesh"
                  className="w-full h-auto rounded-lg shadow-lg border border-gray-300"
                />
                <ul className="space-y-1 mt-4 text-gray-700">
                  <li>1028 Gram Panchayats</li>
                  <li>1781 Villages</li>
                  <li>12 Districts</li>
                  <li>1.28 lakh Households</li>
                  <li>9.13 lakh Individuals</li>
                </ul>
              </div>
              <div>
                <h3 className="text-pink-600 font-semibold text-lg mb-2">Chhattisgarh</h3>
                <img
                  src={map}
                  alt="Map of Chhattisgarh"
                  className="w-full h-auto rounded-lg shadow-lg border border-gray-300"
                />
                <ul className="space-y-1 mt-4 text-gray-700">
                  <li>1036 Gram Panchayats</li>
                  <li>1826 Villages</li>
                  <li>13 Districts</li>
                  <li>2.26 lakh Households</li>
                  <li>9.54 lakh Individuals</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-lg font-semibold text-blue-700 mb-1">Total (MP & CG)</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-lg">
                <p><span className="font-bold">2064</span> Gram Panchayats</p>
                <p><span className="font-bold">3607</span> Villages</p>
                <p><span className="font-bold">25</span> Districts</p>
                <p><span className="font-bold">3.54 lakh</span> Households</p>
                <p><span className="font-bold">18.67 lakh</span> Individuals</p>
              </div>
            </div>
          </div>

          {/* Right - Video Gallery */}
          <div className="bg-white p-6 lg:p-8 shadow-lg rounded-xl border border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-6 flex items-center gap-3">
              <span className="w-5 h-5 bg-red-600 rounded-full"></span> Video Gallery
            </h2>
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-300 aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/cmrPpjZFvkw"
                  title="Outreach Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-300 aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Ntxr7mdmQco"
                  title="Outreach Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="text-right mt-6">
              <a
                href="#more"
                className="text-blue-700 hover:underline text-base font-semibold"
              >
                View more &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
