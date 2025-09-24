import React from 'react';

const WhoAmI: React.FC = () => {
  return (
    <div className='bg-myBack-800 text-myGray-300 pt-28' id='whoami'>
      <div className='max-w-[var(--myMaxWidth)] mx-auto text-center'>
        <h2 className="text-6xl font-bold text-white mb-4">
          ¿Quién soy?
        </h2>
        <p className="text-xl text-gray-300">
          Un poco sobre mí y mi trayectoria
        </p>
      </div>
      <div className='max-w-[var(--myMaxWidth)] mx-auto px-4 py-16'>
        <div className='flex flex-col md:flex-row items-center gap-12'>
          <div className='md:w-1/2'>
            <img 
              src="/img/profile.jpg" 
              alt="Mauro Vigliero" 
              className="rounded-full w-64 h-64 object-cover mx-auto md:mx-0 shadow-lg border-4 border-myOrange-400"
            />
          </div>
          <div className='md:w-1/2 text-lg leading-relaxed text-left'>
            <p className='mb-4'>
              ¡Hola! Soy Mauro Vigliero, un desarrollador Full Stack apasionado por la creación de soluciones web eficientes y escalables. Mi viaje en el mundo de la programación comenzó con una curiosidad insaciable por cómo funcionan las cosas detrás de la pantalla, y desde entonces, no he parado de aprender y construir.
            </p>
            <p className='mb-4'>
              Con experiencia tanto en el frontend como en el backend, disfruto de la versatilidad de trabajar en todas las capas de una aplicación. Me encanta transformar ideas complejas en interfaces de usuario intuitivas y funcionales, al mismo tiempo que diseño arquitecturas robustas y optimizadas en el lado del servidor.
            </p>
                    <p className='mb-4'>
                      Soy un firme creyente en el aprendizaje continuo y siempre estoy explorando nuevas tecnologías y mejores prácticas. Mi objetivo es no solo escribir código, sino crear productos que generen un impacto positivo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  );
};

export default WhoAmI;  