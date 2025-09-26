'use client';
import React from 'react';
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";

const Loesen: React.FC = () => {
    return (
        <>
            <div className='flex justify-end w-[600px]'>
                <span className='text-xl w-fit font-bold title mb-8 bg-myOrange-400 text-myGray-900 px-3 py-1 rounded-l-[100px] '>Experiencia destacada</span>
            </div>
            <div className='h-full flex items-center'>
                <div>
                    <h3 className='text-5xl font-bold title mb-8'>Loesen</h3>
                    <div className='relative'>
                        <HiMiniChatBubbleLeftEllipsis className='absolute text-2xl mt-2' />
                        <p className='text-2xl mb-6 italic indent-8'>&ldquo;Este fue mi primer trabajo como desarrollador, el cual le tengo gran cariño. Lamentablemente la empresa no prosperó, pero siempre voy a tener en mi recuerdo esta gran experiencia&rdquo;</p>
                    </div>
                    
                    <div className='flex flex-col justify-start gap-4 mt-6'>
                        <h4 className='title font-bold mt-8 mb-4 text-2xl'>Proyectos</h4>
                        <div className="h-14">
                            <a href="https://fabricante.logipartes.com.ar/" target="_blank" rel="noopener noreferrer">
                                <button  
                                    className="bg-myOrange-400 text-myGray-800 border border-myGray-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group hover:cursor-pointer text-xl"
                                    >
                                    <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-96 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                    fabricante.logipartes.com.ar
                                </button>  
                            </a>
                       </div>
                        <div className="h-14">
                            <a href="https://casas.logipartes.com.ar/" target="_blank" rel="noopener noreferrer">
                                <button  
                                    className="bg-myOrange-400 text-myGray-800 border border-myGray-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group hover:cursor-pointer text-xl"
                                    >
                                    <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-96 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                    casas.logipartes.com.ar
                                </button>  
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
};

export default Loesen;