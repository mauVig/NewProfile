'use client'
import React from 'react'
import { myStack } from '@/Data/stackIconst'
import FallingTech from './FallingTech'

export const StackTechText: React.FC = () => {
    return (
        <div className="h-[600px] ">
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