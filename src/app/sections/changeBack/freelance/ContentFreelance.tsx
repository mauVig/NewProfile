import TechCard from '@/app/sections/textAndStack/components/TechCard';
import { myStack } from '@/Data/globalData';
import Image from 'next/image';
import React from 'react';
import { FaArrowAltCircleRight, FaGithub, FaGithubSquare } from 'react-icons/fa';
import { HiMiniChatBubbleLeftEllipsis } from 'react-icons/hi2';

interface propsContentFreelance {
  urlLink: string;
  alt: string;
  title: string;
  description: string;
  techOrder: string[];
  urlImage: string;
  gitHubUrl: string;
  urlLinkName: string;
}

const ContentFreelance:React.FC<propsContentFreelance> = ({ urlLink, urlImage, alt, title, description, techOrder, gitHubUrl, urlLinkName }) => {
  
  const motionSctack = myStack
    .filter(tech => techOrder.includes(tech.name))
    .sort((a, b) => techOrder.indexOf(a.name) - techOrder.indexOf(b.name));
  return (
    <div
      className='group/card'>
      <Image src={urlImage} alt={alt} height={400} width={600} />
      <div className='p-8 '>
        <div className='h-32 xxs:h-fit text-4xl flex gap-3 mb-6 transition-all duration-300'>
          <FaArrowAltCircleRight className='pt-1 scale-0 lg:group-hover/card:scale-100 opacity-0 lg:group-hover/card:opacity-100 transition-all duration-300 ease-in-out' />
          <h3 className='text-4xl font-bold title transition-all duration-300 transform -translate-x-12 lg:group-hover/card:translate-x-0'>{title}</h3>
        </div>
        <div className='relative h-[280px] xxs:h-[230px] xs:h-[170px] tlg:h-[150px]'>
          <HiMiniChatBubbleLeftEllipsis className='absolute text-2xl mt-1' />
          <p className='text-2xl mb-6 italic indent-8'>{description}</p>
        </div>
        <div className='h-26 xs:h-13 xs:flex gap-2 mb-8'>

          <a  href={gitHubUrl} target="_blank" rel="noopener noreferrer"
          className="bg-myOrange-400 text-myGray-800 border border-myGray-800 border-b-4 font-medium overflow-hidden relative px-4 py-1.5 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group/button hover:cursor-pointer flex items-center gap-2 w-fit mb-4 xs:mb-0 "
          >
            <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-96 h-[5px] rounded-md opacity-50 group-hover/button:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            <FaGithub  className='h-8 w-8 mt-0.5' />
            <span className="xs:hidden">Repositorio</span>
          </a>

          <a  href={urlLink} target="_blank" rel="noopener noreferrer"
          className="bg-myGray-800 text-myGray-200 border border-myGray-800 border-b-4 font-medium overflow-hidden relative pl-2 pr-6 xs:py-1.5 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group/button hover:cursor-pointer flex items-center gap-2 w-fit py-3"
          >
            <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-96 h-[5px] rounded-md opacity-50 group-hover/button:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            <FaArrowAltCircleRight className=' h-6 w-6 ml-1' />
            {urlLinkName}
          </a>

        </div>
        <div className='flex flex-col justify-start gap-4 mt-8 xs:mt-0'>
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
    </div>
  );
};

export default ContentFreelance;
