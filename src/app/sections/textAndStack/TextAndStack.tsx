import React from 'react'
import ScrollReveal from './components/ScrollReveal'
import StackTecnh from './components/StackTecnh'

const TextAndStack = () => {
    return (
        <div className='bg-myOrange-700'>
            <div className=' flex justify-center items-center text-myBack-800 p-4 text-center pt-28'>
                <div className='pt-20'>
                    <ScrollReveal
                        baseOpacity={0}
                        enableBlur={true}
                        baseRotation={5}
                        blurStrength={10}
                        staggerDelay={0.015}  // Más suave
                        scrollDistance="bottom+=200% bottom"  // Más scroll necesario
                    >
                        Me encanta programar en cualquier lenguaje. Pero no solo es hacer, sino que también es aprender, estudiar, practicar, desafiarse a uno mismo. Disfruto del tiempo programando algún lenguaje, framework o librería.
                    </ScrollReveal>
                </div>            
            </div>
            <StackTecnh />
        </div>
    )
}

export default TextAndStack