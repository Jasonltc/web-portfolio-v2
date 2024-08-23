import { motion } from "framer-motion";
import BrandName from "./BrandName";

const ParagraphVariable = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

function Brands() {
  return (
    <section className="bg-slate-100 mb-10 xl:mb-20">
      <div className="container py-10 px-3 mx-auto">
        <div>
          <motion.h2
            className="sub-title md:text-center"
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
            Brands that I'm proud to have collaborated with:
          </motion.h2>

          <motion.p
            className="paragraph mb-7 md:text-center lg:max-w-[800px] lg:mx-auto"
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
            My experience working alongside major brands has significantly
            enhanced my skillset. Through these collaborations, I have gained a
            wealth of knowledge and insights, allowing me to consistently refine
            my expertise.
            <br />
          </motion.p>

          <motion.div
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
            <BrandName />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
