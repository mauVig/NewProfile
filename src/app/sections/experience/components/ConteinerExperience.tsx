
import React from 'react';
import Image from 'next/image';
import Loesen from './company/Losen';
import Accenture from './company/Accenture';

interface conteinerProps {
    width: number;
    img: string;
    alt: string;
    company: string;
}

const ConteinerExperience: React.FC<conteinerProps> = ({ img, alt, width, company }) => {
    
    return (
        <div className='mt-8 bg-myOrange-700 text-myGray-800 flex  rounded-l-[20px]'>
            <Image width={width} height={800} src={img} className='h-[800px] rounded-l-[20px]' alt={alt} />
            <div className='flex flex-col p-8 w-[600px]'>
                {company === 'Accenture' && <Accenture />}
                {company === 'Loesen' && <Loesen />}
            </div>
        </div> 
    );
};

export default ConteinerExperience;