import { Link } from "react-router-dom";
const Errorpage = () => {
  return (
    <div className="absolute top-[50%] left-[50%] text-center -translate-x-[50%] -translate-y-[50%]">
      <div className="text-red-800 font-bold text-xl mb-3">
        Something want wrong
      </div>
      <p className="mb-7">GO Homepage by click on the button below</p>
      <Link
        to="/"
        className="border py-2 px-5 cursor-pointer bg-green text-white rounded-md"
      >
        Home page
      </Link>
    </div>
  );
};

export default Errorpage;
