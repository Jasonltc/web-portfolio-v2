import { Link } from "react-router-dom";

const BtnWeb: React.FC<{ children: React.ReactNode; link: string }> = (
  props
) => {
  return (
    <Link
      to={props.link}
      preventScrollReset={true}
      className="py-3 px-10 bg-white text-gray-600 text-base border border-gray-300 hover:bg-green hover:text-white hover:scale-110 uppercase transition-all shadow-md ease-in duration-300 font-roboto lg:py-2 lg:px-7"
    >
      {props.children}
    </Link>
  );
};

export default BtnWeb;
