'use client';
import React from 'react';
import ContentFreelance from './ContentFreelance';
import { freelanceProjects } from '@/Data/globalData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const Freelance = () => {
  return (
    <>
      <div className="text-myBack-800 min-h-svh pb-28 overflow-auto mb-40">
        <h2 className=' font-bold title pl-2 xxs:pl-8 mb-4 pt-28 text-[clamp(2.3rem,6vw,3.75rem)]'>Freelance</h2>
        <div className='flex gap-20 pl-2 xxs:pl-8'>
          <Swiper 
            modules={[Pagination]}
            spaceBetween={30}
            className='pl-24'
            breakpoints={{
              1500: {
                slidesPerView: 3.2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 2.5,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
              395: {
                slidesPerView: 1.1,
                spaceBetween: 12,
              },
              0: {
                slidesPerView: 1.1,
                spaceBetween: 6,
              }
            }}
          >
            {freelanceProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <ContentFreelance {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Freelance;



  