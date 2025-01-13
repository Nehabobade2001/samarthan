




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
import { HiPhoto } from "react-icons/hi2";

const Gallary = () => {
  const slidesData = [
    { image: image5, title: 'Dug well construc...', description: 'Dug well construction in the drought provides needed cash and water in Pichor...', link: '#' },
    { image: image5, title: 'Online application...', description: 'Online application through kiosks facilitates information for widow pension...', link: '#' },
    { image: image1, title: 'Dug well construc...', description: 'Dug well construction in the drought provides needed cash and water in Pichor...', link: '#' },
    { image: image2, title: 'Online application...', description: 'Online application through kiosks facilitates information for widow pension...', link: '#' },
    { image: image3, title: 'Dug well construc...', description: 'Dug well construction in the drought provides needed cash and water in Pichor...', link: '#' },
    { image: image4, title: 'Online application...', description: 'Online application through kiosks facilitates information for widow pension...', link: '#' },
    { image: image5, title: 'Dug well construc...', description: 'Dug well construction in the drought provides needed cash and water in Pichor...', link: '#' },
    { image: image5, title: 'Online application...', description: 'Online application through kiosks facilitates information for widow pension...', link: '#' },
    { image: image1, title: 'Dug well construc...', description: 'Dug well construction in the drought provides needed cash and water in Pichor...', link: '#' },
    { image: image2, title: 'Online application...', description: 'Online application through kiosks facilitates information for widow pension...', link: '#' },
    { image: image3, title: 'Dug well construc...', description: 'Dug well construction in the drought provides needed cash and water in Pichor...', link: '#' },
    { image: image4, title: 'Online application...', description: 'Online application through kiosks facilitates information for widow pension...', link: '#' },
    { image: image5, title: 'Online application...', description: 'Online application through kiosks facilitates information for widow pension...', link: '#' },
    { image: image1, title: 'Dug well construc...', description: 'Dug well construction in the drought provides needed cash and water in Pichor...', link: '#' },
    { image: image2, title: 'Online application...', description: 'Online application through kiosks facilitates information for widow pension...', link: '#' },
    { image: image3, title: 'Dug well construc...', description: 'Dug well construction in the drought provides needed cash and water in Pichor...', link: '#' },
    { image: image4, title: 'Online application...', description: 'Online application through kiosks facilitates information for widow pension...', link: '#' },
    { image: image5, title: 'Dug well construc...', description: 'Dug well construction in the drought provides needed cash and water in Pichor...', link: '#' },
    { image: image5, title: 'Online application...', description: 'Online application through kiosks facilitates information for widow pension...', link: '#' },
    { image: image1, title: 'Dug well construc...', description: 'Dug well construction in the drought provides needed cash and water in Pichor...', link: '#' },
    { image: image2, title: 'Online application...', description: 'Online application through kiosks facilitates information for widow pension...', link: '#' },
    { image: image3, title: 'Dug well construc...', description: 'Dug well construction in the drought provides needed cash and water in Pichor...', link: '#' },
    { image: image4, title: 'Online application...', description: 'Online application through kiosks facilitates information for widow pension...', link: '#' },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-10 sm:px-8 lg:px-16">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center flex items-center justify-between mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center">
  <span className="text-red-500 text-4xl mr-2">
    <HiPhoto />
  </span>
  Photo Gallery
</h2>
         
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        
          navigation
          modules={[Autoplay, Pagination, Navigation]}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden w-full max-w-[320px]">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallary;






