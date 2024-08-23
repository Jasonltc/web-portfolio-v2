import { motion } from "framer-motion";
import { TECTUSED } from "../Store/AboutData";

const devBoxVariable = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const devtoolVariable = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const DevTools = () => {
  return (
    <section className="container mb-10 px-3 mx-auto xl:mb-20">
      <p className="mb-10 text-base">
        <span className="paragraph text-green font-bold text-lg">
          Here is a little bit about
        </span>
        <br />
        Languages and Toolkit, that I am currently using.
      </p>

      <motion.div
        className="grid grid-cols-3 gap-10 md:gap-14 md:grid-cols-4 lg:grid-cols-5 justify-center items-start place-content-center text-center"
        initial="hidden"
        whileInView="show"
        variants={devBoxVariable}
        viewport={{ once: true }}
      >
        {TECTUSED.map((tect) => (
          <motion.div key={tect.name} variants={devtoolVariable}>
            <div>
              <img
                className="w-[50px] mx-auto mb-3"
                src={tect.img}
                alt="logo"
              />
              <p className="capitalize font-roboto text-gray-600">
                {tect.name}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default DevTools;
