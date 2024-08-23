import { motion } from "framer-motion";
import LetConnect from "../component/LetConnect";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projectStructure } from "../Store/AboutData";
import { TbBuildingBridge } from "react-icons/tb";

const blockContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 2,
    },
  },
};

const childContainerVariants = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

const Projects = () => {
  return (
    <>
      <section className="mb-10 lg:mb-15">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={blockContainerVariants}
          className="p-2 bg-gray-100"
        >
          {projectStructure.map((project) => (
            <motion.div
              variants={childContainerVariants}
              key={project.name}
              className="border-b border-dotted last:border-0 border-black p-7 container mx-auto text-center md:flex justify-between items-start group relative"
            >
              <div>
                <p className="text-xs font-semibold uppercase hidden xl:block font-roboto">
                  <TbBuildingBridge /> build from scratch
                </p>
                <img
                  src={project.img}
                  alt="project-image"
                  className="w-[200px] md:w-[120px] lg:w-[150px] lg:-rotate-6 mb-6 xl:opacity-0 mx-auto xl:absolute top-7 xl:group-hover:opacity-100 transition-all duration-300 ease-in"
                />
              </div>

              <p className="font-roboto text-xl mb-5 uppercase font-bold w-full md:max-w-20 text-orange md:text-left lg:md:max-w-32">
                {project.name}
              </p>

              <div className="mb-7 md:text-left">
                <p className="paragraph mb-6 md:max-w-[200px] lg:max-w-[400px]">
                  {project.history}
                </p>

                <div className="flex justify-center md:justify-start items-center gap-6">
                  {project.logo.map((logo) => (
                    <img
                      key={logo}
                      src={logo}
                      alt="logo"
                      className="w-[25px]"
                    />
                  ))}
                </div>
              </div>

              <div className="self-center">
                <a
                  href={project.link}
                  target="_blank"
                  className="flex justify-center items-center gap-3 cursor-pointer py-2 px-5 bg-white text-black text-sm border border-gray-300 hover:bg-green hover:text-white uppercase transition-all shadow-md ease-in duration-300 w-[200px] mx-auto"
                >
                  <span className="font-roboto">view online</span>
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <LetConnect />
    </>
  );
};

export default Projects;
