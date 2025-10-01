'use client';
import React from 'react';
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";
import Image from 'next/image';

interface ContCompanyProps {
    children: React.ReactNode;
    img: string;
    alt: string;
    company: string;
    comentary: string;
}

const ContCompany: React.FC<ContCompanyProps> = ({ children, img, alt, company, comentary }) => {
    return (
        <>
            <div className='mt-8 bg-myOrange-700 text-myGray-800 w-fit mx-auto rounded-lg'>

                <Image width={400} height={400} src={img} className='w-full rounded-t-lg ' alt={alt} />
                
                <div className='flex flex-col py-8 px-4 sm:px-12 relative'>
                    <div className='absolute top-0 right-0 mlg:-right-9 m-4'>
                        <span className='w-fit font-bold title mb-8 bg-myOrange-400 text-myGray-900 px-3 py-1 rounded-[100px]' style={{ fontSize: 'clamp(0.8rem, 2vw, 1.25rem)' }}>Experiencia destacada</span>
                    </div>
                    <div className='h-full flex items-center py-12'>
                        <div>
                            <h3 className='font-bold title mb-8' style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>{company}</h3>
                            <div className='relative md:max-w-[700px]'>
                                <HiMiniChatBubbleLeftEllipsis className='absolute text-2xl mt-2 ' />
                                <p className='mb-6 italic indent-8' style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)' }}>&ldquo;{comentary}&rdquo;</p>
                            </div>
                            
                            <div className='flex flex-col justify-start gap-4 '>
                                <h4 className='title font-bold mt-8 mb-4' style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)' }}>Ingresa a los proyectos</h4>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContCompany;