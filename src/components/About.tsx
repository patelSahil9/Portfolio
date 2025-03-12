import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SkillCubeCanvas } from "./canvas";
import { Code, Server, PenTool, Layers } from "lucide-react";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "WebIcon":
        return <Code className="w-16 h-16 text-white" />;
      case "ReactIcon":
        return <Layers className="w-16 h-16 text-white" />;
      case "ServerIcon":
        return <Server className="w-16 h-16 text-white" />;
      case "PenToolIcon":
        return <PenTool className="w-16 h-16 text-white" />;
      default:
        return <Code className="w-16 h-16 text-white" />;
    }
  };

  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <div className="rounded-full flex justify-center items-center">
          {getIcon(icon)}
        </div>

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] md:w-1/2"
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        <div className="md:w-1/2 h-[400px] mt-8 md:mt-0">
          <SkillCubeCanvas />
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;