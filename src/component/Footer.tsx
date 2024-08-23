import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsSendArrowUp } from "react-icons/bs";

const todayYear: number = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="px-2 pb-7 pt-20 lg:pt-16 bg-blackColor relative">
      <div className="absolute -top-[35px] left-[50%] -translate-x-[50%] text-orange rounded-full p-4 bg-blackColor">
        <a
          href="#"
          className="flex flex-col justify-center items-center w-20 h-20"
        >
          <BsSendArrowUp className="-rotate-[42deg] text-2xl" />
          <span className="text-sm">[Back to top]</span>
        </a>
      </div>

      <div className="w-full text-center lg:flex justify-between items-center lg:px-5 xl:px-10 2xl:px-16">
        <div className="mb-10 lg:mb-0">
          <Link to="/">
            <img
              src="/Jaltc.svg"
              alt="logo"
              className="w-16 mx-auto z-10 relative"
            />
          </Link>
        </div>

        <div className="flex items-center justify-center gap-14 text-white mb-10 lg:mb-0 cursor-pointer font-roboto">
          <Link
            to="/"
            className="block hover:text-green transition-color duration-150"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-green transition-color duration-150"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="block hover:text-green transition-color duration-150"
          >
            My work
          </Link>
          <a
            href="https://www.linkedin.com/in/jason-lee-tien-choi-951b3916b/"
            target="_blank"
            className="text-white block"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <p className="paragraph text-white font-roboto text-sm">
          All rights reserved @{todayYear}
        </p>
      </div>
    </div>
  );
};

export default Footer;
