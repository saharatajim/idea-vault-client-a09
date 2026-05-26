"use client"
import Image from 'next/image';
import React from 'react';
import { ArrowRightCircle, Send } from 'lucide-react'; // icon library
import banner from '../../../assets/banner-1.png';
import { Swiper, SwiperSlide } from 'swiper/react';



// import required modules
import { Pagination,Autoplay} from 'swiper/modules';
const Banner = () => {
  return (
    <div>
        
          <Swiper
           autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
         loop={true}
         pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
             <div className="relative w-full h-125">
    
      <Image
        src={banner}
        alt="IdeaVault Banner"
        fill
        className="object-cover inset-0"
       
      />

      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-blue-900/60 to-cyan-600/40 inset-0"></div>

     
      <div className="absolute top-0 scale-80 md:scale-100 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white inset-0 space-y-5">
        <h1 className="text-5xl font-extrabold mb-4">Scale Your Vision Instantly</h1>
        <p className="text-lg max-w-xl">
          Connect with innovators, builders, and co-founders to grow your startup ideas transparently.
        </p>
       <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-lg transition">
            Explore Ideas
            <ArrowRightCircle size={20} />
          </button>

          <button className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full shadow-lg transition">
            Submit Your Concept
            <Send size={20} />
          </button>
        </div>
      </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="relative w-full h-125">
    
      <Image
        src={banner}
        alt="IdeaVault Banner"
        fill
        className="object-cover inset-00"
       
      />

      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-blue-900/60 to-cyan-600/40 z-10"></div>

     
      <div className="absolute scale-80 md:scale-100 top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white z-20 space-y-5">
        <h1 className="text-5xl font-extrabold mb-4">Real-time Metrics & Collaboration</h1>
        <p className="text-lg max-w-xl">
         Leverage crowd validation rather than traditional siloed development. Refined ideas stand out with real community feedback.
        </p>
       <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-lg transition">
            Explore Ideas
            <ArrowRightCircle size={20} />
          </button>

          <button className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full shadow-lg transition">
            Submit Your Concept
            <Send size={20} />
          </button>
        </div>
      </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="relative w-full h-125">
    
      <Image
        src={banner}
        alt="IdeaVault Banner"
        fill
        className="object-cover inset-0
        
        "
       
      />

      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-blue-900/60 to-cyan-600/40 z-10"></div>

     
      <div className="scale-80 md:scale-100 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white z-20 space-y-5">
        <h1 className="text-5xl font-extrabold mb-4">A Platform Built for Innovation Models</h1>
        <p className="text-lg max-w-xl">
          Leverage crowd validation rather than traditional siloed development. Refined ideas stand out with real community feedback.
        </p>
       <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-lg transition">
            Explore Ideas
            <ArrowRightCircle size={20} />
          </button>

          <button className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full shadow-lg transition">
            Submit Your Concept
            <Send size={20} />
          </button>
        </div>
      </div>
         </div>
        </SwiperSlide>
      
  
      </Swiper>
    </div>
  );
};

export default Banner;
