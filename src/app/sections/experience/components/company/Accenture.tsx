'use client';
import React from 'react';
import Modal from '../modal/Modal';
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";

const Accenture: React.FC = () => {
    return (
        <>
            <div className='flex justify-end w-[600px]'>
                <span className='text-xl w-fit font-bold title mb-8 bg-myOrange-400 text-myGray-900 px-3 py-1 rounded-l-[100px] '>Experiencia destacada</span>
            </div>
            <div className='h-full flex items-center'>
                <div>
                    <h3 className='text-5xl font-bold title mb-8 '>Accenture</h3>
                    <div className='relative '>
                        <HiMiniChatBubbleLeftEllipsis className='absolute text-2xl mt-2' />
                        <p className='text-2xl mb-6 italic indent-8'>"Durante mis 2 años de experiencia en la empresa, participé en proyectos innovadores que me permitieron crecer profesionalmente y colaborar con equipos excepcionales."</p>
                    </div>
                    
                    <div className='flex flex-col justify-start gap-4 '>
                        <h4 className='title font-bold mt-8 mb-4 text-2xl'>Proyectos</h4>
                        <Modal title="Email marketing" pro={1}/>
                        <Modal title="Evaluar oportunidades de negocio" pro={2}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Accenture;