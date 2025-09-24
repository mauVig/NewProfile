'use client'
import React from 'react'
import { myStack } from '@/Data/stackIconst'
import FallingTech from './FallingTech'
import { BsArrowDownCircleFill } from 'react-icons/bs'

export const StackTechText: React.FC = () => {
    return (
        <div className="h-[400px] ">
            <FallingTech
                techStack={myStack}
                trigger="scroll"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.56}
                mouseConstraintStiffness={0.9}
                iconSize={44}
                highlightTechs={[]}
            />
            <div className='flex justify-center mt-4'>
                <a href="#experience">
                    <BsArrowDownCircleFill size={50} className='text-myBack-800'/>
                </a>
            </div>
        </div>
    )
}

export default StackTechText