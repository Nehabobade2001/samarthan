






// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import image1 from "../assets/26229.jpg";
// import image2 from "../assets/2781.jpg";
// import image3 from "../assets/29480.jpg";
// import image4 from "../assets/7666.jpg";
// import image5 from '../assets/samarthan-watermark.webp';

// const Award = () => {
//   const slidesData = [
//     { image: image3,  description: 'Dug well construction in the drought provides needed cash and water in Pichor...', link: '#' },
//     { image: image4, title: 'Online application...', description: 'Samarthan was recognized with Freedom Award 2016 for the work with the bonded labour in Panna district, MP. Free the Slaves had', link: '#' },
//     { image: image1, title: 'Dug well construc...', description: 'Samarthan was recognized with Freedom Award 2016 for the work with the bonded labour in Panna district, MP. Free the Slaves had', link: '#' },
//     { image: image2, title: 'Online application...', description: 'Samarthan was recognized with Freedom Award 2016 for the work with the bonded labour in Panna district, MP. Free the Slaves had', link: '#' },
//   ];

//   return (
//     <div className="bg-gradient-to-r from-blue-50 to-[#D7E6F3] px-4 py-10 sm:px-8 lg:px-16">
//       <div className="max-w-screen-lg mx-auto">
//         <div className="text-center flex items-center justify-center mb-10">
//           <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800">
//             AWARDS & RECOGNITION
//           </h2>
//         </div>
//         <div className='flex items-center justify-evenly gap-4'>
//           {slidesData.map((slide, index) => (
//             <div key={index} className="flex justify-center">
//               <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden w-full max-w-[300px]">
//                 <div className="overflow-hidden group">
//                   <img
//                     src={slide.image}
//                     alt={`Slide ${index + 1}`}
//                     className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="p-5">
//                   {/* <h3 className="text-lg font-semibold text-gray-700">{slide.title}</h3> */}
//                   <p className="text-sm text-gray-600 mt-2 font-sarif font-semibold line-clamp-2">
//                     {slide.description}
//                   </p>
//                   <a
//                     href={slide.link}
//                     className="text-blue-500 hover:text-blue-700 mt-3 inline-block text-sm font-medium"
//                   >
//                     Read More ➞
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Award;








import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from "../assets/26229.jpg";
import image2 from "../assets/2781.jpg";
import image3 from "../assets/29480.jpg";
import image4 from "../assets/7666.jpg";
import image5 from '../assets/samarthan-watermark.webp';

const Award = () => {
  const slidesData = [
    { image: image3, description: 'Dug well construction in the drought provides needed cash and water in Pichor...', link: '#' },
    { image: image4, title: 'Online application...', description: 'Samarthan was recognized with Freedom Award 2016 for the work with the bonded labour in Panna district, MP. Free the Slaves had', link: '#' },
    { image: image1, title: 'Dug well construc...', description: 'Samarthan was recognized with Freedom Award 2016 for the work with the bonded labour in Panna district, MP. Free the Slaves had', link: '#' },
    { image: image2, title: 'Online application...', description: 'Samarthan was recognized with Freedom Award 2016 for the work with the bonded labour in Panna district, MP. Free the Slaves had', link: '#' },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-[#D7E6F3] px-4 py-10 sm:px-8 lg:px-16">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center flex items-center justify-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
            AWARDS & RECOGNITION
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {slidesData.map((slide, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden w-full max-w-[300px]">
                <div className="overflow-hidden group">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  {/* <h3 className="text-lg font-semibold text-gray-700">{slide.title}</h3> */}
                  <p className="text-sm text-gray-600 mt-2 font-serif font-semibold line-clamp-2">
                    {slide.description}
                  </p>
                  <a
                    href={slide.link}
                    className="text-blue-500 hover:text-blue-700 mt-3 inline-block text-sm font-medium"
                  >
                    Read More ➞
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Award;
