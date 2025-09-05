'use client';
import { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';
import React, { ReactElement } from 'react';
import TechCard from './TechCard';

interface TechItem {
  name: string;
  icon: React.ComponentType<any>;
}

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const techRef = useRef<HTMLDivElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const [effectStarted, setEffectStarted] = useState(false);
  const [techComponents, setTechComponents] = useState<ReactElement[]>([]);

  // Crear los componentes de tecnología
  useEffect(() => {
    const components = techStack.map((tech, index) => {
      const isHighlighted = highlightTechs.includes(tech.name);
      return (
        <TechCard
          key={index}
          tech={tech}
          iconSize={iconSize}
          isHighlighted={isHighlighted}
          index={index}
        />
      );
    });
    setTechComponents(components);
  }, [techStack, iconSize, highlightTechs]);

  // Trigger effects
  useEffect(() => {
    if (trigger === 'auto') {
      setEffectStarted(true);
      return;
    }

    if (trigger === 'scroll' && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.95 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  // Physics effect
  useEffect(() => {
    if (!effectStarted || techComponents.length === 0) return;

    // Pequeño delay para asegurar que los elementos están renderizados
    const timeout = setTimeout(() => {
      const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

      if (!containerRef.current || !canvasContainerRef.current || !techRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const width = containerRect.width;
      const height = containerRect.height - 16; 

      if (width <= 0 || height <= 0) return;

      const engine = Engine.create();
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

      // Boundaries
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

        // Velocidad inicial aleatoria
        Matter.Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 3,
          y: (Math.random() - 0.5) * 2
        });

        Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.03);

        return { elem, body };
      });

      // Posicionar elementos inicialmente
      techBodies.forEach(({ elem, body }) => {
        const element = elem as HTMLElement;
        element.style.position = 'absolute';
        element.style.left = `${body.position.x}px`;
        element.style.top = `${body.position.y}px`;
        element.style.transform = 'translate(-50%, -50%)';
        element.style.zIndex = '10';
      });

      // Mouse interaction
      const mouse = Mouse.create(containerRef.current);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: mouseConstraintStiffness,
          render: { visible: false }
        }
      });

      render.mouse = mouse;

      World.add(engine.world, [
        floor, 
        leftWall, 
        rightWall, 
        ceiling, 
        mouseConstraint, 
        ...techBodies.map(tb => tb.body)
      ]);

      const runner = Runner.create();
      Runner.run(runner, engine);
      Render.run(render);

      // Update loop
      const updateLoop = () => {
        techBodies.forEach(({ body, elem }) => {
          const { x, y } = body.position;
          const element = elem as HTMLElement;
          element.style.left = `${x}px`;
          element.style.top = `${y}px`;
          element.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
        });
        Matter.Engine.update(engine);
        requestAnimationFrame(updateLoop);
      };

      updateLoop();

      // Cleanup function
      const cleanup = () => {
        Render.stop(render);
        Runner.stop(runner);
        if (render.canvas && canvasContainerRef.current) {
          canvasContainerRef.current.removeChild(render.canvas);
        }
        World.clear(engine.world, false);
        Engine.clear(engine);
      };

      // Store cleanup in container for later use
      (containerRef.current as any)._cleanup = cleanup;
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (containerRef.current && (containerRef.current as any)._cleanup) {
        (containerRef.current as any)._cleanup();
      }
    };
  }, [effectStarted, techComponents, gravity, wireframes, backgroundColor, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-[1] w-full h-full cursor-pointer text-center p-8 overflow-hidden"
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
      <div className="absolute top-0 left-0 z-0" ref={canvasContainerRef} />
    </div>
  );
};

export default FallingTech;
