'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useTransform, useScroll } from 'motion/react';
import Freelance from "./freelance/Freelance";
import WhoAmI from "./whoAmI/WhoAmI";

const ChangeBackColor: React.FC = () => {
  // Constante configurable para el punto de activación de la opacidad de Freelance
  const FREELANCE_FADE_TRIGGER = 0.5; // 0.5 = mitad del componente (puedes modificar este valor)
  
  // Estado para controlar la opacidad de Freelance (inmediata, no conectada al scroll)
  const [freelanceOpacity, setFreelanceOpacity] = useState(1);

  const containerRef = useRef<HTMLDivElement>(null);
  const whoAmIRef = useRef<HTMLDivElement>(null);
  
  // Scroll tracking para el contenedor completo (para controlar Freelance)
  const { scrollYProgress: containerScrollProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Scroll tracking específico para WhoAmI
  const { scrollYProgress } = useScroll({
    target: whoAmIRef,
    offset: ['start end', 'start center'], // Cambio rápido cuando WhoAmI aparece
  });

  // Efecto para detectar cuando se alcanza el trigger y cambiar opacidad inmediatamente
  useEffect(() => {
    const unsubscribe = containerScrollProgress.on('change', (progress) => {
      if (progress >= FREELANCE_FADE_TRIGGER) {
        setFreelanceOpacity(0); // Cambio inmediato a opacidad 0
      } else {
        setFreelanceOpacity(1); // Vuelve a opacidad 1 cuando está por debajo del trigger
      }
    });

    return () => unsubscribe();
  }, [containerScrollProgress, FREELANCE_FADE_TRIGGER]);

  // Transición muy rápida en pocos píxeles
  const colorProgress = useTransform(
    scrollYProgress,
    [0, 0.98], // Solo 10% del scroll para cambio completo
    [0, 1],
    { clamp: true }
  );

  const calculateBackground = (progress: number): string => {
    // Color inicial: #eebd82 (238, 189, 130)
    const startR = 238;
    const startG = 189;
    const startB = 130;
    // Color final: #242424 (36, 36, 36)
    const endR = 36;
    const endG = 36;
    const endB = 36;

    const r = Math.round(startR + (endR - startR) * progress);
    const g = Math.round(startG + (endG - startG) * progress);
    const b = Math.round(startB + (endB - startB) * progress);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const backgroundColor = useTransform(colorProgress, (progress) => calculateBackground(progress));

  return (
    <motion.section
      ref={containerRef}
      className="relative"
      style={{ backgroundColor }}
    >
      <motion.div style={{ opacity: freelanceOpacity }}>
        <Freelance />
      </motion.div>
       
      <div ref={whoAmIRef}>
        <WhoAmI />
      </div>
    </motion.section>
  );
};

export default ChangeBackColor;