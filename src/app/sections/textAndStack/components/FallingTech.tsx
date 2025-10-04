'use client';
import { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';
import React, { ReactElement } from 'react';
import TechCard from './TechCard';
import { TechItem } from '../../../types';

interface FallingTechProps {
  techStack?: TechItem[];
  trigger?: 'auto' | 'scroll' | 'click' | 'hover';
  backgroundColor?: string;
  wireframes?: boolean;
  gravity?: number;
  mouseConstraintStiffness?: number;
  iconSize?: number;
  highlightTechs?: string[];
}

// Tipo extendido para el contenedor con cleanup
interface ExtendedHTMLDivElement extends HTMLDivElement {
  _cleanup?: () => void;
}

const FallingTech: React.FC<FallingTechProps> = ({
  techStack = [],
  trigger = 'auto',
  backgroundColor = 'transparent',
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  iconSize = 24,
  highlightTechs = []
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const mouseConstraintRef = useRef<Matter.MouseConstraint | null>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  
  const [effectStarted, setEffectStarted] = useState(false);
  const [techComponents, setTechComponents] = useState<ReactElement[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Hook para detectar cambios en el tamaño de ventana
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(true); // Siempre en modo "móvil" para deshabilitar drag
    };
    
    checkMobile(); // Verificar inicial
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const components = techStack.map((tech, index) => {
      const isHighlighted = highlightTechs.includes(tech.name);
      return (
        <TechCard
          key={index}
          tech={tech}
          // iconSize={iconSize}
          isHighlighted={isHighlighted}
          index={index}
        />
      );
    });
    setTechComponents(components);
  }, [techStack, iconSize, highlightTechs]);

  const resetEffect = () => {
    setEffectStarted(false);
    
    const extendedContainer = containerRef.current as ExtendedHTMLDivElement;
    if (extendedContainer && extendedContainer._cleanup) {
      extendedContainer._cleanup();
    }
    
    if (techRef.current) {
      const techElements = techRef.current.querySelectorAll('.tech-item');
      techElements.forEach((elem) => {
        const element = elem as HTMLElement;
        element.style.position = '';
        element.style.left = '';
        element.style.top = '';
        element.style.transform = '';
        element.style.zIndex = '';
      });
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        const nowVisible = entry.isIntersecting;
        
        setIsVisible(nowVisible);
        
        if (nowVisible && !wasVisible) {
          if (trigger === 'scroll' || trigger === 'auto') {
            setTimeout(() => setEffectStarted(true), 100);
          }
        }
        
        if (!nowVisible && wasVisible) {
          resetEffect();
        }
      },
      { 
        threshold: 0.4,
        rootMargin: '0px'
      }
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [trigger, isVisible]);

  useEffect(() => {
    if (trigger === 'auto' && isVisible) {
      setEffectStarted(true);
      return;
    }
  }, [trigger, isVisible]);

  useEffect(() => {
    if (!effectStarted || techComponents.length === 0 || !isVisible) return;

    const timeout = setTimeout(() => {
      const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;
      
      if (!containerRef.current || !canvasContainerRef.current || !techRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const width = containerRect.width;
      const height = containerRect.height - 16; 

      if (width <= 0 || height <= 0) return;

      const engine = Engine.create();
      engineRef.current = engine;
      engine.world.gravity.y = gravity;

      const render = Render.create({
        element: canvasContainerRef.current,
        engine,
        options: {
          width,
          height,
          background: backgroundColor,
          wireframes
        }
      });

      const boundaryOptions = {
        isStatic: true,
        render: { fillStyle: 'transparent' }
      };

      const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
      const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
      const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
      const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

      const techElements = techRef.current.querySelectorAll('.tech-item');
      const techBodies = [...techElements].map(elem => {
        const rect = elem.getBoundingClientRect();
        const x = rect.left - containerRect.left + rect.width / 2;
        const y = rect.top - containerRect.top + rect.height / 2;
        
        const body = Bodies.rectangle(x, y, rect.width, rect.height, {
          render: { fillStyle: 'transparent' },
          restitution: 0.6,
          frictionAir: 0.01,
          friction: 0.3
        });

        Matter.Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 3,
          y: (Math.random() - 0.5) * 2
        });

        Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.03);

        return { elem, body };
      });

      techBodies.forEach(({ elem, body }) => {
        const element = elem as HTMLElement;
        element.style.position = 'absolute';
        element.style.left = `${body.position.x}px`;
        element.style.top = `${body.position.y}px`;
        element.style.transform = 'translate(-50%, -50%)';
        element.style.zIndex = '10';
      });

      // Deshabilitar mouse constraint para todas las pantallas (solo efecto visual)
      const isMobileDevice = true; // Forzar modo sin interacción para todas las pantallas

      let mouseConstraint: Matter.MouseConstraint | null = null;
      
      if (!isMobileDevice) {
        // Solo crear mouse constraint en desktop
        const mouse = Mouse.create(containerRef.current);
        mouseConstraint = MouseConstraint.create(engine, {
          mouse,
          constraint: {
            stiffness: mouseConstraintStiffness,
            render: { visible: false }
          }
        });
        mouseConstraintRef.current = mouseConstraint;
        render.mouse = mouse;
      }

      // Crear array de elementos para agregar al mundo
      const worldElements: Matter.Body[] = [
        floor, 
        leftWall, 
        rightWall, 
        ceiling, 
        ...techBodies.map(tb => tb.body)
      ];

      // Solo agregar mouseConstraint si existe (desktop)
      if (mouseConstraint) {
        World.add(engine.world, [...worldElements, mouseConstraint]);
      } else {
        World.add(engine.world, worldElements);
      }

      const runner = Runner.create();
      Runner.run(runner, engine);
      Render.run(render);

      let animationFrame: number;
      const updateLoop = () => {
        if (!isVisible) return;
        
        techBodies.forEach(({ body, elem }) => {
          const { x, y } = body.position;
          const element = elem as HTMLElement;
          element.style.left = `${x}px`;
          element.style.top = `${y}px`;
          element.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
        });
        
        Matter.Engine.update(engine);
        animationFrame = requestAnimationFrame(updateLoop);
      };
      
      updateLoop();

      const cleanup = () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
        Render.stop(render);
        Runner.stop(runner);
        if (render.canvas && canvasContainerRef.current) {
          try {
            canvasContainerRef.current.removeChild(render.canvas);
          } catch {
            // Canvas ya removido - variable 'e' removida para evitar warning
          }
        }
        World.clear(engine.world, false);
        Engine.clear(engine);
      };

      // Asignar función cleanup al contenedor
      const extendedContainer = containerRef.current as ExtendedHTMLDivElement;
      if (extendedContainer) {
        extendedContainer._cleanup = cleanup;
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      // Capturar el valor actual del ref para evitar warning de React hooks
      const currentContainer = containerRef.current as ExtendedHTMLDivElement;
      if (currentContainer && currentContainer._cleanup) {
        currentContainer._cleanup();
      }
    };
  }, [effectStarted, techComponents, gravity, wireframes, backgroundColor, mouseConstraintStiffness, isVisible, isMobile]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === 'click' || trigger === 'hover') && isVisible) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-[1] w-full h-full text-center p-8 overflow-hidden"
      style={{ 
        touchAction: 'pan-y' // Permitir scroll vertical en todas las pantallas
      }}
      onClick={trigger === 'click' ? handleTrigger : undefined}
      onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
    >
      <div
        ref={techRef}
        className="inline-block max-w-4xl"
      >
        <div className="flex flex-wrap justify-center items-center">
          {techComponents}
        </div>
      </div>
      <div 
        className="absolute top-0 left-0 z-0" 
        ref={canvasContainerRef} 
        style={{ 
          touchAction: 'none',
          pointerEvents: 'none' // Deshabilitar eventos del canvas para todas las pantallas
        }}
      />
    </div>
  );
};

export default FallingTech