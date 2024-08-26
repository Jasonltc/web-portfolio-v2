import { motion } from "framer-motion";
import BtnWeb from "../ui/BtnWeb";

const ParagraphVariable = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const AboutHomePage = () => {
  return (
    <section className="container px-3 mb-10 mx-auto xl:mb-20">
      <div className="md:flex justify-center items-center gap-24">
        <div className="flex justify-center items-center mb-5 gap-3 overflow-hidden pb-5">
          <div className="relative w-1/2">
            <motion.div
              className="w-24 h-10 bg-green border ml-auto rounded-l-full"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.div
              className="w-10 h-28 bg-green border ml-auto"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.div
              className="w-28 h-10 bg-green border ml-auto rounded-l-full"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            ></motion.div>
          </div>

          <motion.div className="relative w-1/2">
            <motion.div
              className="w-10 h-40 bg-orange border rounded-t-full"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.div
              className="w-28 h-8 bg-orange border rounded-r-full"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>
        </div>

        <motion.div className="w-full text-left lg:max-w-[400px]">
          <motion.h2
            className="sub-title"
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
            About Me.
          </motion.h2>

          <motion.p
            className="paragraph mb-7"
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
            My name is Jason and I'm a React web developer. Since 2019, I've
            enjoyed building web site from simple to complex one. I have had the
            privilege of collaborating with prestigious organizations. <br />
            Want to learn a litte more on me ! Click the button below.
          </motion.p>

          <motion.div
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
            <BtnWeb link="/about">About me </BtnWeb>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHomePage;
