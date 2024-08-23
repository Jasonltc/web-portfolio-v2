import { motion } from "framer-motion";
// import { useRef } from "react";
import LetConnect from "../component/LetConnect";
import { FACTS, JOURNEY } from "../Store/AboutData";
import myCv from "../assets/pdf/CV_2024.pdf";
import aboutme1 from "../assets/profile/aboutme1.png";
import aboutme2 from "../assets/profile/aboutme2.png";
import aboutme3 from "../assets/profile/aboutme3.png";
import aboutme4 from "../assets/profile/aboutme4.png";
import aboutme5 from "../assets/profile/aboutme5.png";
import aboutme6 from "../assets/profile/aboutme6.png";
// import { IoMdPaperPlane } from "react-icons/io";

const boxContainerRightVariant = {
  initial: { opacity: 0, x: -150 },
  animate: { opacity: 1, x: 0 },
};

const boxContainerLeftVariant = {
  initial: { opacity: 0, x: 150 },
  animate: { opacity: 1, x: 0 },
};

const imageBoxVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const imageChildVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeContainerVariant = {
  initial: { opacity: 0, y: 100, scale: 0.5 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

const AboutPage = () => {
  // const plane = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="container p-3 mx-auto mb-10 lx:mb-20">
        <div className="mb-5 md:mb-10 pt-5 md:flex justify-center items-center gap-7">
          <motion.div
            className="mb-6"
            initial="initial"
            animate="animate"
            variants={boxContainerRightVariant}
            transition={{ duration: 1 }}
          >
            <h1 className="tracking-wider text-green font-extrabold text-3xl mb-5 uppercase xl:text-5xl">
              About.
            </h1>

            <p className="paragraph mb-5">
              I'm a Frontend / React developer based in Mauritius
            </p>

            <p className="paragraph md:max-w-[300px] lg:max-w-[700px] xl:max-w-[500px]">
              Hi, my name is Jason Lee and I'm here at your service as a front
              end developer. While I specialize in creating responsive websites
              from scratch, I love taking on unique creative challenges. If you
              have a vision that can make the world look better, I'd love to be
              a part of it.
            </p>
          </motion.div>

          <motion.img
            initial="initial"
            animate="animate"
            variants={boxContainerLeftVariant}
            transition={{ duration: 1 }}
            src={aboutme1}
            alt="photo"
            className="w-full md:w-[350px]"
          />
        </div>

        <div className="mb-6 md:mb-10 xl:flex justify-center items-center gap-8">
          <p className="tracking-wider text-2xl mb-5 font-caveat text-gray-600">
            Always smiling
          </p>
          <motion.div
            className="flex gap-2 justify-start overflow-x-scroll overflow-hidden items-center md:overflow-auto md:justify-center lg:overflow-hidden"
            initial="initial"
            whileInView="animate"
            variants={imageBoxVariant}
            viewport={{ once: true }}
          >
            <motion.img
              src={aboutme2}
              alt="photo"
              className="w-[140px] h-full"
              variants={imageChildVariant}
            />
            <motion.img
              src={aboutme3}
              alt="photo"
              className="w-[140px] h-full"
              variants={imageChildVariant}
            />
            <motion.img
              src={aboutme4}
              alt="photo"
              className="w-[140px] h-full"
              variants={imageChildVariant}
            />
            <motion.img
              src={aboutme5}
              alt="photo"
              className="w-[140px] h-full"
              variants={imageChildVariant}
            />
            <motion.img
              src={aboutme6}
              alt="photo"
              className="w-[140px] h-full"
              variants={imageChildVariant}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-10 p-5 md:flex justify-center items-center gap-10 border w-fit mx-auto rounded-lg shadow-lg"
        >
          <div className="md:order-2">
            <div className="w-full md:max-w-96 mb-10 md:mb-0">
              <h2 className="text-xl text-gray-400 font-bold mb-5 tracking-wider">
                Some facts on me
              </h2>

              <ul>
                {FACTS.map((fact) => (
                  <li className="paragraph mb-5" key={fact}>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:order-1">
            <img
              className="md:w-[200px] xl:w-[350px]"
              src="/luffy.jpg"
              alt=""
            />
          </div>
        </motion.div>

        <div className="mb-5 md:mb-10 pt-5">
          <h2 className="text-xl text-gray-400 font-bold tracking-wider mb-5 md:text-center">
            My Jouney
          </h2>

          <div className="lg:max-w-4xl mx-auto relative">
            {/* <div
              className="plane hidden lg:block plane w-16 rotate-[140deg] mx-auto"
              ref={plane}
            >
              <IoMdPaperPlane className="text-green text-6xl" />
            </div> */}

            {JOURNEY.map((journey) => (
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={fadeContainerVariant}
                transition={{
                  duration: 1.5,
                  type: "spring",
                  stiffness: 150,
                  dumping: 10,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                key={journey.date.dateStart}
                className="mb-5 max-w-[400px] border border-gray-300 p-4 even:ml-auto"
              >
                <div className="paragraph text-orange font-bold mb-2">
                  <span> {journey.date.dateStart}</span>
                  <span> {journey.date.dateEnd}</span>
                </div>
                <p className="paragraph">{journey.history}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <a
          href={myCv}
          download="CV_2024.pdf"
          className="py-3 px-10 bg-white text-gray-600 text-base border border-gray-300 hover:bg-green hover:text-white w-[165px] uppercase transition-all shadow-md ease-in duration-300 block text-center mx-auto font-roboto"
        >
          My resume
        </a>
      </div>
      <LetConnect />
    </>
  );
};

export default AboutPage;
