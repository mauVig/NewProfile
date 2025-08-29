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
  rotationEnd = "bottom+=50% bottom", // Modificado para más scroll
  wordAnimationEnd = "bottom+=100% bottom", // Modificado para más scroll
  staggerDelay = 0.02, // Menor delay para más suavidad
  scrollDistance = "bottom+=150% bottom", // Nueva prop para controlar distancia
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

    // Animación de rotación - MÁS SUAVE Y LARGA
    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "power2.out", // Cambiado de "none" a "power2.out" para más suavidad
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=10%", // Empieza un poco antes
          end: rotationEnd,
          scrub: 1.5, // Agregado scrub con valor para más suavidad (antes era true)
        },
      }
    );

    const wordElements = el.querySelectorAll<HTMLElement>(".word");

    // Animación de opacidad - MÁS SUAVE Y LARGA
    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity, filter, transform" }, // Agregado más propiedades
      {
        ease: "power2.out", // Cambiado para más suavidad
        opacity: 1,
        stagger: staggerDelay, // Usar la prop personalizable
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=30%", // Empieza antes
          end: scrollDistance, // Usar la nueva prop personalizable
          scrub: 2, // Más suave (antes era true)
        },
      }
    );

    // Animación de blur - MÁS SUAVE Y LARGA
    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: "power2.out", // Más suavidad
          filter: "blur(0px)",
          stagger: staggerDelay, // Usar la prop personalizable
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=30%", // Empieza antes
            end: scrollDistance, // Usar la nueva prop personalizable
            scrub: 2, // Más suave
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