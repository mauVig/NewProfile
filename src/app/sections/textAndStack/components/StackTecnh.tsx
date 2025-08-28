'use client';
import React from 'react'
import { myStack } from '@/Data/stackIconst'

export const StackTecnh = () => {
    const scrollStyles = {
        animation: 'scroll-infinite 20s linear infinite',
    }

    // Dividir myStack en dos arrays alternados
    const firstRow = myStack.filter((_, index) => index % 2 === 0)
    const secondRow = myStack.filter((_, index) => index % 2 === 1)
    
    return (
        <div className="overflow-hidden relative w-full py-4">
            <style>
                {`
                @keyframes scroll-infinite {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @keyframes scroll-infinite-reverse {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0); }
                }
                `}
            </style>
            
            {/* Primera fila */}
            <div 
                className="flex mb-4" 
                style={scrollStyles}
                onMouseEnter={(e) => (e.target as HTMLDivElement).style.animationPlayState = 'paused'}
                onMouseLeave={(e) => (e.target as HTMLDivElement).style.animationPlayState = 'running'}
            >
                {/* Primera copia de los elementos de la primera fila */}
                {firstRow.map((tech, index) => (
                    <div 
                        key={`first-row-${index}`} 
                        className="flex flex-col items-center justify-center min-w-[100px] flex-shrink-0 mx-4"
                    >
                        <tech.icon className="w-12 h-12 text-myBack-800" />
                        <p className="text-sm mt-2 text-center">{tech.name}</p>
                    </div>
                ))}
                {/* Segunda copia para el efecto infinito */}
                {firstRow.map((tech, index) => (
                    <div 
                        key={`first-row-duplicate-${index}`} 
                        className="flex flex-col items-center justify-center min-w-[100px] flex-shrink-0 mx-4"
                    >
                        <tech.icon className="w-12 h-12 text-myBack-800" />
                        <p className="text-sm mt-2 text-center">{tech.name}</p>
                    </div>
                ))}
            </div>

            {/* Segunda fila (dirección opuesta) */}
            <div 
                className="flex" 
                style={{
                    animation: 'scroll-infinite-reverse 20s linear infinite',
                }}
                onMouseEnter={(e) => (e.target as HTMLDivElement).style.animationPlayState = 'paused'}
                onMouseLeave={(e) => (e.target as HTMLDivElement).style.animationPlayState = 'running'}
            >
                {/* Primera copia de los elementos de la segunda fila */}
                {secondRow.map((tech, index) => (
                    <div 
                        key={`second-row-${index}`} 
                        className="flex flex-col items-center justify-center min-w-[100px] flex-shrink-0 mx-4"
                    >
                        <tech.icon className="w-12 h-12 text-myBack-800" />
                        <p className="text-sm mt-2 text-center">{tech.name}</p>
                    </div>
                ))}
                {/* Segunda copia para el efecto infinito */}
                {secondRow.map((tech, index) => (
                    <div 
                        key={`second-row-duplicate-${index}`} 
                        className="flex flex-col items-center justify-center min-w-[100px] flex-shrink-0 mx-4"
                    >
                        <tech.icon className="w-12 h-12 text-myBack-800" />
                        <p className="text-sm mt-2 text-center">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StackTecnh