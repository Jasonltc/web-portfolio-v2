import { motion } from "framer-motion";

const ParagraphVariable = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const LetConnect = () => {
  return (
    <section className="container px-3 mx-auto mb-24 md:text-center xl:mb-32">
      <motion.div
        className="mb-8"
        initial="initial"
        whileInView="animate"
        transition={{
          type: "spring",
          stiffness: 150,
          dumping: 10,
          ease: "easeInOut",
        }}
        variants={ParagraphVariable}
        viewport={{ once: true }}
      >
        <p className="font-extrabold text-2xl mb-2 md:text-3xl font-roboto">
          Let’s create something together
        </p>
        <p className="paragraph text-green font-bold md:text-lg">
          I'm always open to discussing for opportunities :
        </p>
      </motion.div>

      <motion.div
        className="md:flex justify-start items-center gap-36 md:justify-center"
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
        <div className="mb-8 md:mb-0">
          <p className="paragraph">Send me an email:</p>
          <a
            className="font-bold text-base"
            href="mailto: jasonltc_14@hotmail.com"
          >
            jasonltc_14@hotmail.com
          </a>
        </div>

        <div>
          <p className="paragraph">Give me a Call !</p>
          <a className="font-bold text-base" href="tel: +23059460033">
            (+230) 594 600 33
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default LetConnect;
