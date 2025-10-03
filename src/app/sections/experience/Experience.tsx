'use client';
import React from 'react';
import Freelance from '../changeBack/freelance/Freelance';
import ContCompany from './ContCompany';
import Modal from './components/modal/Modal';

const Experience: React.FC = () => {

    return (
        <>  
            <div className='bg-myBack-800 text-myGray-300 py-28 px-4 mlg:px-8' id='experience'>
                <div className='max-w-[var(--myMaxWidth)] mx-auto mb-14' >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
                        Mi Experiencia
                    </h2>
                </div>
                <div className="xlg:grid grid-cols-2 gap-8">
                    <ContCompany 
                        img='/img/accImg.webp' 
                        alt='Imagen de la esquina del edificio de la empresa en en modo dibujitos'
                        company='Accenture' 
                        comentary="Durante mis 2 años en la empresa, participé en proyectos innovadores que me permitieron crecer profesionalmente y colaborar con equipos excepcionales."
                    >
                        <Modal title="Email marketing" pro={1}/>
                        <Modal title="Evaluar oportunidades <br/> de negocio" pro={2}/>
                    </ContCompany>

                    <ContCompany 
                        img='/img/losen.webp' 
                        alt='Imagen de que representa a una persona sentada en un escritorio trabajando con la página web de esta experiencia'
                        company='Loesen' 
                        comentary="Este fue mi primer trabajo como desarrollador, el cual le tengo gran cariño. Lamentablemente la empresa no prosperó, pero siempre voy a tener en mi recuerdo esta gran experiencia."
                    >
                        <div className="h-14">
                            <a href="https://fabricante.logipartes.com.ar/" target="_blank" rel="noopener noreferrer"
                            
                            >
                                <button  
                                    className="bg-myOrange-400 text-myGray-800 border border-myGray-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group hover:cursor-pointer text-xl"
                                    >
                                    <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-96 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                    <span
                                    style={{ fontSize: 'clamp(.875rem, 2.5vw, 1.3rem)' }}
                                    >fabricante.logipartes.com.ar</span>
                                    
                                </button>  
                            </a>
                        </div>
                        <div className="h-14">
                            <a href="https://casas.logipartes.com.ar/" target="_blank" rel="noopener noreferrer"
                            
                            >
                                <button  
                                    className="bg-myOrange-400 text-myGray-800 border border-myGray-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group hover:cursor-pointer text-xl"
                                    >
                                    <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-96 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                    <span
                                    style={{ fontSize: 'clamp(.875rem, 2.5vw, 1.3rem)' }}
                                    >casas.logipartes.com.ar</span>
                                </button>  
                            </a>
                        </div>
                    </ContCompany>
                </div>
            </div>
        </>
    );
};

export default Experience;