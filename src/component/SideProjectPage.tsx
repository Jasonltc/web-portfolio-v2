import { motion } from "framer-motion";
import BtnWeb from "../ui/BtnWeb";
import { TbBuildingBridge } from "react-icons/tb";
import gameTicTok from "../assets/project_list/game-logo.png";
import burgerDrawing from "../assets/project_list/burger.jpg";
import coffeeDrawing from "../assets/project_list/coffee.jpg";
import { dectArry } from "../Store/AboutData";
import { TbHandClick } from "react-icons/tb";

const ParagraphVariable = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const SideProject = () => {
  return (
    <section className="container mb-10 px-3 mx-auto xl:mb-20">
      <motion.h2
        className="sub-title mb-5 md:text-center"
        initial="initial"
        whileInView="animate"
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 150,
          dumping: 10,
          ease: "easeInOut",
        }}
        variants={ParagraphVariable}
        viewport={{ once: true }}
      >
        You provide the Vision I help you realise it.
      </motion.h2>

      <motion.p
        className="paragraph mb-10 md:text-center lg:max-w-[800px] lg:mx-auto"
        initial="initial"
        whileInView="animate"
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 150,
          dumping: 10,
          ease: "easeInOut",
        }}
        variants={ParagraphVariable}
        viewport={{ once: true }}
      >
        I reveal the unique aspects already within your company, bringing your
        goals, passions, and distinctive qualities to the forefront. I amplify
        your strengths and give them a compelling voice and presence that
        captures attention. You know your work is transformative, and I can help
        others see that too. Let's get started—I’m excited to hear about your
        creations and be a part of your journey.
      </motion.p>

      <motion.div
        className="mb-10 md:grid grid-cols-2 justify-start items-center gap-3 max-w-[800px] mx-auto"
        initial="initial"
        whileInView="animate"
        transition={{
          delay: 1.5,
          type: "spring",
          stiffness: 150,
          dumping: 10,
          ease: "easeInOut",
        }}
        variants={ParagraphVariable}
        viewport={{ once: true }}
      >
        <div>
          <p className="text-xs font-semibold uppercase mb-2">
            <TbBuildingBridge /> build from{" "}
            <span className="text-orange">scratch</span>
          </p>

          <div className="border min-h-[242px] md:min-h-[464px] mb-5 md:mb-0 bg-[#f3f3f3] border-black relative grid place-content-center group">
            <div className="text-center">
              <motion.img
                animate={{ rotate: "10deg", x: [10, -10] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                src={coffeeDrawing}
                alt="game-logo"
                className="w-40 mix-blend-darken"
              />
              <p className="uppercase text-gray-950 font-caveat font-extrabold text-lg">
                coffee Time
              </p>
            </div>
            <div className="overlay">
              <div className="p-4">
                <p className="mb-6 text-center font-bold text-green tracking-wide">
                  A cozy haven where the aroma of freshly ground coffee beans
                  greets you at the door.
                </p>
                <div className="flex justify-center items-center gap-4 mb-6">
                  <img src={dectArry[5]} alt="tectLogo" className="w-8" />
                  <img src={dectArry[3]} alt="tectLogo" className="w-8" />
                  <img src={dectArry[7]} alt="tectLogo" className="w-8" />
                </div>
                <a
                  href="https://coffee-lovers-shop.netlify.app/"
                  target="_blank"
                  className="block border p-3 w-52 mx-auto text-center font-extrabold text-white tracking-wide hover:scale-110 transition-all duration-150"
                >
                  Visit
                </a>
              </div>
            </div>

            <div className="absolute bottom-5 right-5 text-2xl xl:opacity-0 group-hover:opacity-0 transition-all duration-75">
              <TbHandClick />
            </div>
          </div>
        </div>

        <div className="md:flex flex-col justify-between items-center gap-4">
          <div className="min-h-[242px] w-full mb-5 md:mb-0 bg-amber-600 relative grid place-content-center group">
            <div className="text-center">
              <motion.img
                animate={{ y: [3, -5], rotate: ["-5deg", "7deg"] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  stiffness: 50,
                }}
                src={burgerDrawing}
                alt="burger"
                className="w-32 mix-blend-multiply"
              />
              <p className="uppercase text-gray-950 font-caveat font-extrabold text-lg">
                Burger Lover
              </p>
            </div>

            <div className="overlay">
              <div className="p-4">
                <p className="mb-6 text-center font-bold text-green tracking-wide">
                  Where every bite takes you on a flavorful journey. Big burger
                  is the place to eat.
                </p>

                <div className="flex justify-center items-center gap-4 mb-6">
                  <img src={dectArry[0]} alt="tectLogo" className="w-8" />
                  <img src={dectArry[2]} alt="tectLogo" className="w-8" />
                  <img src={dectArry[9]} alt="tectLogo" className="w-8" />
                </div>

                <a
                  href="https://lovely-burger.netlify.app/"
                  target="_blank"
                  className="block border p-3 w-52 mx-auto text-center font-extrabold text-white tracking-wide hover:scale-110 transition-all duration-150"
                >
                  Visit
                </a>
              </div>
            </div>

            <div className="absolute bottom-5 right-5 text-2xl xl:opacity-0 group-hover:opacity-0 transition-all duration-75">
              <TbHandClick />
            </div>
          </div>

          <div className="min-h-[242px] border w-full mb-5 md:mb-0 bg-[#f3cd54] relative grid place-content-center group">
            <div className="text-center">
              <motion.img
                animate={{
                  scale: [0.5, 1, 1, 0.8, 0.5],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  stiffness: 50,
                }}
                src={gameTicTok}
                alt="game-logo"
                className="mb-2 w-32"
              />
              <p className="uppercase text-gray-950 font-caveat font-extrabold text-lg">
                tic tac toe
              </p>
            </div>

            <div className="overlay">
              <div className="p-4">
                <p className="mb-6 text-center font-bold text-green tracking-wide">
                  Welcome to the timeless world of Tic Tac Toe, a game that
                  blends strategy, fun, and simplicity.
                </p>
                <div className="flex justify-center items-center gap-4 mb-6">
                  <img src={dectArry[5]} alt="tectLogo" className="w-8" />
                  <img src={dectArry[2]} alt="tectLogo" className="w-8" />
                  <img src={dectArry[3]} alt="tectLogo" className="w-8" />
                </div>
                <a
                  href="https://game-ox-player.netlify.app/"
                  target="_blank"
                  className="block border p-3 w-52 mx-auto text-center font-extrabold text-white tracking-wide hover:scale-110 transition-all duration-150"
                >
                  Visit
                </a>
              </div>
            </div>

            <div className="absolute bottom-5 right-5 text-2xl xl:opacity-0 group-hover:opacity-0 transition-all duration-75">
              <TbHandClick />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="md:text-center"
        initial="initial"
        whileInView="animate"
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 150,
          dumping: 10,
          ease: "easeInOut",
        }}
        variants={ParagraphVariable}
        viewport={{ once: true }}
      >
        <BtnWeb link="/projects">more Here</BtnWeb>
      </motion.div>
    </section>
  );
};

export default SideProject;
