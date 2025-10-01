import TechCard from '@/app/sections/textAndStack/components/TechCard';
import { myStack } from '@/Data/globalData';
import Image from 'next/image';
import React from 'react';
import { HiMiniChatBubbleLeftEllipsis } from 'react-icons/hi2';

interface propsContentFreelance {
  urlLink: string;
  alt: string;
  title: string;
  description: string;
  techOrder: string[];
  urlImage: string;
}

const ContentFreelance:React.FC<propsContentFreelance> = ({ urlLink, urlImage, alt, title, description, techOrder}) => {

  const motionSctack = myStack
    .filter(tech => techOrder.includes(tech.name))
    .sort((a, b) => techOrder.indexOf(a.name) - techOrder.indexOf(b.name));
  return (
    <a  
      href={urlLink}
      target="_blank" 
      rel="noopener noreferrer"
      className=' rounded-[20px] overflow-hidden hover:rounded-t-none transition-all duration-300 hover:shadow-l hover:cursos-pointer'>
      <Image src={urlImage} alt={alt} height={400} width={600} />
       <div className='p-8'>
          <div>
            <h3 className='text-4xl font-bold title mb-8'>{title}</h3>
          </div>
             <div className='relative  min-h-[130px]'>
                <HiMiniChatBubbleLeftEllipsis className='absolute text-2xl mt-1' />
                <p className='text-2xl mb-6 italic indent-8'>{description}</p>
            </div>
            <div className='flex flex-col justify-start gap-4'>
                <h4 className='title font-bold mt-8 text-2xl'>Stack</h4>
                <div>
                  {motionSctack.map((tech, index) => (
                    <TechCard
                      key={tech.name}
                      tech={tech}
                      iconSize={24}
                      isHighlighted={false}
                      index={index}
                    />
                  ))}
                </div>
            </div>
        </div>
    </a>
  );
};

export default ContentFreelance;
