import { motion } from "framer-motion";
import BtnWeb from "../ui/BtnWeb";
import myCv from "../assets/pdf/CV_2024.pdf";
import heroprofile from "../assets/profile/intro-profil.jpg";
import { TbBuildingBridge } from "react-icons/tb";
import { CgScrollV } from "react-icons/cg";

const heroVariable = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const btnVariable = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2,
      staggerChildren: 0.5,
      duration: 1,
    },
  },
};

function Hero() {
  return (
    <>
      <section className="container mx-auto mb-5 px-3 pt-6 relative">
        <div className="mb-5">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            src={heroprofile}
            alt="profile-img"
            className="w-[150px] md:w-[200px] mx-auto rounded-full"
          />
        </div>

        <div className="text-center">
          <motion.p
            className="font-caveat mb-5 text-2xl xl:text-3xl text-gray-600"
            initial="initial"
            animate="animate"
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 150,
              dumping: 10,
              ease: "easeInOut",
            }}
            variants={heroVariable}
          >
            Hello, Kon'nichiwa, Nǐ hǎo, Ciao, Hola !
          </motion.p>

          <motion.p
            className="text-green mb-5 font-bold text-2xl uppercase md:text-4xl xl:text-5xl"
            initial="initial"
            animate="animate"
            transition={{
              delay: 1,
              type: "spring",
              stiffness: 150,
              dumping: 10,
              ease: "easeInOut",
            }}
            variants={heroVariable}
          >
            Frontend web developer <br />
            based in Mauritius
          </motion.p>

          <motion.p
            className="mb-10 lg:mb-5 text-sm tracking-wider font-roboto text-gray-600"
            initial="initial"
            animate="animate"
            transition={{
              delay: 1.5,
              type: "spring",
              stiffness: 150,
              dumping: 10,
              ease: "easeInOut",
            }}
            variants={heroVariable}
          >
            I am a frontend developer from Mauritius, with 5 years of
            experience.
          </motion.p>
        </div>

        <motion.div
          className="gap-4 grid grid-cols-2 justify-center items-center text-center md:flex xl:gap-8 mb-10 xl:mb-5 2xl:mb-10"
          initial="hidden"
          animate="show"
          variants={btnVariable}
        >
          <BtnWeb link="/projects">My work</BtnWeb>
          <BtnWeb link="/about">About me</BtnWeb>
          <a
            href={myCv}
            download="CV_2024.pdf"
            className="py-3 px-10 bg-white text-gray-600 text-base border border-gray-300 hover:bg-green hover:text-white hover:scale-110 md:w-[165px] uppercase transition-all shadow-md ease-in duration-300 font-roboto lg:py-2 lg:px-7"
          >
            My resume
          </a>
        </motion.div>

        <motion.div
          className="w-full"
          initial="initial"
          animate="animate"
          transition={{
            delay: 2.8,
            type: "spring",
            stiffness: 150,
            dumping: 10,
            ease: "easeInOut",
          }}
          variants={heroVariable}
        >
          <CgScrollV className="animate-bounce mx-auto text-3xl text-green" />
        </motion.div>
      </section>

      <section className="mb-16 py-4 overflow-hidden xl:mb-20 ">
        <motion.div
          className="bg-blackColor"
          initial={{ opacity: 0, rotate: "1deg" }}
          whileInView={{ opacity: 1, rotate: "1deg" }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <div className="px-4 py-8 flex items-center justify-start flex-nowrap w-[10000px] group">
            <div className="animate-loop-scroll group-hover:pause">
              <p className="motion-word">Business website</p>
              <TbBuildingBridge className="bridge text-green" />
              <p className="motion-word">Ecommerce website</p>
              <TbBuildingBridge className="bridge text-orange" />
              <p className="motion-word">Landing page</p>
              <TbBuildingBridge className="bridge text-green" />
              <p className="motion-word">Responsive design</p>
              <TbBuildingBridge className="bridge text-orange" />
              <p className="motion-word">animation</p>
              <TbBuildingBridge className="bridge text-green" />
            </div>

            <div className="animate-loop-scroll group-hover:pause">
              <p className="motion-word">Business website</p>
              <TbBuildingBridge className="bridge text-orange" />
              <p className="motion-word">Ecommerce website</p>
              <TbBuildingBridge className="bridge text-green" />
              <p className="motion-word">Landing page</p>
              <TbBuildingBridge className="bridge text-orange" />
              <p className="motion-word">Responsive design</p>
              <TbBuildingBridge className="bridge text-green" />
              <p className="motion-word">animation</p>
              <TbBuildingBridge className="bridge text-orange" />
            </div>

            <div className="animate-loop-scroll group-hover:pause">
              <p className="motion-word">Business website</p>
              <TbBuildingBridge className="bridge text-green" />
              <p className="motion-word">Ecommerce website</p>
              <TbBuildingBridge className="bridge text-orange" />
              <p className="motion-word">Landing page</p>
              <TbBuildingBridge className="bridge text-green" />
              <p className="motion-word">Responsive design</p>
              <TbBuildingBridge className="bridge text-orange" />
              <p className="motion-word">animation</p>
              <TbBuildingBridge className="bridge text-green" />
            </div>

            <div
              aria-hidden="true"
              className="animate-loop-scroll group-hover:pause"
            >
              <p className="motion-word">Business website</p>
              <TbBuildingBridge className="bridge text-green" />
              <p className="motion-word">Ecommerce website</p>
              <TbBuildingBridge className="bridge text-orange" />
              <p className="motion-word">Landing page</p>
              <TbBuildingBridge className="bridge text-green" />
              <p className="motion-word">Responsive design</p>
              <TbBuildingBridge className="bridge text-orange" />
              <p className="motion-word">animation</p>
              <TbBuildingBridge className="bridge text-green" />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
