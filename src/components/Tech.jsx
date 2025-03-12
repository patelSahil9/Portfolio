import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { technologies } from "../constants";

const TechCard = ({ name, icon }) => {
  return (
    <div className="w-28 h-28 flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-tertiary flex items-center justify-center hover:scale-105 transition-transform">
        <img 
          src={icon} 
          alt={name} 
          className="w-12 h-12"
        />
      </div>
      <p className="text-center text-secondary mt-2">{name}</p>
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My technical skills
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
          Technologies.
        </h2>
      </motion.div>
      
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <TechCard key={technology.name} {...technology} />
        ))}
      </div>
    </>
  );
};

export default Tech;