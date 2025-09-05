import { TechItem } from "../types/typeStack";

const TechCard: React.FC<{
  tech: TechItem;
  iconSize: number;
  isHighlighted: boolean;
  index: number;
}> = ({ tech, iconSize, isHighlighted, index }) => {
  const IconComponent = tech.icon;
  
  return (
    <div 
      className={`tech-item inline-flex items-center gap-2 px-3 py-2 m-1 rounded-lg border-myBack-800 border-2  bg-myOrange-500 shadow-sm select-none cursor-pointer hover:shadow-md transition-shadow ${
        isHighlighted ? 'border-cyan-500 bg-cyan-50 text-cyan-700' : 'border-gray-300'
      }`}
      data-tech-index={index}
    >
      <IconComponent size={iconSize} />
      <span className="tech-name text-sm font-bold">{tech.name}</span>
    </div>
  );
};

export default TechCard;