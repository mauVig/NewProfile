'use client'
import React from 'react'
import { myStack } from '@/Data/globalData'
import FallingTech from './FallingTech'
import { BsArrowDownCircleFill } from 'react-icons/bs'

export const StackTechText: React.FC = () => {
    return (
        <div className="h-[500px] ">
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
        </div>
    )
}

export default StackTechText