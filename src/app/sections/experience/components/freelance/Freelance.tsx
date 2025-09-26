import React from 'react';
import ContentFreelance from './ContentFreelance';

const Freelance = () => {
  return (
    <>
        <h2 className='text-6xl font-bold title ml-44 mb-4 mt-8'>Freelance</h2>
        <div className='flex gap-20 pl-44 sm:pr-44 pr-4'>
          <ContentFreelance 
            urlLink='https://motionclinic.com.ar/'
            alt='Motion Clinic'
            title='Motion Clinic'
            description='"Este es un sitio web que todavía sigo actualizando, es para un centro de cirugía robótica de cadera y rodilla."'
            techOrder={[
              'Astro',
              'React',
              'Node Js',
              'Tailwind CSS',
              'HTML 5',
              'CSS 3',
              'JavaScript'
            ]}
            urlImage='/img/motion.jpg'
          />
          <ContentFreelance 
            urlLink='https://adviters.com/en'
            alt='Adviters'
            title='Adviters'
            description='"En este sitio me concentré en hacer efectos de al hacer scroll y animaciones suaves para mejorar la experiencia del usuario."'
            techOrder={[
              'Astro',
              'React',
              'Node Js',
              'Tailwind CSS',
              'HTML 5',
              'CSS 3',
              'JavaScript'
            ]}
            urlImage='/img/adviters.jpg'
          />
          <ContentFreelance 
            urlLink='https://lifeispink.org/'
            alt='Pink'
            title='Pink'
            description='" Este sitio se hizo para una agencia de diseño, Y la particularidad es que se realizó sin ningún framework."'
            techOrder={[
              'HTML 5',
              'CSS 3',
              'JavaScript'
            ]}
            urlImage='/img/pink.jpg'
          />
        </div> 
    </>
  );
};

export default Freelance;
