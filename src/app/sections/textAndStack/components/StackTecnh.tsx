'use client';
import React, { useEffect, useRef, useState } from 'react'
import { myStack } from '@/Data/stackIconst'

export const StackTecnh = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const animationRef = useRef<number | null>(null)
    const [items, setItems] = useState(myStack.map((tech, index) => ({
        ...tech,
        id: index,
        position: index * 200 // AUMENTADO: más separación entre elementos
    })))
    
    useEffect(() => {
        const container = containerRef.current
        if (!container) return
        
        const ELEMENT_WIDTH = 140 // AUMENTADO: ancho del elemento incluyendo texto más grande
        const ELEMENT_SPACING = 60 // AUMENTADO: más espaciado entre elementos
        const ELEMENT_TOTAL_WIDTH = ELEMENT_WIDTH + ELEMENT_SPACING // 200px total
        const SPEED = 1.5 // Velocidad de movimiento
        
        const animate = () => {
            setItems(prevItems => {
                return prevItems.map((item, index) => {
                    let newPosition = item.position - SPEED
                    
                    // Detectar si el elemento ha salido completamente por el límite izquierdo
                    if (newPosition + ELEMENT_WIDTH < 0) {
                        // Encontrar la posición del último elemento (más a la derecha)
                        const lastElementPosition = Math.max(...prevItems.map(i => i.position))
                        
                        // Colocar este elemento después del último
                        newPosition = lastElementPosition + ELEMENT_TOTAL_WIDTH
                    }
                    
                    return {
                        ...item,
                        position: newPosition
                    }
                })
            })
            
            animationRef.current = requestAnimationFrame(animate)
        }
        
        animate()
        
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])
    
    return (
        <div className="overflow-hidden relative w-full containerTech min-h-[400px] flex items-center" ref={containerRef}>
            <div 
                className="relative h-32" // AUMENTADO: altura del contenedor para acomodar elementos más grandes
            >
                {items.map((item) => (
                    <div 
                        key={`stack-${item.id}`} 
                        className="absolute flex flex-col items-center justify-center min-w-[140px] px-4" // AUMENTADO: min-width y padding
                        style={{
                            transform: `translateX(${item.position}px)`,
                            left: 0,
                            top: 0,
                            transition: 'none'
                        }}
                    >
                        <item.icon className="w-28 h-28 text-myBack-800 mb-3" /> {/* AUMENTADO: iconos más grandes y más margen */}
                        <p className="text-3xl font-bold text-center text-myBack-800 leading-tight"> {/* AUMENTADO: texto más grande y bold */}
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
            <style>
                {` 
                    .containerTech::before{
                        content:'';
                        position:absolute;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        width: 300px;
                        background: linear-gradient(90deg, transparent 0%, #eebd82 81%);
                        z-index: 5;
                    }
                    .containerTech::after{
                        content:'';
                        position:absolute;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        width:300px;
                        background: linear-gradient(270deg, transparent 0%, #eebd82 81%);
                        z-index: 5;
                    }
                `}  
            </style>
        </div>
    )
}

export default StackTecnh