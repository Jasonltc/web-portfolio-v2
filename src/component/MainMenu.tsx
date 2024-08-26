import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MENU } from "../Store/AboutData";
import { FaLinkedinIn } from "react-icons/fa6";

const MainMenu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  function closeMenuHandle() {
    setOpen((prev) => !prev);
  }

  return (
    <>
      <nav className="flex justify-between items-center py-5 px-3 bg-blackColor sticky top-0 z-10 lg:px-5 xl:px-10 2xl:px-16">
        <Link to="/">
          <img src="/Jaltc.svg" alt="logo" className="w-16" />
        </Link>

        <CiMenuFries
          className="text-lg lg:text-xl text-white cursor-pointer sticky top-0 z-10 w-10 h-10 bg-blackBg p-2 rounded-full"
          onClick={closeMenuHandle}
        />
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 70,
              dumping: 10,
              ease: "easeInOut",
            }}
            exit={{ x: 550 }}
            className="fixed top-0 right-0 w-3/4 md:w-1/3 xl:w-[300px] bg-blackColor text-white h-full z-20 shadow-xl shadow-black  
        "
          >
            <IoCloseCircleOutline
              className="absolute right-7 top-7 text-4xl 2xl:text-6xl cursor-pointer hover:text-orange hover:scale-110 transition-all duration-150"
              onClick={closeMenuHandle}
            />
            <div className="absolute top-32 left-[50%] -translate-x-[50%]">
              <ul className="mb-20">
                {MENU.map((item) => (
                  <li
                    key={item.title}
                    className="uppercase mb-5 text-lg lg:text-xl 2xl:text-2xl font-roboto hover:text-green hover:scale-110 transition-all duration-150"
                  >
                    <Link to={item.link} onClick={closeMenuHandle}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mb-20">
                <p className="text-lg lg:text-xl 2xl:text-2xl mb-5 font-roboto">
                  Say Hello
                </p>
                <a
                  href="mailto: jasonltc_14@hotmail.com"
                  className="mb-5 block font-roboto hover:text-orange hover:scale-110 transition-all duration-150"
                >
                  jasonltc_14@hotmail.com
                </a>
                <a
                  href="tel: +23059460033"
                  className="block hover:text-orange hover:scale-110 transition-all duration-150"
                >
                  (+230) 594 600 33
                </a>
              </div>

              <a
                href="https://www.linkedin.com/in/jason-lee-tien-choi-951b3916b/"
                target="_blank"
                className="text-white block font-roboto hover:text-orange hover:scale-110 transition-all duration-150"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainMenu;
