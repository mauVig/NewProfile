'use client';
import React, { useEffect, useRef } from 'react';
import Accenture from './components/Accenture';

interface ExperienceProps {
    // Add your props here if needed
}

const Experience: React.FC<ExperienceProps> = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<HTMLDivElement[]>([]);

   

    useEffect(() => {
        const container = containerRef.current;
        const section = sectionRef.current;
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

            // Cuando el contenedor esté en vista, calcular el progreso del scroll
            if (top <= 0) {
                const progress = Math.abs(top) / (scrollableWidth - viewportHeight);
                const scrollAmount = Math.min(progress * scrollableWidth, scrollableWidth);
                section.scrollLeft = scrollAmount;
            }

            // Efectos de aparición para cada item de experiencia
            itemRefs.current.forEach((item, index) => {
                if (!item) return;
                const rect = item.getBoundingClientRect();
                const isVisible = rect.left < window.innerWidth && rect.right > 0;
                const centerDistance = Math.abs((rect.left + rect.width / 2) - window.innerWidth / 2);
                const maxDistance = window.innerWidth / 2;
                const proximity = Math.max(0, 1 - centerDistance / maxDistance);
                
                const opacity = isVisible ? 1 : 0.3;
                const scale = isVisible ? 0.9 + (proximity * 0.1) : 0.85;

                item.style.opacity = opacity.toString();
                item.style.transform = `scale(${scale})`;
                item.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative bg-myBack-800 text-myGray-300 pt-28" ref={containerRef}>
            <div
                ref={sectionRef}
                className="sticky top-0 overflow-x-hidden"
                 style={{ paddingLeft: '50vw' }}
            >
                <div className="inline-flex min-w-[300vw] px-8 gap-12  h-full">
                    {/* Título inicial */}
                    <div 
                        ref={el => {
                            if (el) itemRefs.current[0] = el;
                        }}
                        className="w-[400px] flex-shrink-0 opacity-30"
                    >
                        <h2 className="text-6xl font-bold text-white mb-4">
                            Mi Experiencia
                        </h2>
                        <p className="text-xl text-gray-300">
                            Desliza hacia abajo para explorar mi trayectoria profesional
                        </p>
                    </div>
                    <Accenture />
                    <div 
                        className="w-[400px] flex-shrink-0  text-center"
                    >
                        <h3 className="text-4xl font-bold text-white mb-4">
                            ¿Trabajamos juntos?
                        </h3>
                        <p className="text-xl text-gray-300">
                            Estoy listo para el próximo desafío
                        </p>
                        <div className="mt-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                                Contactar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;