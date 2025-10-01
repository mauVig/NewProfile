import React from 'react'
import ScrollReveal from './components/ScrollReveal'
import StackTechText from './components/StackTechText'

const TextAndStack = () => {
    return (
        <div className='bg-myOrange-700 pb-28 pt-14'>
            <div className='flex justify-center items-center text-myBack-800 p-4 '>
                <div className='max-w-[var(--myMaxWidth)] px-8'>
                    <ScrollReveal
                        baseOpacity={0}
                        enableBlur={true}
                        baseRotation={15}
                        blurStrength={10}
                        staggerDelay={0.015}  
                        scrollDistance="bottom+=1% bottom" 
                    >
                        Me encanta programar en cualquier lenguaje. Pero no solo es hacer, sino que también es aprender, estudiar, practicar, desafiarse a uno mismo. Disfruto del tiempo programando algún lenguaje, framework o librería.
                    </ScrollReveal>
                </div>            
            </div>
            <div className="max-w-[var(--myMaxWidth)] mx-auto mt-8">
                <StackTechText />
            </div>
        </div>
    )
}

export default TextAndStack 