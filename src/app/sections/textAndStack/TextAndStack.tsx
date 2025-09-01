import React from 'react'
import ScrollReveal from './components/ScrollReveal'
import StackTecnh from './components/StackTecnh'
import StackTechText from './components/StackTechText'

const TextAndStack = () => {
    return (
        <div className='bg-myOrange-700 py-28'>
            <div className='flex justify-center items-center text-myBack-800 p-4 '>
                <div className='max-w-[var(--myMaxWidth)]'>
                    <ScrollReveal
                        baseOpacity={0}
                        enableBlur={true}
                        baseRotation={15}
                        blurStrength={10}
                        staggerDelay={0.015}  
                        scrollDistance="bottom+=9% bottom" 
                    >
                        Me encanta programar en cualquier lenguaje. Pero no solo es hacer, sino que también es aprender, estudiar, practicar, desafiarse a uno mismo. Disfruto del tiempo programando algún lenguaje, framework o librería.
                    </ScrollReveal>
                </div>            
            </div>
            <div className="max-w-[var(--myMaxWidth)] mx-auto">
                <StackTechText />
            </div>
        </div>
    )
}

export default TextAndStack