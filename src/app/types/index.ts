// ============================================
// TIPOS PRINCIPALES DEL PORTFOLIO
// ============================================

import { ReactElement, ComponentType } from 'react';

// ============================================
// TIPOS DE TECNOLOGÍAS Y STACK
// ============================================

export interface TechItem {
  name: string;
  icon: ComponentType<IconProps>;
}

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

// ============================================
// TIPOS DE FÍSICA/ANIMACIÓN (Matter.js)
// ============================================

export interface MatterEngine {
  world: MatterWorld;
  render?: MatterRender;
  runner?: MatterRunner;
}

export interface MatterWorld {
  bodies: MatterBody[];
  constraints: MatterConstraint[];
}

export interface MatterBody {
  id: number;
  position: { x: number; y: number };
  velocity: { x: number; y: number };
  render: {
    fillStyle?: string;
    strokeStyle?: string;
    lineWidth?: number;
  };
}

export interface MatterConstraint {
  bodyA?: MatterBody;
  bodyB?: MatterBody;
  pointA?: { x: number; y: number };
  pointB?: { x: number; y: number };
  stiffness: number;
}

export interface MatterRender {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  options: {
    width: number;
    height: number;
    wireframes: boolean;
    background: string;
  };
}

export interface MatterRunner {
  enabled: boolean;
  isFixed: boolean;
}

export interface MatterMouseConstraint extends MatterConstraint {
  mouse: {
    position: { x: number; y: number };
  };
}

// ============================================
// TIPOS DE COMPONENTES
// ============================================

export interface TechCardProps {
  tech: TechItem;
  iconSize?: number;
  isHighlighted?: boolean;
  index: number;
}

export interface FallingTechProps {
  techStack: TechItem[];
  gravity?: number;
  wireframes?: boolean;
  backgroundColor?: string;
  mouseConstraintStiffness?: number;
  iconSize?: number;
  highlightTechs?: string[];
}

// ============================================
// TIPOS DE DOM EXTENDIDOS
// ============================================

export interface ExtendedHTMLElement extends HTMLElement {
  _cleanup?: () => void;
}

// ============================================
// TIPOS DE EVENTOS
// ============================================

export interface CustomMouseEvent extends MouseEvent {
  offsetX: number;
  offsetY: number;
}

// ============================================
// TIPOS DE REFERENCIAS
// ============================================

export interface TechRefs {
  containerRef: React.RefObject<HTMLDivElement>;
  techRef: React.RefObject<HTMLDivElement>;
  canvasContainerRef: React.RefObject<HTMLDivElement>;
  observerRef: React.RefObject<IntersectionObserver | null>;
  mouseConstraintRef: React.RefObject<MatterMouseConstraint | null>;
  engineRef: React.RefObject<MatterEngine | null>;
}

// ============================================
// TIPOS DE ESTADO
// ============================================

export interface TechState {
  effectStarted: boolean;
  techComponents: ReactElement[];
  isVisible: boolean;
}

// ============================================
// UTILIDADES DE TIPOS
// ============================================

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;