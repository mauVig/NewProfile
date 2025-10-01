'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { IoLogoLinkedin } from 'react-icons/io';
import { motion, useScroll, useTransform } from 'motion/react';

const WhoAmI: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Scroll tracking para el parallax del título
  const { scrollYProgress: titleScrollProgress } = useScroll({
    target: titleRef,
    offset: ['start end', 'end start']
  });

  // Movimiento sutil hacia arriba
  const titleY = useTransform(titleScrollProgress, [0, 1], [0, -300]);

  useEffect(() => {
    const container = containerRef.current;
    const imageElement = imageRef.current;
    
    if (!container || !imageElement) return;
    
    const viewportHeight = Math.min(window.innerHeight, 700); 
    container.style.height = `${viewportHeight * 1.5}px`;
    
    const MAX_TRANSLATE_X = 150;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const { top, bottom } = containerRect;
      const viewportHeight = Math.min(window.innerHeight, 800); 
      
      if (top < viewportHeight && bottom > 0) {
        const totalProgress = Math.abs(top) / container.offsetHeight;
        
        const scale = 1 + (totalProgress * 3); 

        if (top <= 0 && top > -container.offsetHeight * 0.8) {
          
          imageElement.style.position = 'fixed';
          imageElement.style.top = '0';
          
          const finalScale = Math.min(scale, 2); 
          const moveProgress = totalProgress * 2; 
          const translateX = Math.min(moveProgress * MAX_TRANSLATE_X, MAX_TRANSLATE_X); 
          
          imageElement.style.transform = `translateX(${translateX}%) scale(${finalScale})`;
          
          imageElement.style.transition = 'all 0.1s ease-out';
          imageElement.style.zIndex = '-1';
        } else if (top <= -container.offsetHeight * 0.8) {
          
          imageElement.style.position = 'fixed';
          imageElement.style.top = '0';
          imageElement.style.transform = `translateX(${MAX_TRANSLATE_X}%) scale(2)`; 
          imageElement.style.zIndex = '-1';
          imageElement.style.transition = 'none';
        } else {
          
          imageElement.style.position = 'initial';
          imageElement.style.transform = 'scale(1)';
          imageElement.style.zIndex = 'auto';
          imageElement.style.transition = 'none';
        }
      } else {
        
        if (bottom < 0) {
          
          imageElement.style.position = 'fixed';
          imageElement.style.top = '0';
          imageElement.style.transform = `translateX(${MAX_TRANSLATE_X}%) scale(2)`;
          imageElement.style.zIndex = '-1';
          imageElement.style.transition = 'none';
        } else if (top > viewportHeight) {
          
          imageElement.style.position = 'initial';
          imageElement.style.transform = 'scale(1)';
          imageElement.style.zIndex = 'auto';
          imageElement.style.transition = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);

    };
  }, []);

  return (
    <section className=' text-myGray-300 pt-22 '>
      <motion.h2 
        ref={titleRef}
        className='text-6xl font-bold title  mb-4 py-28 text-center'
        style={{ y: titleY }}
      >
        Quién soy?
      </motion.h2>
      <div 
        ref={containerRef}
        className='relative overflow-hidden'
      >
        <div className='sticky top-0 h-screen flex justify-center items-center'>
          <Image
            ref={imageRef}
            src="/img/full-stack-mauro-vigliero.png"
            alt="Imagen representativa de 'Quién soy'"
            width={600}
            height={400}
          />
        </div>
      </div>
      <div className="max-w-[var(--myMaxWidth)] mx-auto px-4 pb-16 text-lg leading-relaxed">
        <div className='text-myGray-300 sm:w-2/3'>
        
          <p className="mb-8 text-3xl font-bold leading-relaxed bg-gradient-to-r from-myOrange-400 to-myOrange-600 bg-clip-text text-transparent border-l-4 border-myOrange-500 pl-6 py-4">
            Soy Mauro Vigliero, un desarrollador que viene del mundo de la música y la creatividad, ¡Logré que el código y el arte se lleven muy bien! ✨
          </p>
          
          <p className="mb-8 text-xl leading-relaxed bg-myBack-700/50 rounded-lg p-6 border border-myGray-600/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-myBack-700/70">
            Mi historia arranca en la secundaria donde hice la especialización en programación aprendiendo con <span className="text-myOrange-400 font-semibold">Visual Basic</span>. Luego pasaron 10 años donde toqué en varias bandas como armoniquista, estudié locución en ISER y me recibí. En 2020, justo en la pandemia, estudié diseño y programación web en la escuela Da Vinci 📚 y desde ese entonces no paré de programar, encontrando una profesión que me hace feliz. 🎯 Hoy, cuento con <span className="text-myOrange-400 font-semibold">2 años de experiencia en el mundo corporativo y tambien 1 año y medio como freelance</span>.
          </p>
          
          <p className="mb-6 text-xl leading-relaxed bg-gradient-to-br from-myBack-700/40 to-myBack-600/40 rounded-xl p-6 border-2 border-myOrange-500/20 relative overflow-hidden">
           
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-myOrange-400/5 to-transparent"></span>
            <span className="relative z-10">
              Como programador <span className="text-myOrange-400 font-bold">Full-Stack</span>, fusiono mi experiencia artística con el rigor del código. No solo hago que las cosas funcionen, sino que busco que se vean increíbles. Me siento muy cómodo trabajando con Frontend utilizando <span className="bg-myOrange-500/20 px-2 py-1 rounded text-myOrange-300 font-semibold">React</span>, <span className="bg-myOrange-500/20 px-2 py-1 rounded text-myOrange-300 font-semibold">Next.js</span> y <span className="bg-myOrange-500/20 px-2 py-1 rounded text-myOrange-300 font-semibold">TypeScript</span>, y me defiendo muy bien en el Backend con <span className="bg-myOrange-500/20 px-2 py-1 rounded text-myOrange-300 font-semibold">Node.js</span> y <span className="bg-myOrange-500/20 px-2 py-1 rounded text-myOrange-300 font-semibold">Express.js</span>. Esta mezcla me permite encarar cualquier proyecto y transformarlo en una experiencia web que no solo es robusta y anda bien, sino que tiene un diseño innovador y que lo saca de lo común, como si fuera una canción bien hecha. 💡
            </span>
          </p>
          
          <div className="mt-12 text-center p-8 ">
            <p className="mb-6 text-xl leading-relaxed">
              ¿Te interesa mi perfil y querés charlar conmigo? 
              <span className="block mt-2 text-myOrange-400 font-semibold">
                ¡Hablemos por LinkedIn! 
              </span>
            </p>
            <div className="flex justify-center h-15">
              <a 
                href="https://www.linkedin.com/in/maurovigliero/" 
                target="_blank" 
                rel="noopener noreferrer"
              > 
                <button 
                    className="bg-myGray-800 text-myOrange-400 border border-myGray-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group hover:cursor-pointer flex items-center gap-3"
                >
                    <span className="bg-red-200 shadow-red-200 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    <IoLogoLinkedin size={30} />
                    Linkedin 
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;  