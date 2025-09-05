'use client';
import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  // Nuevos parámetros para controlar la suavidad
  staggerDelay?: number;
  scrollDistance?: string;
  // Nuevo parámetro para controlar cuándo empieza la animación
  visibilityThreshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom+=50% bottom",
  wordAnimationEnd = "bottom+=100% bottom",
  staggerDelay = 0.02,
  scrollDistance = "bottom+=150% bottom",
  visibilityThreshold = 20, // Nuevo parámetro: porcentaje de visibilidad para empezar
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  
  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;
        
    const startPoint = `top bottom-${9000 - visibilityThreshold}%`;
    
    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "power2.out",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: startPoint, // Empieza cuando el threshold se cumple
          end: rotationEnd,
          scrub: 1.5,
          // markers: true, // Descomenta para debug
        },
      }
    );

    const wordElements = el.querySelectorAll<HTMLElement>(".word");

    // Animación de opacidad - Empieza cuando el elemento tiene la visibilidad deseada
    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity, filter, transform" },
      {
        ease: "power2.out",
        opacity: 1,
        stagger: staggerDelay,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: startPoint, // Empieza cuando el threshold se cumple
          end: scrollDistance,
          scrub: 2,
          // markers: true, // Descomenta para debug
        },
      }
    );

    // Animación de blur - Empieza cuando el elemento tiene la visibilidad deseada
    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: "power2.out",
          filter: "blur(0px)",
          stagger: staggerDelay,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: startPoint, // Empieza cuando el threshold se cumple
            end: scrollDistance,
            scrub: 2,
            // markers: true, // Descomenta para debug
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
    staggerDelay,
    scrollDistance,
    visibilityThreshold, // Agregar la nueva dependencia
  ]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;