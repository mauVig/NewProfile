import { TechItem } from "../types/typeStack";

const TechCard: React.FC<{
  tech: TechItem;
  iconSize?: number;
  isHighlighted: boolean;
  index: number;
}> = ({ tech, isHighlighted, index }) => {
  const IconComponent = tech.icon;
  
  return (
    <div 
      className={`tech-item inline-flex items-center gap-2 px-3 py-2 m-1 rounded-lg border-myBack-800 border-2  bg-myOrange-500 hover:bg-myOrange-300 shadow-sm select-none hover:shadow-md transition-colors `}
      data-tech-index={index}
    >
      <IconComponent className=" w-5 h-5 xxs:w-6 xxs:h-6 xs:w-11 xs:h-11" />
      <span className="tech-name text-sm font-bold truncate">{tech.name}</span>
    </div>
  );
};

export default TechCard;