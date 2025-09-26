'use client';
import React, { useEffect, useRef } from 'react';
import Freelance from './components/freelance/Freelance';
import ConteinerExperience from './components/ConteinerExperience';

const Experience: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<HTMLDivElement[]>([]);
    const separatorRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const section = sectionRef.current;
        const separator = separatorRef.current;
        
        if (!container || !section) return;

        // Calcular el ancho total del contenido horizontal
        const sectionWidth = section.scrollWidth;
        const viewportHeight = window.innerHeight;
        const scrollableWidth = sectionWidth - window.innerWidth;
        
        // Establecer la altura del contenedor para crear el área de scroll
        container.style.height = `${scrollableWidth}px`;

        const handleScroll = () => {
            const containerRect = container.getBoundingClientRect();
            const { top } = containerRect;
            if (top <= 0) {
                const progress = Math.abs(top) / (scrollableWidth - viewportHeight);
                const scrollAmount = Math.min(progress * scrollableWidth, scrollableWidth);
                section.scrollLeft = scrollAmount;
            }
            // Efectos de aparición para cada item de experiencia con escala muy sutil
            itemRefs.current.forEach((item) => {
                if (!item) return;
                const rect = item.getBoundingClientRect();
                const isVisible = rect.left < window.innerWidth && rect.right > 0;
                const centerDistance = Math.abs((rect.left + rect.width / 2) - window.innerWidth / 2);
                const maxDistance = window.innerWidth / 2;
                const proximity = Math.max(0, 1 - centerDistance / maxDistance);
                
                const opacity = isVisible ? 1 : 0.3;
                // Escala muy sutil: de 0.95 a 1.0 exactamente
                const scale = isVisible ? 0.98 + (proximity * 0.02) : 0.98;
                
                item.style.opacity = opacity.toString();
                item.style.transform = `scale(${scale})`;
                item.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>  
            <div className='bg-myBack-800 text-myGray-300 pt-28' id='experience'>
                <div className='max-w-[var(--myMaxWidth)] mx-auto text-center' >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Mi Experiencia
                    </h2>
                    <p className="text-xl text-gray-300">
                        Desliza hacia abajo para explorar mi trayectoria profesional
                    </p>
                </div>
            </div>
            <div className="relative bg-myBack-800 text-myGray-300 pt-14 title" ref={containerRef}>
                <div
                    ref={sectionRef}
                    className="sticky top-0 overflow-x-hidden"
                    style={{ paddingLeft: '10vw' }}
                >
                    <div className="inline-flex px-8 h-full">
                        <div
                            className='mr-24 min-w-fit'
                        >
                            <ConteinerExperience 
                                company='Accenture' 
                                width={1100} 
                                img='/img/accImg.png' 
                                alt='Imagen de la esquina del edificio de la empresa en en modo dibujitos'
                            />
                        </div>
                        <div
                            className='mr-44 min-w-fit'
                        >
                            <ConteinerExperience 
                                company='Loesen' 
                                width={1600} 
                                img='/img/losen.png' 
                                alt='Imagen de que representa a una persona sentada en un escritorio trabajando con la página web de esta experiencia'
                            />
                        </div>
                        <img 
                            ref={separatorRef}
                            src="/separate.png" 
                             className='h-dvh '
                            alt="Separador de fondos de negro a naranja claro" 
                        />
                        <div className="bg-myOrange-700 text-myBack-800 min-h-svh pb-8">
                            <Freelance />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;