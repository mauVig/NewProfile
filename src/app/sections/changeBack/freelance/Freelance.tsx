'use client';
import React from 'react';
import ContentFreelance from './ContentFreelance';
import { freelanceProjects } from '@/Data/globalData';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const Freelance = () => {
  return (
    <>
      <div className="text-myBack-800 min-h-svh pb-28">
        <div className="max-w-[var(--myMaxWidth)] mx-auto px-8">
          <h2 className=' font-bold title  mb-4 pt-28 text-[clamp(2.3rem,6vw,3.75rem)]'>Freelance</h2>
          <div className='flex gap-20'>
            <Swiper 
              pagination={true}  
              spaceBetween={30}
              className='mr-24'
              breakpoints={{
                // Cuando la pantalla es >= 1500px
                1500: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
                // Cuando la pantalla es >= 1200px pero < 1500px
                1200: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                // Cuando la pantalla es >= 768px pero < 1200px
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                // Cuando la pantalla es >= 480px pero < 768px
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 15,
                },
                // Cuando la pantalla es >= 390px pero < 480px
                395: {
                  slidesPerView: 1.2,
                  spaceBetween: 12,
                },
                // Cuando la pantalla es < 480px
                0: {
                  slidesPerView: 1,
                  spaceBetween: 6,
                }
              }}
            >
              {freelanceProjects.map((project, index) => (
                <SwiperSlide key={index}>
                  <ContentFreelance 
                    urlLink={project.urlLink}
                    alt={project.alt}
                    title={project.title}
                    description={project.description}
                    techOrder={project.techOrder}
                    urlImage={project.urlImage}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Freelance;



  