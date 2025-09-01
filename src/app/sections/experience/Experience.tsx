import React from 'react';

interface ExperienceProps {
    // Add your props here if needed
}

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <section className="py-16 bg-myBack-800 text-myBack-100">
            <div className='max-w-[var(--myMaxWidth)] mx-auto'>
                 <h2 className='text-5xl title'>Mi experiencia</h2>
            </div>
           
        </section>
    );
};

export default Experience;