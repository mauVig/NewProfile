'use client'
import React from 'react'
import { myStack } from '@/Data/globalData'
import FallingTech from './FallingTech'
import { BsArrowDownCircleFill } from 'react-icons/bs'

export const StackTechText: React.FC = () => {
    return (
        <div className="h-[700px] md:h-[400px] ">
            <div className='md:hidden flex justify-center mt-4'>
                <a href="#experience">
                    <BsArrowDownCircleFill size={50} className='text-myBack-800'/>
                </a>
            </div>
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
            <div className='flex justify-center mb-4'>
                <a href="#experience">
                    <BsArrowDownCircleFill size={50} className='text-myBack-800'/>
                </a>
            </div>
        </div>
    )
}

export default StackTechText