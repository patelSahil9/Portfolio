import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

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
          <div className="w-28 h-28" key={technology.name}>
            <div className="h-20">
              <BallCanvas icon={technology.icon} />
            </div>
            <p className="text-center text-secondary mt-2">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tech;