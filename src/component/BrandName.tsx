import abc from "../assets/brands/abc.png";
import dtos from "../assets/brands/dtos.png";
import lucrin from "../assets/brands/lucrin.png";
import nova from "../assets/brands/nova.png";
import wshop from "../assets/brands/wshop.png";

let brands = [abc, dtos, lucrin, nova, wshop];

function BrandName() {
  return (
    <div className="grid grid-cols-3 gap-2 md:flex justify-center items-center lg:gap-8">
      {brands.map((brand) => (
        <div key={brand} className="p-2 bg-slate-100">
          <img
            key={brand}
            src={brand}
            className="mx-auto lg:w-[150px] mix-blend-multiply"
          />
        </div>
      ))}
    </div>
  );
}

export default BrandName;
