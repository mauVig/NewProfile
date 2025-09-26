import { ComponentType } from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export interface TechItem {
  name: string;
  icon: ComponentType<IconProps>;
}