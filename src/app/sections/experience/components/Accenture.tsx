'use client';
import React from 'react';



interface AccentureProps {
    // Add any props you need here
}

const Accenture: React.FC<AccentureProps> = () => {
    return (
        <div className='mt-8 bg-myOrange-700 text-myGray-800 flex rounded-l-[100px] '>
            <img src="/img/accImg.webp" className='h-[800px] rounded-l-[100px]' alt="" />
            <div className='flex justify-center items-center p-8 title'>
                <div>
                    <h3 className='text-5xl font-bold title mb-8'>Experiencia Destacada</h3>
                    <p className='text-2xl w-[600px] mb-6'>Durante mi tiempo en esta empresa, participé en proyectos innovadores que me permitieron crecer profesionalmente y colaborar con equipos excepcionales.</p>
                    <p className='text-2xl w-[600px]'> Haciendo clic en cada proyecto vas a encontrar Las respuestas qué me Harías en una entrevista </p>
                    <div className='flex justify-start gap-4'>
                        <button className='bg-myBack-900 text-myOrange-700 rounded-full px-6 py-1'>Proyecto 1</button>
                        <button className='bg-myBack-900 text-myOrange-700 rounded-full px-6 py-1'>Proyecto 2</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accenture;