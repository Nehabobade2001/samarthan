

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import image1 from "../assets/26229.jpg";
import image2 from "../assets/2781.jpg";
import image3 from "../assets/29480.jpg";
import image4 from "../assets/7666.jpg";


const App = () => {
  return (
    <div className="w-full ">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=" shadow-lg"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative">
            <img
              className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[68vh] w-full object-cover rounded-lg"
              src={image1}
              alt="Slide 1"
            />
            <div className="absolute top-6 left-6 bg-opacity-60 border-2 border-solid border-[#02B0E8] hover:bg-[#02B0E8] text-white py-2 px-4 rounded-md">
              <h2 className="text-lg sm:text-xl font-bold">Slide Title 1</h2>
              
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img
              className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[68vh] w-full border-2px border-solid hover:bg-[#02B0E8] object-cover rounded-lg"
              src={image2}
              alt="Slide 2"
            />
            <div className="absolute top-6 left-6 bg-opacity-60 border-2 border-solid border-[#02B0E8] hover:bg-[#02B0E8] text-white py-2 px-4 rounded-md">
              <h2 className="text-lg sm:text-xl font-bold">Slide Title 2</h2>
             
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative">
            <img
              className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[68vh] w-full object-cover rounded-lg"
              src={image3}
              alt="Slide 3"
            />
            <div className="absolute top-6 left-6 bg-opacity-60 border-2 border-solid border-[#02B0E8] hover:bg-[#02B0E8] text-white py-2 px-4 rounded-md">
  <h2 className="text-lg sm:text-xl font-bold">Slide Title 3</h2>
</div>

          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative">
            <img
              className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[68vh] w-full  object-cover rounded-lg"
              src={image4}
              alt="Slide 4"
            />
            <div className="absolute top-6 left-6 bg-opacity-60 border-2 border-solid border-[#02B0E8] hover:bg-[#02B0E8] text-white py-2 px-4 rounded-md">
              <h2 className="text-lg sm:text-xl font-bold">Slide Title 4</h2>
             
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;



